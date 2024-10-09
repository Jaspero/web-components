<script lang="ts">
  import '../../lib/src/index.css';
  import TreeWC from '../../lib/src/tree/tree.wc.svelte';
  import '../../lib/src/form-fields/select/select.wc.svelte';
  import JpTabs from '../../lib/src/tabs/tabs.wc.svelte'; 
  import JpReviewStars from '../../lib/src/review-stars/review-stars.wc.svelte';
  import JpProgressSpinner from '../../lib/src/progress-spinner/progress-spinner.wc.svelte';
  import PagePaginatorWC from '../../lib/src/page-paginator/page-paginator.wc.svelte';
  import '../../lib/src/form-fields/file-list/file-list.wc.svelte';
  import '../../lib/src/form-fields/datepicker/datepicker.wc.svelte';
  import '../../lib/src/form-fields/multiselect/multiselect.wc.svelte';
  import '../../lib/src/form-fields/multisearch/multisearch.wc.svelte';
  import { onMount } from 'svelte';
  import '../../lib/src/form-fields/file-upload.wc.svelte';
  import '../../lib/src/form-fields/date-range.wc.svelte';
  import '../../lib/src/form-fields/chips/chips.wc.svelte'
  import '../../lib/src/data-paginator/data-paginator.wc.svelte';
  import '../../lib/src/carousel/carousel.wc.svelte'; 
  
  let rating;
  let determinate = true;
  let progress = 20;
  const selectOptions = [
    { value: "aaa", label: "AAA" },
    { value: "bbb", label: "BBB" },
    { value: "ccc", label: "CCC" }
  ];
  let multisearchRef;
  onMount(() => {
    const multisearch = document.createElement('jp-multisearch');
    multisearch.value = 'aaa, bbb';
    multisearch.service = {
      i: 0,
      async search(str) {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        return [{ value: str + ' 1' }, { value: str + ' 2' }];
      },
      async loadMore(str) {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        return [{ value: str }];
      },
      async getSingle(value) {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        return { value: value, label: this.i++ };
      }
    };
    multisearchRef.appendChild(multisearch);
  });
</script>

<main>
  <section>
    <h2>TreeWC SVG</h2>
    <TreeWC title="Test">
      <TreeWC title="Fruits">
        <jp-node>Apple</jp-node>
        <jp-node-draggable>Banana</jp-node-draggable>
        <jp-node>Fruit Loops</jp-node>
      </TreeWC>
      <TreeWC title="Vegetables"> 
        <TreeWC title="Green"> 
          <jp-node-draggable>Broccoli</jp-node-draggable>
          <jp-node>Brussels sprouts</jp-node>
        </TreeWC>
        <jp-node>Tomato</jp-node>
      </TreeWC>
    </TreeWC>
  </section>

  <h2>Tabs</h2>
  <JpTabs>
    <JpTabs>
      <jp-tab title="one">Content 1</jp-tab>
      <jp-tab title="two">Content 2</jp-tab>
      <jp-tab title="three">Content 3</jp-tab>
    </JpTabs>
  </JpTabs>

  <h2>Review Stars</h2>
  <JpReviewStars 
    value={rating} 
    starsInput={true} 
    indicator={true} 
    on:rating={event => (rating = event.detail)}
  />

  <h1>Progress Spinner</h1>
  <JpProgressSpinner determinate={determinate} progress={progress} radius={60} stroke={8} color="blue" />

  <h2>PagePaginatorWC</h2>
  <PagePaginatorWC length={10} pageIndex={1} />

  <h1>Testiranje Select</h1>
  <jp-select options={selectOptions} label="Select"></jp-select>

  <h1>Testiranje File list</h1>
  <jp-file-list></jp-file-list>

  <h1>Test Datepicker</h1>
  <jp-datepicker label="Pick a date"></jp-datepicker>

  <h1>Test multiselect</h1>
  <jp-multiselect options={selectOptions} label="Select"></jp-multiselect>

  <h1>Test jp-multisearch</h1>
  <div bind:this={multisearchRef}></div>

  <h1>Test file-upload</h1>
  <jp-file-upload label="Upload a file"></jp-file-upload>

  <h1>Test date range</h1>
  <jp-date-range label="Pick a date range"></jp-date-range>

  <h1>Test chips</h1>
  <jp-chips label="Chips" placeholder="Placeholder"></jp-chips>

  <h1>Test data-paginator</h1>
  <jp-data-paginator></jp-data-paginator>

  <h1>Test jp-carousel</h1>
  <jp-carousel 
    images={[{ src: "https://picsum.photos/200/300" }, { src:  "https://picsum.photos/200/200" }, { src: "https://picsum.photos/300/300" }]}
  ></jp-carousel>

</main>