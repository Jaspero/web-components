<svelte:options
  customElement={{
    tag: 'jp-bpmn-single',
    shadow: 'none'
  }}
/>

<script lang="ts">
  import Button from '../Button.svelte';
  import { onMount } from 'svelte';
  import type { BPMNService } from '../types/bpmn.service';
  import type { BPMNVersion } from '../types/bpmn-version.interface';
  import type { BPMN } from '../types/bpmn.interface';
  import { loadBpmn } from '../load-bpmn';
  import type { BPMNTrigger } from '../types/bpmn-trigger.interface';

  export let service: BPMNService;
  export let id: string;
  export let version: number;
  export let baseLink = '/BPMN/';

  let loading = true;
  let sidebar = false;

  let modeler: any;
  let instance: BPMN;
  let instanceBackup: BPMN;
  let versionInstance: BPMNVersion;
  let triggers: BPMNTrigger[];

  let saveLoading = false;

  async function save() {
    const { xml } = await modeler.saveXML({ format: true });

    const changes = Object.keys(instance).some((key) => instance[key] !== instanceBackup[key]);

    if (changes) {
      await service.update(id, {
        name: instance.name,
        description: instance.description,
        trigger: instance.trigger,
        triggerCondition: instance.triggerCondition
      });
    }

    await service.createVersion(id, { xml });
    // goto(baseLink);
  }

  onMount(async () => {
    await loadBpmn();

    [instance, versionInstance, triggers] = await Promise.all([
      service.get(id),
      service.getVersion(id, version),
      service.getTriggers()
    ]);

    instanceBackup = { ...instance };

    // @ts-ignore
    modeler = new BpmnJS({
      container: '#canvas',
      keyboard: {
        bindTo: window
      }
    });

    // TODO: Handle warnings and errors
    const { warnings } = await modeler.importXML(versionInstance.xml);

    loading = false;
  });
</script>

<div class="h-screen overflow-hidden">
  {#if loading}
    <div class="z-10 absolute w-full h-screen bg-white flex justify-center items-center gap-1">
      <div class="animate-bounce">L</div>
      <div class="animate-bounce">o</div>
      <div class="animate-bounce">a</div>
      <div class="animate-bounce">d</div>
      <div class="animate-bounce">i</div>
      <div class="animate-bounce">n</div>
      <div class="animate-bounce">g</div>
      <div class="animate-bounce">.</div>
      <div class="animate-bounce">.</div>
      <div class="animate-bounce">.</div>
    </div>
  {/if}

  <div id="layout" class="flex flex-col w-full h-full">
    <nav class="flex justify-between bg-white p-4 border-b-2">
      <Button variant="outlined" href={baseLink}>Back</Button>
      <Button on:click={save} loading={saveLoading}>Save</Button>
    </nav>

    <div class="flex-1 flex">
      <div id="canvas" class="flex-1" />

      {#if instance && versionInstance}
        <div class="relative w-64 border-l-2 {sidebar ? '' : 'w-0'}">
          <button
            class="absolute top-1/2 right-full -rotate-90 border-t-2 border-x-2 flex items-center translate-x-10 -translate-y-1/2 p-1 rounded-t-lg bg-white hover:bg-[#E4E4E4]"
            on:click={() => (sidebar = !sidebar)}
          >
            <span class="px-4"> Details </span>
            <span class="material-symbols-outlined rotate-90 border-b-2 p-1"> menu </span>
          </button>

          <div class="flex items-center w-full h-14 bg-black/[2%] px-2 gap-2 border-b-2">
            <span class="material-symbols-outlined text-3xl"> check_box_outline_blank </span>

            <div>
              <h2 class="uppercase text-xs leading-4 font-bold truncate">BPMN</h2>
              <p class="text-xs leading-4 truncate">Settings</p>
            </div>
          </div>

          <details class="p-2 border-b-2 cursor-pointer">
            <summary class="text-sm">General</summary>
            <div class="flex flex-col gap-2 mt-4">
              <div class="flex flex-col gap-1">
                <label for="name">Name</label>
                <input id="name" bind:value={instance.name} required />
              </div>

              <div class="flex flex-col gap-1">
                <label for="description">Description</label>
                <textarea id="description" rows="4" bind:value={instance.description} />
              </div>
            </div>
          </details>

          <details class="p-2 border-b-2 cursor-pointer">
            <summary class="text-sm">Trigger</summary>
            <div class="flex flex-col gap-2 mt-4">
              <div class="flex flex-col gap-1">
                <label for="trigger">Trigger</label>
                <select id="trigger" bind:value={instance.trigger}>
                  <option value="">Select Trigger</option>
                  {#each triggers as trigger}
                    <option value={trigger.id}>{trigger.name}</option>
                  {/each}
                </select>
              </div>

              <div class="flex flex-col gap-1">
                <label for="triggerCondition">Trigger Condition</label>
                <textarea id="triggerCondition" rows="4" bind:value={instance.triggerCondition} />
              </div>
            </div>
          </details>

          <details class="p-2 border-b-2 cursor-pointer">
            <summary class="text-sm">Version</summary>
            <div class="flex flex-col gap-2 mt-4">
              <div class="flex flex-col gap-1">
                <label for="version">Version Number</label>
                <input type="number" id="version" bind:value={versionInstance.version} readonly />
              </div>
            </div>

            <div class="flex flex-col gap-2 mt-4">
              <div class="flex flex-col gap-1">
                <label for="versionId">Version ID</label>
                <input id="versionId" bind:value={versionInstance.id} readonly />
              </div>
            </div>
          </details>
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  .animate-bounce:nth-of-type(2) {
    animation-delay: 0.04s;
  }
  .animate-bounce:nth-of-type(3) {
    animation-delay: 0.08s;
  }
  .animate-bounce:nth-of-type(4) {
    animation-delay: 0.12s;
  }
  .animate-bounce:nth-of-type(5) {
    animation-delay: 0.16s;
  }
  .animate-bounce:nth-of-type(6) {
    animation-delay: 0.2s;
  }
  .animate-bounce:nth-of-type(7) {
    animation-delay: 0.24s;
  }
  .animate-bounce:nth-of-type(8) {
    animation-delay: 0.28s;
  }
  .animate-bounce:nth-of-type(9) {
    animation-delay: 0.32s;
  }
  .animate-bounce:nth-of-type(10) {
    animation-delay: 0.36s;
  }
</style>
