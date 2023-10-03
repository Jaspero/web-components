<script lang="ts">
  import { onMount } from 'svelte';
  /*import '../../../dist/alert.wc.js'; */
  /*import '../../../dist/confirm.wc.js'*/
  /*import '../../../dist/async-table.wc.js';*/
  /*import '../../../dist/input.wc.js';
  /*import '../../../dist/quill.wc.js';*/
  import '../../../dist/checkbox.wc.js';
  /*import '../../../dist/progress-spinner.wc.js'*/
  import '../../../dist/chips.wc.js';
  import '../../../dist/datepicker.wc.js';
  import '../../../dist/multiselect.wc.js';
  import '../../../dist/select.wc.js';
  import '../../../dist/accordion.wc.js';
  import '../../../dist/bellow.wc.js';
  import '../../../dist/radio.wc.js'
  import '../../../dist/json-editor.wc.js'
  import '../../../dist/code-editor.wc.js'
  import '../../../dist/image-gallery.wc.js'
  import '../../../dist/image-upload.wc.js'
  import '../../../dist/paginator.wc.js'
  import '../../../dist/table.wc.js'
  import '../../../dist/textarea.wc.js';
  import '../../../dist/button.wc.js'
  import '../../../dist/link.wc.js'
  import '../../../dist/slider.wc.js'
  import '../../../dist/stepper.wc.js';

  import { renderAlert } from '../../../dist/render-alert.js';
  import { renderConfirm } from '../../../dist/render-confirm.js';
  import { FirebaseTableService } from './firebase-table.service';
  import { MockImageService } from './mock-image.service..js';

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
        key: '/publicationDate',
        label: 'Publication Date'
      },
      {
        key: '/readTime',
        label: 'Read Time',
        pipes: [(value) => value + 'min']
      },
      {
        key: '/title',
        label: 'Title',
        sortable: true
      },
      {
        key: '/author',
        label: 'Author'
      },
      {
        key: '/author',
        label: 'Author'
      },
      {
        key: '/author',
        label: 'Author'
      },
      {
        key: '/author',
        label: 'Author'
      },
      {
        key: '/author',
        label: 'Author'
      },
      {
        key: '/author',
        label: 'Author'
      },
      {
        key: '/author',
        label: 'Author'
      },
      {
        key: '/author',
        label: 'Author'
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

    checkboxEl.options =
      '[{"label": "aaa", "value": false},{"label": "lorem aa", "value": true},{"label": "lorem adasda", "value": true},{"label": "ipsum dolorrr", "value": false, "disabled": true}]';

    checkboxEl.minSelects = 2;

    formEl.appendChild(checkboxEl);

    renderConfirm(
      {
        title: 'Remove campaign?',
        message: 'Are you sure you want to remove this campaign?',
        reject: 'Decline',
        accept: 'Accept',
        closable: true
      },
      (e) => console.log(e)
    );

    const spinnerEl = document.createElement('jp-progress-spinner');
    spinnerEl.determinate = false;
    spinnerEl.progress = 44;
    spinnerEl.radius = 100;
    spinnerEl.stroke = 20;
    el.appendChild(spinnerEl)

    const paginatorEl = document.createElement('jp-paginator');

    paginatorEl.addEventListener('change', (e) => console.log(e.detail))
    el.appendChild(paginatorEl)

    const chipsEl = document.createElement('jp-chips') as HTMLInputElement;

    chipsEl.name = 'chips';
    chipsEl.label = 'label 1212';
    chipsEl.placeholder = 'placeholder';
    chipsEl.minitems = 2;
    chipsEl.maxitems = 4;
    chipsEl.required = true;
    chipsEl.unique = true;
    // chipsEl.pattern = /kjh/;

    formEl.appendChild(chipsEl);


    const multiselectEl = document.createElement('jp-multiselect') as HTMLInputElement;

    multiselectEl.name = 'multiselect';
    // multiselectEl.minSelects = 1
    // multiselectEl.maxSelects = 2
    multiselectEl.required = true;
    multiselectEl.placeholder = 'placeholder';
    multiselectEl.options =
      '[{"label": "label1", "selected": false, "disabled": true},{"label": "label2", "selected": true},{"label": "label3", "selected": true},{"label": "label4", "selected": false, "disabled": true},{"label": "label5", "selected": false}]';

    formEl.appendChild(multiselectEl);

    const selectEl = document.createElement('jp-select') as HTMLInputElement;

    selectEl.placeholder = 'placeholder';
    selectEl.options = '["aaa", "bbb", "ccc"]';
    selectEl.name = 'selectel';

    formEl.appendChild(selectEl);

    const radioEl = document.createElement('jp-radio') as HTMLInputElement;

    radioEl.options = '["aaa", "bbb", "ccc"]';
    radioEl.value = 'aaa';
    radioEl.name = 'radioel';
    // radioEl.required = true
    // radioEl.disabled = true

    formEl.appendChild(radioEl);

    const textareaEl = document.createElement('jp-textarea') as HTMLInputElement;

    textareaEl.value = 'pattern text';
    textareaEl.name = 'textarea';
    textareaEl.readonly = true;

    formEl.appendChild(textareaEl);

    const sliderEl = document.createElement('jp-slider') as HTMLInputElement; 

    formEl.appendChild(sliderEl);


    const jsonEditor = document.createElement('jp-json-editor');

    jsonEditor.content =
      '{"array": [1, 2, 3],"boolean": true,"color": "#82b92c","null": null,"number": 123,"object": { "a": "b", "c": "d" },"string": "Hello World"}';

    el.appendChild(jsonEditor);

    

    const imageUploadEl = document.createElement('jp-image-upload')

    imageUploadEl.service = new MockImageService()
    imageUploadEl.name = 'nameeeee'
    imageUploadEl.label = 'Upload a file'
    imageUploadEl.id = 'imageuploadid'

    formEl.appendChild(imageUploadEl)

    jsonEditor.addEventListener('change', (e) => console.log(e.detail));
    
    const buttonEl = document.createElement('jp-button')
    buttonEl.disabled = false;
    el.appendChild(buttonEl);

    const linkEl = document.createElement('jp-link')
    el.appendChild(linkEl)
    
    const stepperEl = document.createElement('jp-stepper')
    el.appendChild(stepperEl)

    let headers = [
      { label: 'Name', key: 'name' },
      { label: 'Age', key: 'age' },
      { label: 'Location', key: 'location' },
      { label: 'Job', key: 'job' },
      { label: 'Status', key: 'status' },
    ];

    let rows = [
      { name: 'John', age: 28, location: 'NY', job: 'Engineer', status: 'Active' },
      { name: 'Jane', age: 32, location: 'LA', job: 'Doctor', status: 'Inactive' },
      { name: 'Doe', age: 45, location: 'TX', job: 'Teacher', status: 'Active' },
      { name: 'Smith', age: 37, location: 'WA', job: 'Dentist', status: 'Pending' },
      { name: 'Brown', age: 50, location: 'FL', job: 'Lawyer', status: 'Active' },
    ];

    let sort = {
      key: 'name',
      direction: 'asc'
    };

    let tableEl = document.createElement('jp-table')
    tableEl.headers = headers
    tableEl.rows = rows
    tableEl.sort = sort
    el.appendChild(tableEl)
  });

  function submit(e) {
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    console.log(formProps, formData);
  }

  let headers = [
    { label: 'Name', key: 'name', sortable: true },
    { label: 'Age', key: 'age', sortable: true },
    { label: 'Location', key: 'location', sortable: false },
    { label: 'Job', key: 'job', sortable: true },
    { label: 'Status', key: 'status', sortable: true },
  ];

  let rows = [
    { name: 'John', age: 28, location: 'NY', job: 'Engineer', status: 'Active' },
    { name: 'Jane', age: 32, location: 'LA', job: 'Doctor', status: 'Inactive' },
    { name: 'Doe', age: 45, location: 'TX', job: 'Teacher', status: 'Active' },
    { name: 'Smith', age: 37, location: 'WA', job: 'Dentist', status: 'Pending' },
    { name: 'Brown', age: 50, location: 'FL', job: 'Lawyer', status: 'Active' },
  ];

  let sort = {
    key: 'name',
    direction: 'asc'
  };

