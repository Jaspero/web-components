<script lang="ts">
  import { onMount } from 'svelte';
  import '../../../dist/multisearch.wc.js';
  import '../../../dist/multisearch.css';

  let el: HTMLDivElement;

  const options = [
    { value: 'apple 1', label: 'apple 1' },
    { value: 'banana 2', label: 'banana 2' },
    { value: 'cherry 3', label: 'cherry 3' },
    { value: 'date 4', label: 'date 4' },
    { value: 'elderberry 5', label: 'elderberry 5' },
    { value: 'fig 6', label: 'fig 6' },
    { value: 'grape 7', label: 'grape 7' },
    { value: 'honeydew 8', label: 'honeydew 8' },
    { value: 'kiwi 9', label: 'kiwi 9' },
    { value: 'lemon 10', label: 'lemon 10' },
    { value: 'mango 11', label: 'mango 11' },
    { value: 'nectarine 12', label: 'nectarine 12' },
    { value: 'orange 13', label: 'orange 13' },
    { value: 'papaya 14', label: 'papaya 14' },
    { value: 'quince 15', label: 'quince 15' },
    { value: 'raspberry 16', label: 'raspberry 16' },
    { value: 'strawberry 17', label: 'strawberry 17' },
    { value: 'tangerine 18', label: 'tangerine 18' },
    { value: 'ugli fruit 19', label: 'ugli fruit 19' },
    { value: 'vanilla 20', label: 'vanilla 20' },
    { value: 'watermelon 21', label: 'watermelon 21' },
    { value: 'xigua 22', label: 'xigua 22' },
    { value: 'yellow passion fruit 23', label: 'yellow passion fruit 23' },
    { value: 'zucchini 24', label: 'zucchini 24' },
    { value: 'avocado 25', label: 'avocado 25' },
    { value: 'blueberry 26', label: 'blueberry 26' },
    { value: 'coconut 27', label: 'coconut 27' },
    { value: 'dragonfruit 28', label: 'dragonfruit 28' },
    { value: 'eggplant 29', label: 'eggplant 29' },
    { value: 'fig 30', label: 'fig 30' },
    { value: 'grapefruit 31', label: 'grapefruit 31' },
    { value: 'huckleberry 32', label: 'huckleberry 32' },
    { value: 'jackfruit 33', label: 'jackfruit 33' },
    { value: 'kumquat 34', label: 'kumquat 34' },
    { value: 'lime 35', label: 'lime 35' },
    { value: 'mulberry 36', label: 'mulberry 36' },
    { value: 'olive 37', label: 'olive 37' },
    { value: 'peach 38', label: 'peach 38' },
    { value: 'plum 39', label: 'plum 39' },
    { value: 'raspberry 40', label: 'raspberry 40' },
    { value: 'sapodilla 41', label: 'sapodilla 41' },
    { value: 'tomato 42', label: 'tomato 42' },
    { value: 'watercress 43', label: 'watercress 43' },
    { value: 'yam 44', label: 'yam 44' },
    { value: 'ziziphus 45', label: 'ziziphus 45' },
    { value: 'FIG 6', label: 'FIG 6' },
    { value: 'GRAPE 7', label: 'GRAPE 7' },
    { value: 'HONEYDEW 8', label: 'HONEYDEW 8' },
    { value: 'KIWI 9', label: 'KIWI 9' },
    { value: 'LEMON 10', label: 'LEMON 10' },
    { value: 'MANGO 11', label: 'MANGO 11' },
    { value: 'NECTARINE 12', label: 'NECTARINE 12' },
    { value: 'ORANGE 13', label: 'ORANGE 13' },
    { value: 'PAPAYA 14', label: 'PAPAYA 14' },
    { value: 'RASPBERRY 16', label: 'RASPBERRY 16' },
    { value: 'STRAWBERRY 17', label: 'STRAWBERRY 17' },
    { value: 'TANGERINE 18', label: 'TANGERINE 18' },
    { value: 'VANILLA 20', label: 'VANILLA 20' },
    { value: 'WATERMELON 21', label: 'WATERMELON 21' }
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