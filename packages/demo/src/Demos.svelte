<script lang="ts">
  import '../../../dist/checkbox.wc';
  import '../../../dist/checkbox.css';
  import '../../../dist/input.wc';
  import '../../../dist/input.css';
  import '../../../dist/select.wc';
  import '../../../dist/select.css';
  import '../../lib/src/index.css';
  import '../../../dist/toggle.wc';
  import '../../../dist/toggle.css';
  import '../../../dist/textarea.wc';
  import '../../../dist/textarea.css';
  import '../../../dist/slider.wc';
  import '../../../dist/slider.css';
  import '../../../dist/range.wc';
  import '../../../dist/range.css';
  import '../../../dist/radio.wc';
  import '../../../dist/radio.css';
  import '../../../dist/quill.wc';
  import '../../../dist/quill.css';
  import '../../../dist/multiselect.wc';
  import '../../../dist/multiselect.css';
  import '../../../dist/multisearch.wc';
  import '../../../dist/multisearch.css';
  import '../../../dist/file-upload.wc';
  import '../../../dist/file-upload.css';
  import '../../../dist/file-list.wc';
  import '../../../dist/datepicker.wc';
  import '../../../dist/datepicker.css';
  import '../../../dist/date-range.wc';
  import '../../../dist/date-range.css';
  import '../../../dist/color.wc';
  import '../../../dist/color.css';
  import '../../../dist/ckeditor.wc';
  import '../../../dist/ckeditor.css';
  import '../../../dist/chips.wc';
  import '../../../dist/chips.css';
  import '../../../dist/autocomplete.wc';
  import '../../../dist/autocomplete.css';
  import '../../../dist/review-stars.wc';
  import { onMount } from 'svelte';

  const options = [
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' }
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
    multisearch.label = 'Multisearch';
    multisearch.service = {
      i: 0,
      async search(str: string) {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        return [
          { value: str + '1', label: str + '1' },
          { value: str + '2', label: str + '2' }
        ];
      },
      async loadMore(str: string) {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        return [
          { value: str + '3', label: str + '3' },
          { value: str + '4', label: str + '4' },
          { value: str + '5', label: str + '5' },
          { value: str + '6', label: str + '6' }
        ];
      },
      async getSingle(value: string) {
        await new Promise((resolve) => setTimeout(resolve, 1500));
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
  <jp-review-stars />
  <jp-chips label="Chips" placeholder="Placeholder" required="true"></jp-chips>
  <jp-chips placeholder="Placeholder" required="true"></jp-chips>
  <jp-input label="Input" required="true" />
  <jp-select label="Select" required="true"></jp-select>
  <jp-toggle label="Toggle" required="true"></jp-toggle>
  <jp-textarea label="Textarea" required="true" hint="true"></jp-textarea>
  <jp-slider label="Slider" required="true"></jp-slider>
  <jp-range label="Range" required="true"></jp-range>
  <jp-radio label="Options" {options} required="true" />
  <jp-quill label="Quill" value="<p>Blup</p>" required="true"></jp-quill>
  <div bind:this={el} class="container"></div>
  <jp-multiselect {options} label="Multiselect" required="true"> </jp-multiselect>
  <jp-file-upload label="Upload a file" required="true" />
  <jp-file-list label="File list" required="true"></jp-file-list>
  <jp-datepicker label="Pick a date" required="true"></jp-datepicker>
  <jp-date-range label="Pick a date range" required="true"></jp-date-range>
  <jp-color label="Pick a color" required="true"></jp-color>
  <jp-ckeditor label="CK Editor" value="<p>Blup</p>" required="true"></jp-ckeditor>
  <jp-chips label="Chips" placeholder="Placeholder" required="true"></jp-chips>
  <jp-checkbox label="Checkbox" {options} required="true"></jp-checkbox>
  <jp-autocomplete options="['One', 'Two', 'Three']" label="Autocomplete" required="true"
  ></jp-autocomplete>
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
