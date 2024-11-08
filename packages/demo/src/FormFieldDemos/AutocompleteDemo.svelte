<script lang="ts">
  import '../../../../dist/autocomplete.wc';
  import '../../../../dist/autocomplete.css';

  const options = [
    'apple 1',
    'banana 2',
    'cherry 3',
    'date 4',
    'elderberry 5',
    'fig 6',
    'grape 7',
    'honeydew 8',
    'kiwi 9',
    'lemon 10',
    'mango 11',
    'nectarine 12',
    'orange 13',
    'papaya 14',
    'quince 15',
    'raspberry 16',
    'strawberry 17',
    'tangerine 18',
    'ugli fruit 19',
    'vanilla 20',
    'watermelon 21',
    'xigua 22',
    'yellow passion fruit 23',
    'zucchini 24',
    'avocado 25',
    'blueberry 26',
    'coconut 27',
    'dragonfruit 28',
    'eggplant 29',
    'fig 30',
    'grapefruit 31',
    'huckleberry 32',
    'jackfruit 33',
    'kumquat 34',
    'lime 35',
    'mulberry 36',
    'olive 37',
    'peach 38',
    'plum 39',
    'raspberry 40',
    'sapodilla 41',
    'tomato 42',
    'watercress 43',
    'yam 44',
    'ziziphus 45',
    'FIG 6',
    'GRAPE 7',
    'HONEYDEW 8',
    'KIWI 9',
    'LEMON 10',
    'MANGO 11',
    'NECTARINE 12',
    'ORANGE 13',
    'PAPAYA 14',
    'RASPBERRY 16',
    'STRAWBERRY 17',
    'TANGERINE 18',
    'VANILLA 20',
    'WATERMELON 21'
  ];
</script>

<form>
  <jp-autocomplete {options} label="Autocomplete"></jp-autocomplete>
  <jp-autocomplete {options} label="Autocomplete outside label" labelType="outside"
  ></jp-autocomplete>
  <jp-autocomplete {options} label="Autocomplete disabled" disabled="true"></jp-autocomplete>
  <jp-autocomplete {options} label="Autocomplete required" required="true"></jp-autocomplete>
  <jp-autocomplete {options} label="Autocomplete maxLength 5" maxLength="5"></jp-autocomplete>
  <jp-autocomplete {options} label="Autocomplete minLength 3" minLength="3"></jp-autocomplete>

  <button type="submit">submit</button>
</form>
