<script lang="ts">
  import { onMount } from 'svelte';
  import '../../../../dist/multisearch.wc.js';
  import '../../../../dist/multisearch.css';

  let el: HTMLDivElement;

  const options = [
    { label: 'ALABAMA', value: 'AL' },
    { label: 'ALASKA', value: 'AK' },
    { label: 'AMERICAN SAMOA', value: 'AS' },
    { label: 'ARIZONA', value: 'AZ' },
    { label: 'ARKANSAS', value: 'AR' },
    { label: 'CALIFORNIA', value: 'CA' },
    { label: 'COLORADO', value: 'CO' },
    { label: 'CONNECTICUT', value: 'CT' },
    { label: 'DELAWARE', value: 'DE' },
    { label: 'DISTRICT OF COLUMBIA', value: 'DC' },
    { label: 'FEDERATED STATES OF MICRONESIA', value: 'FM' },
    { label: 'FLORIDA', value: 'FL' },
    { label: 'GEORGIA', value: 'GA' },
    { label: 'GUAM', value: 'GU' },
    { label: 'HAWAII', value: 'HI' },
    { label: 'IDAHO', value: 'ID' },
    { label: 'ILLINOIS', value: 'IL' },
    { label: 'INDIANA', value: 'IN' },
    { label: 'IOWA', value: 'IA' },
    { label: 'KANSAS', value: 'KS' },
    { label: 'KENTUCKY', value: 'KY' },
    { label: 'LOUISIANA', value: 'LA' },
    { label: 'MAINE', value: 'ME' },
    { label: 'MARSHALL ISLANDS', value: 'MH' },
    { label: 'MARYLAND', value: 'MD' },
    { label: 'MASSACHUSETTS', value: 'MA' },
    { label: 'MICHIGAN', value: 'MI' },
    { label: 'MINNESOTA', value: 'MN' },
    { label: 'MISSISSIPPI', value: 'MS' },
    { label: 'MISSOURI', value: 'MO' },
    { label: 'MONTANA', value: 'MT' },
    { label: 'NEBRASKA', value: 'NE' },
    { label: 'NEVADA', value: 'NV' },
    { label: 'NEW HAMPSHIRE', value: 'NH' },
    { label: 'NEW JERSEY', value: 'NJ' },
    { label: 'NEW MEXICO', value: 'NM' },
    { label: 'NEW YORK', value: 'NY' },
    { label: 'NORTH CAROLINA', value: 'NC' },
    { label: 'NORTH DAKOTA', value: 'ND' },
    { label: 'NORTHERN MARIANA ISLANDS', value: 'MP' },
    { label: 'OHIO', value: 'OH' },
    { label: 'OKLAHOMA', value: 'OK' },
    { label: 'OREGON', value: 'OR' },
    { label: 'PALAU', value: 'PW' },
    { label: 'PENNSYLVANIA', value: 'PA' },
    { label: 'PUERTO RICO', value: 'PR' },
    { label: 'RHODE ISLAND', value: 'RI' },
    { label: 'SOUTH CAROLINA', value: 'SC' },
    { label: 'SOUTH DAKOTA', value: 'SD' },
    { label: 'TENNESSEE', value: 'TN' },
    { label: 'TEXAS', value: 'TX' },
    { label: 'UTAH', value: 'UT' },
    { label: 'VERMONT', value: 'VT' },
    { label: 'VIRGIN ISLANDS', value: 'VI' },
    { label: 'VIRGINIA', value: 'VA' },
    { label: 'WASHINGTON', value: 'WA' },
    { label: 'WEST VIRGINIA', value: 'WV' },
    { label: 'WISCONSIN', value: 'WI' },
    { label: 'WYOMING', value: 'WY' }
  ];

  let isRequired = true; // Set to true or false based on your requirement
  let isOpen = false;
  onMount(() => {
    const multisearch = document.createElement('jp-multisearch') as HTMLJpMultisearchElement;
    // Set initial options
    multisearch.options = options;
    // Set the required property
    multisearch.required = isRequired;
    multisearch.label = 'Multisearch';
    multisearch.defaultSearch = true;
    multisearch.defaultShow = 3;
    multisearch.service = {
      i: 0,
      async search(str: string) {
        await new Promise((resolve) => setTimeout(resolve, 1500));

        return [
          ...options
            .filter((option) => option.value.toLowerCase().startsWith(str.toLowerCase()))
            .map((option) => ({
              value: option.value,
              label: option.label
            })),

          ...options
            .filter(
              (option) =>
                option.value.toLowerCase().includes(str.toLowerCase()) &&
                !option.value.toLowerCase().startsWith(str.toLowerCase())
            )
            .map((option) => ({
              value: option.value,
              label: option.label
            }))
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

<form>
  <div bind:this={el} />
  <button type="submit">Submit</button>
</form>
