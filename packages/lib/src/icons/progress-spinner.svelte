<script lang="ts">
    export let determinate: boolean = false;
    export let normalizedRadius: number = 0;
    export let strokeDashoffset: number = 0;
    export let circumference: number = 0;
    export let radius: number = 60;
    export let stroke: number = 8;
    export let color: string = 'blue';
  </script>
  
  {#if determinate}
  <svg height={radius * 2} width={radius * 2}><circle class="progress" stroke={color} fill="transparent" stroke-dasharray="{circumference} {circumference}" stroke-dashoffset={strokeDashoffset} stroke-width={stroke} r={normalizedRadius} cx={radius} cy={radius}/></svg> {:else} <svg width={radius * 2} height={radius * 2} stroke={color} viewBox="0 0 24 24"><g class="spinner"><circle cx="12" cy="12" r="9.5" fill="none" stroke-width={(12 / radius) * stroke}></circle></g></svg>
{/if}