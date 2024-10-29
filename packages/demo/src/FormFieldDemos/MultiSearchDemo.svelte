<script lang="ts">
  import { onMount } from 'svelte';
  import '../../../../dist/multisearch.wc.js';
  import '../../../../dist/multisearch.wc.css';

  let el: HTMLDivElement;
  let isLoading = false;
  let initialLoadComplete = false;
  let multisearch: HTMLJpMultisearchElement;

  const options = [
    { label: 'ALABAMA', value: 'AL'},
    { label: 'ALASKA', value: 'AK'},
    { label: 'AMERICAN SAMOA', value: 'AS'},
    { label: 'ARIZONA', value: 'AZ'},
    { label: 'ARKANSAS', value: 'AR'},
    { label: 'CALIFORNIA', value: 'CA'},
    { label: 'COLORADO', value: 'CO'},
    { label: 'CONNECTICUT', value: 'CT'},
    { label: 'DELAWARE', value: 'DE'},
    { label: 'DISTRICT OF COLUMBIA', value: 'DC'},
    { label: 'FEDERATED STATES OF MICRONESIA', value: 'FM'},
    { label: 'FLORIDA', value: 'FL'},
    { label: 'GEORGIA', value: 'GA'},
    { label: 'GUAM', value: 'GU'},
    { label: 'HAWAII', value: 'HI'},
    { label: 'IDAHO', value: 'ID'},
    { label: 'ILLINOIS', value: 'IL'},
    { label: 'INDIANA', value: 'IN'},
    { label: 'IOWA', value: 'IA'},
    { label: 'KANSAS', value: 'KS'},
    { label: 'KENTUCKY', value: 'KY'},
    { label: 'LOUISIANA', value: 'LA'},
    { label: 'MAINE', value: 'ME'},
    { label: 'MARSHALL ISLANDS', value: 'MH'},
    { label: 'MARYLAND', value: 'MD'},
    { label: 'MASSACHUSETTS', value: 'MA'},
    { label: 'MICHIGAN', value: 'MI'},
    { label: 'MINNESOTA', value: 'MN'},
    { label: 'MISSISSIPPI', value: 'MS'},
    { label: 'MISSOURI', value: 'MO'},
    { label: 'MONTANA', value: 'MT'},
    { label: 'NEBRASKA', value: 'NE'},
    { label: 'NEVADA', value: 'NV'},
    { label: 'NEW HAMPSHIRE', value: 'NH'},
    { label: 'NEW JERSEY', value: 'NJ'},
    { label: 'NEW MEXICO', value: 'NM'},
    { label: 'NEW YORK', value: 'NY'},
    { label: 'NORTH CAROLINA', value: 'NC'},
    { label: 'NORTH DAKOTA', value: 'ND'},
    { label: 'NORTHERN MARIANA ISLANDS', value: 'MP'},
    { label: 'OHIO', value: 'OH'},
    { label: 'OKLAHOMA', value: 'OK'},
    { label: 'OREGON', value: 'OR'},
    { label: 'PALAU', value: 'PW'},
    { label: 'PENNSYLVANIA', value: 'PA'},
    { label: 'PUERTO RICO', value: 'PR'},
    { label: 'RHODE ISLAND', value: 'RI'},
    { label: 'SOUTH CAROLINA', value: 'SC'},
    { label: 'SOUTH DAKOTA', value: 'SD'},
    { label: 'TENNESSEE', value: 'TN'},
    { label: 'TEXAS', value: 'TX'},
    { label: 'UTAH', value: 'UT'},
    { label: 'VERMONT', value: 'VT'},
    { label: 'VIRGIN ISLANDS', value: 'VI'},
    { label: 'VIRGINIA', value: 'VA'},
    { label: 'WASHINGTON', value: 'WA'},
    { label: 'WEST VIRGINIA', value: 'WV'},
    { label: 'WISCONSIN', value: 'WI'},
    { label: 'WYOMING', value: 'WY' }
  ];

  let isRequired = true;
  let selectedValues: string[] = [];
  let loadedOptions = new Map<string, any>();

  async function loadInitialValues(values: string[]) {
    if (!values.length) {
      initialLoadComplete = true;
      return;
    }

    isLoading = true;
    try {
      const loadedDetails = await Promise.all(
        values.map(async (value) => {
          if (loadedOptions.has(value)) {
            return loadedOptions.get(value);
          }

          try {
            const result = await multisearch.service.getSingle(value);
            if (result) {
              loadedOptions.set(value, result);
              return result;
            }
            throw new Error(`No result found for ${value}`);
          } catch (error) {
            console.error(`Error loading value ${value}:`, error);
            return { value, label: `ID: ${value}`, error: true };
          }
        })
      );

      multisearch.options = [
        ...loadedDetails,
        ...options.filter(opt => !values.includes(opt.value))
      ];
      
      multisearch.value = values.join(',');
    } catch (error) {
      console.error('Error loading initial values:', error);
    } finally {
      isLoading = false;
      initialLoadComplete = true;
    }
  }

  function debounce(func: (...args: any[]) => void, delay: number) {
    let timeoutId: NodeJS.Timeout;
    return function(...args: any[]) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
  onMount(() => {
    multisearch = document.createElement('jp-multisearch') as HTMLJpMultisearchElement;
    multisearch.required = isRequired;
    multisearch.label = 'Multisearch';
    multisearch.defaultSearch = true;
    multisearch.defaultShow = 3;
    multisearch.service = {
      i: 0,
      async search(str: string) {
        const results = options
          .filter((option) =>
            option.label.toLowerCase().includes(str.toLowerCase()) || 
            option.value.toLowerCase().includes(str.toLowerCase())
          )
          .map((option) => ({
            value: option.value,
            label: option.label
          }));
        if (results.length === 0) {
          return [{ value: '', label: 'No results' }];
        }
        return results;
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
        const existingOption = options.find(opt => opt.value === value);
        if (existingOption) return existingOption;
        await new Promise((resolve) => setTimeout(resolve, 1500));
        return { value, label: `ID: ${value}` };
      }
    };
    if (selectedValues.length) {
      loadInitialValues(selectedValues);
    }
    const debouncedSearch = debounce(async (str: string) => {
      if (!initialLoadComplete) return;
      const results = await multisearch.service.search(str);
      multisearch.results = results;
    }, 250);
    multisearch.addEventListener('change', (event: Event) => {
      const selectedValue = (event as CustomEvent).detail;
      multisearch.value = selectedValue || '';
      selectedValues = selectedValue ? selectedValue.split(',') : [];
    });
    // Listen to the open event
    multisearch.addEventListener('input', (event: Event) => {
      const inputValue = (event.target as HTMLInputElement).value;
      debouncedSearch(inputValue);
    });
    el.appendChild(multisearch);
  });
</script>

<form>
  <div bind:this={el} />
  <button type="submit">Submit</button>
</form>