</script>
<div bind:this={el} class="p-4"></div>

<form bind:this={formEl} class="p-4" on:submit|preventDefault={submit}>
  <input type="text" id="pero" name="pero" />

  <button type="submit">Submit</button>

  <!--<jp-radio options={['aaa', 'bbb']}></jp-radio>-->
</form>


<div class="relative flex overflow-hidden">
  <jp-multiselect disabled hint="Ovo je hint" options={[{label: 'Audi'}, {label: 'Volvo'}, {label: 'BMW'}, {label: 'Peugeot'}, {label: 'Renault'}, {label: 'Ford'}, {label: 'Opel'}]}></jp-multiselect>
  <jp-select hint="Ovo je hint" options={[
          {value: 'United States', disabled: true},
          {value: 'Croatia'},
          {value: 'Serbia', disabled: true},
          {value: 'Kosovo', disabled: true},
          {value: 'Germany'}
          ]}>
  </jp-select>
  <jp-radio options={[{value: 'Audi', disabled: true}, {value: 'Volvo', disabled: true}, {value: 'BMW'}, {value: 'Peugeot'}, {value: 'Renault'}, {value: 'Ford'}, {value: 'Opel'}]}></jp-radio>
  <jp-input hint="This is a hintasfaskfaksfiojfaiosjfiosjiof"></jp-input>
  <jp-input readonly value="this is a read only input"></jp-input>
  <jp-input></jp-input>
</div>

<div class="max-w-xl mx-auto">
  <jp-accordion>
    <jp-bellow title="First Panel"><input type="text" />Content for the first panel</jp-bellow>
    <jp-bellow title="Second Panel">Content for the second panel</jp-bellow>
    <jp-bellow title="Third Panel">Content for the third panel</jp-bellow>
  </jp-accordion>
</div>

<jp-datepicker></jp-datepicker>

<jp-code-editor label="asdf"></jp-code-editor>

<jp-button variant="flat" color="accent"> button on the right </jp-button>
<jp-link> link </jp-link>
<form action="">
  <jp-select
    options={[
      'United States',
      'United Kingdom',
      'Canada',
      'Croatia',
      'Cambodia',
      'Italy',
      '1 Apple',
      '2 Trees',
      '3 Mugs',
      '4 Police Officers'
    ]}
  ></jp-select>   
  <button>asdf</button>
</form>