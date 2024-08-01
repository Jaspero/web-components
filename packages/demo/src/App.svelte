<script lang="ts">
  import '../../../dist/select.wc';
  import '../../lib/src/index.css';
  import '../../../dist/toggle.wc';
  import '../../../dist/textarea.wc';
  import '../../../dist/slider.wc';
  import '../../../dist/range.wc';
  import '../../../dist/radio.wc';
  import '../../../dist/quill.wc';
  import '../../../dist/input.wc';
  import '../../../dist/multiselect.wc';
  import '../../../dist/multisearch.wc';
  import '../../../dist/file-upload.wc';
  import '../../../dist/file-list.wc';
  import '../../../dist/datepicker.wc';
  import '../../../dist/date-range.wc';
  import '../../../dist/color.wc';
  import '../../../dist/ckeditor.wc';
  import '../../../dist/chips.wc';
  import '../../../dist/checkbox.wc';
  import '../../../dist/autocomplete.wc';
  import { onMount } from 'svelte';

  const options = [
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' },
  ];

  let el: HTMLElement;
  let isRequired = true; // Set to true or false based on your requirement
  let isOpen = false; // Track if the dropdown is open

  onMount(() => {
    const multisearch = document.createElement('jp-multisearch') as HTMLJpMultisearchElement;

    // Set initial options
    multisearch.options = options;

    // Set the required property
    multisearch.required = isRequired;

    multisearch.service = {
      i: 0,
      async search(str: string) {
        await new Promise(resolve => setTimeout(resolve, 1500));
        return [
          { value: str + '1', label: str + '1' },
          { value: str + '2', label: str + '2' }
        ];
      },
      async loadMore(str: string) {
        await new Promise(resolve => setTimeout(resolve, 1500));
        return [
          { value: str + '3', label: str + '3' },
          { value: str + '4', label: str + '4' },
          { value: str + '5', label: str + '5' },
          { value: str + '6', label: str + '6' }
        ];
      },
      async getSingle(value: string) {
        await new Promise(resolve => setTimeout(resolve, 1500));
        return { value: value, label: this.i++ };
      }
    };

    multisearch.addEventListener('change', (event: Event) => {
      const selectedValue = (event as CustomEvent).detail;
      multisearch.value = selectedValue || ''; // Maintain placeholder if no value is selected
    });

    // Listen to the open event
    multisearch.addEventListener('click', () => {
      isOpen = !isOpen;
    });

    el.appendChild(multisearch);
  });
</script>

<div class="form-container">
  <jp-input label="Input" required="true" />
  <jp-select label="Select" required="true"></jp-select>
  <jp-toggle label="Toggle" required="true"></jp-toggle>
  <jp-textarea label="Textarea" required="true"></jp-textarea>
  <jp-slider label="Slider" required="true"></jp-slider>
  <jp-range label="Range" required="true"></jp-range>
  <jp-radio label="Options" {options} required="true"/>
  <jp-quill label="Quill" value="<p>Blup</p>" required="true"></jp-quill>
  <div bind:this={el} class="container">
    <div class="label">
      Multisearch {#if isRequired} *{/if}
    </div>
  </div>
  <jp-multiselect {options} label="Multiselect" required="true"></jp-multiselect>
  <jp-file-upload label="Upload a file" required="true" />
  <jp-file-list label="File list" required="true"></jp-file-list>
  <jp-datepicker label="Pick a date" required="true"></jp-datepicker>
  <jp-date-range label="Pick a date range" required="true"></jp-date-range>
  <jp-color label="Pick a color" required="true"></jp-color>
  <jp-ckeditor label="CK Editor" value="<p>Blup</p>" required="true"></jp-ckeditor>
  <jp-chips label="Chips" placeholder="Placeholder" required="true"></jp-chips>
  <jp-checkbox label="Checkbox" {options} required="true"></jp-checkbox>
  <jp-autocomplete options='["One", "Two", "Three"]' label="Autocomplete" required="true"></jp-autocomplete>
</div>

<style>
  .form-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
  }
  .container {
    position: relative;
    margin: 1rem 0;
  }

  .label {
    margin-bottom: 0.5rem;
  }
</style>







<!-- <main>
  <div class="form-group">
    <div class="input-wrapper">
      <label for="title">Title <span class="required">*</span></label>
      <input type="text" id="title" name="title" placeholder=" " required />
    </div>
  </div>
  <div class="form-group">
    <div class="input-wrapper">
      <label for="content">Content <span class="required">*</span></label>
      <textarea id="content" name="content" placeholder=" " required></textarea>
    </div>
  </div>

  <div class="form-group">
    <div class="input-wrapper">
      <label for="target">Target <span class="required">*</span></label>
      <select id="target" name="target" required>
        <option value="" disabled selected>Target *</option>
        <option value="specific-users">Specific Users</option>
      </select>
    </div>
  </div>
 
  <div class="form-group">
    <div class="input-wrapper">
      <label for="users">Users <span class="required">*</span></label>
      <select id="users" name="users" required>
        <option value="" disabled selected>Users *</option>
        <option value="sven">Sven</option>
      </select>
    </div>
  </div>
</main> -->
<!--
<style>
  main {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 300px;
    margin: auto;
  }

  .form-group {
    position: relative;
    margin-bottom: 0.5rem; 
  }

  .input-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
  }

  label {
    position: absolute;
    top: 0.25rem; 
    left: 0;
    font-size: 0.75rem; 
    color: #666;
    pointer-events: none;
    transition: all 0.2s ease;
    transform-origin: left top;
    padding-left: 0.5rem;
    margin: 0;
  }

  input, textarea, select {
    font-size: 1rem;
    padding: 2rem 0.5rem 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid #ccc;
    width: 150%;
    box-sizing: border-box;
  }

</style> -->
