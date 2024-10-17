<script lang="ts">
    import '../../../../dist/chips.wc';
    import '../../../../dist/chips.css';
</script>
<form>
<jp-chips labelType="outside" label="Label" disabled=true></jp-chips>
<jp-chips labelType="inside" label="Label" required=true></jp-chips>

<jp-chips labelType="outside" label="Label minItems" minItems=2></jp-chips>
<jp-chips labelType="inside" label="Label maxItems" maxItems=5></jp-chips>

<jp-chips labelType="outside" label="Label unique" uninque="true"></jp-chips>

<button type="submit">submit</button>
</form>