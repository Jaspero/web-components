<svelte:options
  customElement={{
    tag: 'jp-branch',
    shadow: 'open'
  }}
/>

<script>
  // @ts-nocheck

  import { onMount } from 'svelte';

  export let multiple = false;
  export let isGrabbed = false;
  let node;
  let startingX, startingY;
  let branch = [];

  function onToggle(event, index) {
    if (!multiple) {
      const branchToKeepOpen = branch[index].title;
      window.dispatchEvent(new CustomEvent('request-close', { detail: branchToKeepOpen }));
    }
  }

  onMount(() => {
    branch = Array.from(document.querySelectorAll('jp-tree'));
    branch.forEach((branch, index) => {
      branch.addEventListener('toggle', (event) => onToggle(event, index));
    });
  });

  const letGo = (e) => {
    if(isGrabbed){
        isGrabbed = false;
        node.style = ''
        console.log(e);
        node = e.target.firstChild;
        console.log('e.target: ',e.target)
        console.log('node.parentNode: ', node.parentNode) 
        if(e.target.localName == 'jp-tree'){
            if(e.target != node){
                const cloned = node.cloneNode(true)
                console.log(cloned)
                console.log('nesto')
                console.log('node:',node)
                node.remove()
                console.log('node:',node)
                console.log(e.target)
                e.target.appendChild(cloned)
                //console.log(e.target);

            }
            else{
                
            }
        } else if (e.target.localName == 'jp-branch'){

        }
    }
  };
</script>

<svelte:document
  on:mousemove|preventDefault={(e) => {
    if (isGrabbed) {
        node.style.transform = 'translateY(' + (e.clientY-startingY) + 'px)';
        node.style.transform += 'translateX(' + (e.clientX-startingX) + 'px)';
    }
}}
  on:mouseup={(e) => letGo(e)}
  />
  
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="branch" on:mousedown={(e) => {
    node.style.pointerEvents = 'none'
    isGrabbed = true;
    startingX = e.clientX
    startingY = e.clientY
}} bind:this={node}>
  <slot />
</div>

<style>
  .branch {
    width: 100%;
    margin: 1rem 0;
    border-radius: 50%;
    cursor: grab;
  }
</style>