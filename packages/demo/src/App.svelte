<script lang="ts">
  import { onMount } from 'svelte';
  /*import '../../../dist/alert.wc.js';
  import '../../../dist/confirm.wc.js'
  import '../../../dist/async-table.wc.js';*/
  import '../../../dist/input.wc.js';
  /*import '../../../dist/quill.wc.js';*/
  import '../../../dist/checkbox.wc.js'
  /*import '../../../dist/progress-spinner.wc.js'*/
  import '../../../dist/chips.wc.js'
  import '../../../dist/multiselect.wc.js'
  import '../../../dist/select.wc.js'
  import '../../../dist/accordion.wc.js'
  import '../../../dist/bellow.wc.js'
  /*import '../../../dist/radio.wc.js'
  import '../../../dist/json-editor.wc.js'
  import '../../../dist/code-editor.wc.js'*/
  import '../../../dist/image-gallery.wc.js'

  import { renderAlert } from '../../../dist/render-alert.js';
  import { renderConfirm } from '../../../dist/render-confirm.js'
  import { FirebaseTableService } from './firebase-table.service';

  let el: HTMLDivElement;
  let formEl: HTMLFormElement;

  onMount(() => {
    // const instanceEl = document.createElement('jp-bpmn-overview');
    const instanceEl = document.createElement('jp-async-table');

    // @ts-ignore
    instanceEl.service = new FirebaseTableService();

    // @ts-ignore
    instanceEl.headers = [
      {
        key: '/title',
        label: 'Title',
        sortable: true
      },
      {
        key: '/phoneNumber',
        label: 'Phone Number'
      }
    ];

    el.appendChild(instanceEl);

    renderAlert({ title: 'bla' });

    const inputEl = document.createElement('jp-input') as HTMLInputElement;

    inputEl.value = 'pero';
    inputEl.label = 'Perica';
    inputEl.name = 'input';

    formEl.appendChild(inputEl);

    const quillEl = document.createElement('jp-quill') as HTMLInputElement;

    
    quillEl.value = `<p>Blup</p>`;
    quillEl.name = 'quill';

    formEl.appendChild(quillEl);

    const checkboxEl = document.createElement('jp-checkbox') as HTMLInputElement;

    checkboxEl.options = '[{"label": "aaa", "value": false},{"label": "lorem aa", "value": true},{"label": "lorem adasda", "value": true},{"label": "ipsum dolorrr", "value": false, "disabled": true}]'

    checkboxEl.minSelects = 2

    formEl.appendChild(checkboxEl)
    
    renderConfirm({
      title: 'Remove campaign?', 
      // message: 'Are you sure you want to remove this campaign?'
      reject: 'rejected',
      closable: true
    }, (e) => console.log(e))


    const spinnerEl = document.createElement('jp-progress-spinner');
    spinnerEl.determinate = false
    spinnerEl.progress = 44
    spinnerEl.radius = 100;
    spinnerEl.stroke = 20;
    el.appendChild(spinnerEl)

    const chipsEl = document.createElement('jp-chips') as HTMLInputElement;
  
    chipsEl.name = 'chips'
    chipsEl.label = 'label 1212'
    chipsEl.placeholder = 'placeholder'
    chipsEl.minitems = 2
    chipsEl.maxitems = 4
    chipsEl.required = true
    chipsEl.unique = true
    // chipsEl.pattern = /kjh/;
  
    formEl.appendChild(chipsEl)

    const multiselectEl = document.createElement('jp-multiselect') as HTMLInputElement;

    multiselectEl.name = 'multiselect'
    // multiselectEl.minSelects = 1
    // multiselectEl.maxSelects = 2
    multiselectEl.required = true
    multiselectEl.placeholder = 'placeholder'
    multiselectEl.options = '[{"label": "label1", "selected": false},{"label": "label2", "selected": true},{"label": "label3", "selected": true},{"label": "label4", "selected": false, "disabled": true},{"label": "label5", "selected": false}]'

    formEl.appendChild(multiselectEl)


    const selectEl = document.createElement('jp-select') as HTMLInputElement;

    selectEl.placeholder = "placeholder"
    selectEl.options = '["aaa", "bbb", "ccc"]'
    selectEl.name = 'selectel'

    formEl.appendChild(selectEl)

    const radioEl = document.createElement('jp-radio') as HTMLInputElement;

    radioEl.options = '["aaa", "bbb", "ccc"]'
    radioEl.value = 'aaa'
    radioEl.name = 'radioel'
    // radioEl.required = true
    // radioEl.disabled = true

    formEl.appendChild(radioEl);

    const jsonEditor = document.createElement('jp-json-editor')

    jsonEditor.content = '{"array": [1, 2, 3],"boolean": true,"color": "#82b92c","null": null,"number": 123,"object": { "a": "b", "c": "d" },"string": "Hello World"}'

    el.appendChild(jsonEditor)
    
    jsonEditor.addEventListener('change', (e) => console.log(e.detail))

    const codeEditor = document.createElement('jp-code-editor')

    codeEditor.content = "function myScript(){return 100;}\n"
    codeEditor.options = {mode:"javascript"}

    el.appendChild(codeEditor)

    codeEditor.addEventListener('change', (e) => console.log(e.detail))
  });

  function submit(e) {
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    console.log(formProps, formData);
  }
</script>

<div bind:this={el} class="p-4"></div>

<form bind:this={formEl} class="p-4" on:submit|preventDefault={submit}>
  <input type="text" id="pero" name="pero" />

  <button type="submit">Submit</button>

  <!--<jp-radio options={['aaa', 'bbb']}></jp-radio>-->
</form>

<div class="relative flex overflow-hidden">
  <jp-multiselect hint="Ovo je hint" options={[{label: 'Audi'}, {label: 'Volvo'}, {label: 'BMW'}, {label: 'Peugeot'}, {label: 'Renault'}, {label: 'Ford'}, {label: 'Opel'}]}></jp-multiselect>
  <jp-select hint="Ovo je hint" options={['United States', 'United Kingdom', 'Canada', 'Croatia', 'Cambodia', 'Italy', '1 Apple', '2 Trees', '3 Mugs', '4 Police Officers']}></jp-select>
  <jp-input hint="This is a hintasfaskfaksfiojfaiosjfiosjiof"></jp-input>
  <jp-input></jp-input>
  <jp-input></jp-input>
</div>

<div class="max-w-xl mx-auto">
  <jp-accordion>
    <jp-bellow title="First Panel"><input type="text">Content for the first panel</jp-bellow>
    <jp-bellow title="Second Panel">Content for the second panel</jp-bellow>
    <jp-bellow title="Third Panel">Content for the third panel</jp-bellow>
  </jp-accordion>
</div>

<form action="">
  <jp-select required options={['United States', 'United Kingdom', 'Canada', 'Croatia', 'Cambodia', 'Italy', '1 Apple', '2 Trees', '3 Mugs', '4 Police Officers']}></jp-select>

  <button>asdf</button>
</form>