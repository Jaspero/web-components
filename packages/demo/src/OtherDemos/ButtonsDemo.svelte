<script lang="ts">
    import '../../../../dist/button.wc.js';
</script>

<jp-button>Button</jp-button>
<jp-button disabled=true>Button disabled</jp-button>
<jp-button loading=true>Button loading</jp-button>
<jp-button variant="raised">Button raised</jp-button>
<jp-button variant="stroked">Button stroked</jp-button>
<jp-button variant="flat">Button flat</jp-button>
<div>
<jp-button variant="icon"><svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg></jp-button>
icon</div>
<div>
<jp-button variant="fab"><svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg></jp-button>
fab</div>


<jp-button color="primary" variant="stroked">Button primary</jp-button>
<jp-button color="accent" variant="stroked">Button accent</jp-button>
<jp-button color="warn" variant="stroked">Button warn</jp-button>