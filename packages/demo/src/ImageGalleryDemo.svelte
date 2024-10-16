<script lang="ts">
  import '../../../dist/image-gallery.wc.js';

  let el: HTMLDivElement;

  $: if (el) {
    const imgEl = document.createElement('jp-image-gallery');

    // @ts-ignore
    imgEl.images = [
  { 
    gridSrc: 'https://picsum.photos/id/1/1920/1080', 
    overlaySrc: 'https://picsum.photos/id/1/1920/1080'
  },
  { 
    gridSrc: 'https://picsum.photos/id/2/1920/1080', 
    overlaySrc: 'https://picsum.photos/id/2/1920/1080'
  },
  { 
    gridSrc: 'https://picsum.photos/id/3/1920/1080', 
    overlaySrc: 'https://picsum.photos/id/3/1920/1080'
  }, 
  { 
    gridSrc: 'https://picsum.photos/id/4/1920/1080', 
    overlaySrc: 'https://picsum.photos/id/4/1920/1080'
  },
  { 
    gridSrc: 'https://picsum.photos/id/5/1920/1080', 
    overlaySrc: 'https://picsum.photos/id/5/1920/1080'
  },
  { 
    gridSrc: 'https://picsum.photos/id/6/1920/1080', 
    overlaySrc: 'https://picsum.photos/id/6/1920/1080'
  },
  { 
    gridSrc: 'https://picsum.photos/id/7/1920/1080', 
    overlaySrc: 'https://picsum.photos/id/7/1920/1080'
  },
  { 
    gridSrc: 'https://picsum.photos/id/8/1920/1080', 
    overlaySrc: 'https://picsum.photos/id/8/1920/1080' 
  },
  { 
    gridSrc: 'https://picsum.photos/id/9/1920/1080', 
    overlaySrc: 'https://picsum.photos/id/9/1920/1080'
  },
  { 
    gridSrc: 'https://picsum.photos/id/10/1920/1080', 
    overlaySrc: 'https://picsum.photos/id/10/1920/1080'
  },
  { 
    gridSrc: 'https://picsum.photos/id/11/1920/1080', 
    overlaySrc: 'https://picsum.photos/id/11/1920/1080'
  },
  { 
    gridSrc: 'https://picsum.photos/id/12/1920/1080', 
    overlaySrc: 'https://picsum.photos/id/12/1920/1080'
  },
  { 
    gridSrc: 'https://picsum.photos/id/13/1920/1080', 
    overlaySrc: 'https://picsum.photos/id/13/1920/1080'
  },
  { 
    gridSrc: 'https://picsum.photos/id/14/1920/1080', 
    overlaySrc: 'https://picsum.photos/id/14/1920/1080'
  },
  { 
    gridSrc: 'https://picsum.photos/id/15/1920/1080', 
    overlaySrc: 'https://picsum.photos/id/15/1920/1080'
  },
  { 
    gridSrc: 'https://picsum.photos/id/16/1920/1080', 
    overlaySrc: 'https://picsum.photos/id/16/1920/1080'
  },
  { 
    gridSrc: 'https://picsum.photos/id/17/1920/1080', 
    overlaySrc: 'https://picsum.photos/id/17/1920/1080'
  },
  { 
    gridSrc: 'https://picsum.photos/id/18/1920/1080', 
    overlaySrc: 'https://picsum.photos/id/18/1920/1080'
  },
  { 
    gridSrc: 'https://picsum.photos/id/19/1920/1080', 
    overlaySrc: 'https://picsum.photos/id/19/1920/1080'
  },
  { 
    gridSrc: 'https://picsum.photos/id/20/1920/1080', 
    overlaySrc: 'https://picsum.photos/id/20/1920/1080'
  },
  { 
    gridSrc: 'https://picsum.photos/id/21/1920/1080', 
    overlaySrc: 'https://picsum.photos/id/21/1920/1080'
  },
  { 
    gridSrc: 'https://picsum.photos/id/22/1920/1080', 
    overlaySrc: 'https://picsum.photos/id/22/1920/1080'
  },
  { 
    gridSrc: 'https://picsum.photos/id/23/1920/1080', 
    overlaySrc: 'https://picsum.photos/id/23/1920/1080'
  },
  { 
    gridSrc: 'https://picsum.photos/id/24/1920/1080', 
    overlaySrc: 'https://picsum.photos/id/24/1920/1080'
  },
  { 
    gridSrc: 'https://picsum.photos/id/25/1920/1080', 
    overlaySrc: 'https://picsum.photos/id/25/1920/1080'
  },
  { 
    gridSrc: 'https://picsum.photos/id/26/1920/1080', 
    overlaySrc: 'https://picsum.photos/id/26/1920/1080'
  },
  { 
    gridSrc: 'https://picsum.photos/id/27/1920/1080', 
    overlaySrc: 'https://picsum.photos/id/27/1920/1080'
  },
  { 
    gridSrc: 'https://picsum.photos/id/28/1920/1080', 
    overlaySrc: 'https://picsum.photos/id/28/1920/1080'
  },
  { 
    gridSrc: 'https://picsum.photos/id/29/1920/1080', 
    overlaySrc: 'https://picsum.photos/id/29/1920/1080'
  },
  { 
    gridSrc: 'https://picsum.photos/id/30/1920/1080', 
    overlaySrc: 'https://picsum.photos/id/30/1920/1080'
  },
  { 
    gridSrc: 'https://picsum.photos/id/31/1920/1080', 
    overlaySrc: 'https://picsum.photos/id/31/1920/1080'
  },
  { 
    gridSrc: 'https://picsum.photos/id/32/1920/1080', 
    overlaySrc: 'https://picsum.photos/id/32/1920/1080'
  },
  { 
    gridSrc: 'https://picsum.photos/id/33/1920/1080', 
    overlaySrc: 'https://picsum.photos/id/33/1920/1080'
  },
  { 
    gridSrc: 'https://picsum.photos/id/34/1920/1080', 
    overlaySrc: 'https://picsum.photos/id/34/1920/1080'
  },
  { 
    gridSrc: 'https://picsum.photos/id/35/1920/1080', 
    overlaySrc: 'https://picsum.photos/id/35/1920/1080'
  },
  { 
    gridSrc: 'https://picsum.photos/id/36/1920/1080', 
    overlaySrc: 'https://picsum.photos/id/36/1920/1080'
  },
  { 
    gridSrc: 'https://picsum.photos/id/37/1920/1080', 
    overlaySrc: 'https://picsum.photos/id/37/1920/1080'
  },
  { 
    gridSrc: 'https://picsum.photos/id/38/1920/1080', 
    overlaySrc: 'https://picsum.photos/id/38/1920/1080'
  },
  { 
    gridSrc: 'https://picsum.photos/id/39/1920/1080', 
    overlaySrc: 'https://picsum.photos/id/39/1920/1080'
  },
  { 
    gridSrc: 'https://picsum.photos/id/40/1920/1080', 
    overlaySrc: 'https://picsum.photos/id/40/1920/1080'
  }
];



    el.appendChild(imgEl);
  }
</script>

<div bind:this={el}></div>
