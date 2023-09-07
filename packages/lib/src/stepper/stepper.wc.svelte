<svelte:options
  customElement={{
    tag: 'jp-stepper',
    shadow: 'none'
  }}
/>

<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let steps: string[] = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];
  export let labels: string[] = ['label 1', 'label 2', 'label 3', 'label 4'];
  export let step: number = 0;
  export let finishingLabel: string = "You're finished.";

  let finished = false;
  let circleColors: string[] = [];


  $: {
    circleColors = Array.from({ length: steps.length }, (_, i) =>
      i <= step ? 'circle-red' : 'circle-grey'
    );
  }

  export function next() {
    if (step < steps.length - 1) {
      step += 1;
    }
  }

  export function previous() {
    if (step > 0) {
      step -= 1;
    }
  }

  export function finish() {
    finished = true;
  }

  export function reset() {
    step = 0;
    finished = false;
  }

  const dispatch = createEventDispatcher();

  $: {
    dispatch('previous', { step });
    dispatch('next', { step });
    
  }
</script>

<div class="whole-div">
  <div class="step-class">
    {#each steps as Step, index}
      <div class="step-container">
        <div class="circle {circleColors[index]}">
          <span class="number">{index + 1}</span>
        </div>
        <p>{labels[index]}</p>
      </div>
      {#if index < steps.length - 1}
          <div class="connector-line"></div> 
      {/if}
    {/each}
  </div>

  {#if step > 0 && finished == true}
    <div class="step">
      <h1>{finishingLabel}</h1>
    </div>
  {:else}
    <div class="step">
      {steps[step]}
    </div>
  {/if}

  <div class="button-row">
    <div class="button-container">
      {#if step > 0 && finished == false}
        <button on:click={previous}>Back</button>
      {/if}
    </div>
    <div class="button-container">
      {#if step === 0}
        <button on:click={next}>Next</button>
      {:else if step === steps.length - 1}
        {#if finished}
          <button on:click={reset}>Reset</button>
        {:else}
          <button on:click={finish}>Finish</button>
        {/if}
      {:else}
        <button on:click={next}>Next</button>
      {/if}
    </div>
  </div>
</div>

<style>
  .whole-div {
    width: 50%;
    margin: auto;
  }

  .step-class {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    justify-content: space-between;
  }

  .step-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-between;
  } 

  .step {
    margin-top: 10px;
    margin-left: 3px;
  }


  .circle {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }

  .circle-red {
    background-color: #e65000; 
  }

  .circle-grey {
    background-color: #ccc; 
  }

  
  span{
    font-size: 13px;
    font-weight: 600;
    color: white;
  }  
    
  .button-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
  }

  .button-container {
    display: flex;
    align-items: center;
  }

  button {
    color: rgb(199, 64, 15);
    padding: 3px 9px;
    margin-bottom: 10px;
    border-radius: 10px;
  }

  button:hover {
    background-color: rgb(250, 245, 243);
  }

  button:active {
    background: linear-gradient(
      to right,
      rgb(255, 228, 213),
      rgb(255, 215, 200),
      rgb(255, 237, 229)
    );
  }

  .connector-line {
  width: 30%;
  height: 1px; 
  margin-bottom: 5%;
  background-color: #ccc;
}

</style>
