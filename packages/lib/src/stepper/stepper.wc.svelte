<svelte:options
  customElement={{
    tag: 'jp-stepper',
    shadow: 'none'
  }}
/>

<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  export let steps: string[] = ['Make an order', 'label 2', 'label 3', 'label 4', 'label 5'];
  export let step: number = 0;

  export function next() {
    if (step < steps.length - 1) {
      step += 1;
    }
    dispatch('next', {step})
  }

  export function previous() {
    if (step > 0) {
      step -= 1;
    }
    dispatch('previous', {step}) 
  }

  export function reset() {
    step = 0;
  }

  const dispatch = createEventDispatcher();

</script>

<div class="whole-div">
  <div class="step-class">
    {#each steps as label, index}
      <div class="step-container">
        <div class="circle {index <= step ? 'circle-red' : 'circle-grey'}">
          <span class="number">{index + 1}</span>
        </div>
        <div class="label">
          {label}
        </div>
      </div>
      {#if index < steps.length - 1}
          <div class="connector-line"></div> 
      {/if}
    {/each}
  </div>

  </div>
<style>
  .whole-div {
    width: 50%;
    margin: auto;
  }

  .step-class {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    justify-content: space-between;
  }
  
  .step-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-between;
  } 

  .label {
    position: absolute;
    margin-top: 103%;
    line-height: 1.2;
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

  .connector-line {
    flex-grow: 1;
    height: 1px;
    background-color: #ccc;
}

</style>
