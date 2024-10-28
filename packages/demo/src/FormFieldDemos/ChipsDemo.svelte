<script lang="ts">
    import '../../../../dist/chips.wc';
    import '../../../../dist/chips.css';
</script>
<form>
<jp-chips labelType="outside" label="Label" disabled=true/>
<jp-chips labelType="inside" label="Label" required=true/>

<jp-chips labelType="outside" label="Label minItems" minItems=2/>
<jp-chips labelType="inside" label="Label maxItems" maxItems=5/>

<jp-chips labelType="outside" label="Label unique" uninque="true"/>

<button type="submit">submit</button>
</form>