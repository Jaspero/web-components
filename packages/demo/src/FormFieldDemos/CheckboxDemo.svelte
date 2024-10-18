<script lang="ts">
    import '../../../../dist/checkbox.wc';
    import '../../../../dist/checkbox.css';

    const options = [
    { value: 'apple 1', label: 'apple 1', disabled: true },
    { value: 'banana 2', label: 'banana 2', disabled: true },
    { value: 'cherry 3', label: 'cherry 3' },
    { value: 'date 4', label: 'date 4' },
    { value: 'elderberry 5', label: 'elderberry 5' },
    { value: 'fig 6', label: 'fig 6' }
  ];
</script>
<form>
    <h1>first two options are diabled</h1>
    <!--Should isolate checkboxes if testing limits because they share values -->
    <jp-checkbox {options} label="Checkbox"></jp-checkbox>
    <jp-checkbox {options} labelType="outside" label="Checkbox outside label"></jp-checkbox>
    <jp-checkbox {options} label="Checkbox maxSelect 3" maxSelects=3></jp-checkbox>
    <jp-checkbox {options} label="Checkbox minSelect 2" minSelects=2></jp-checkbox>

<button type="submit">submit</button>
</form>