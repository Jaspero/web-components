<script lang="ts">
    import '../../../../dist/color.wc';
    import '../../../../dist/color.css';
</script>

<form>
<jp-color />
<jp-color label="color label"/>
<jp-color label="color disabled" disabled=true/>
<jp-color label="color required" required=true />

<button type="submit">submit</button>
</form>