<script lang="ts">
  import '../../lib/src/index.css';
  //FORM FIELDS
  import AutocompleteDemo from './FormFieldDemos/AutocompleteDemo.svelte';
  import CheckboxDemo from './FormFieldDemos/CheckboxDemo.svelte';
  import ChipsDemo from './FormFieldDemos/ChipsDemo.svelte';
  import CkEditorDemo from './FormFieldDemos/CkEditorDemo.svelte';
  import DateRangeDemo from './FormFieldDemos/DateRangeDemo.svelte';
  import DatepickerDemo from './FormFieldDemos/DatepickerDemo.svelte';
  import FileListDemo from './FormFieldDemos/FileListDemo.svelte';
  import FileUploadDemo from './FormFieldDemos/FileUploadDemo.svelte';
  import InputDemo from './FormFieldDemos/InputDemo.svelte';
  import MultiSearchDemo from './FormFieldDemos/MultiSearchDemo.svelte';
  import MultiSelectDemo from './FormFieldDemos/MultiSelectDemo.svelte';
  import QuillDemo from './FormFieldDemos/QuillDemo.svelte';
  import RadioDemo from './FormFieldDemos/RadioDemo.svelte';
  import RangeDemo from './FormFieldDemos/RangeDemo.svelte';
  import SelectDemo from './FormFieldDemos/SelectDemo.svelte';
  import SliderDemo from './FormFieldDemos/SliderDemo.svelte';
  import TextareaDemo from './FormFieldDemos/TextareaDemo.svelte';
  import ToggleDemo from './FormFieldDemos/ToggleDemo.svelte';
  //EDITORS
  import CodeEditorDemo from './EditorsDemos/CodeEditorDemo.svelte';
  import JsonEditorDemos from './EditorsDemos/JSONEditorDemos.svelte';
  //OTHERS
  import AccordionDemo from './OtherDemos/AccordionDemo.svelte';
  import AlertDemo from './OtherDemos/AlertDemo.svelte';
  import AssetManagerDemo from './OtherDemos/AssetManagerDemo.svelte';
  import AsyncTableDemo from './OtherDemos/AsyncTableDemo.svelte';
  import ButtonsDemo from './OtherDemos/ButtonsDemo.svelte';
  import CarouselDemo from './OtherDemos/CarouselDemo.svelte';
  import ConfirmDemo from './OtherDemos/ConfirmDemo.svelte';
  import DataPaginatorDemo from './OtherDemos/DataPaginatorDemo.svelte';
  import ImageGalleryDemo from './OtherDemos/ImageGalleryDemo.svelte';
  import LinkDemo from './OtherDemos/LinkDemo.svelte';
  import MenuDemo from './OtherDemos/MenuDemo.svelte';
  import PagePaginatorDemo from './OtherDemos/PagePaginatorDemo.svelte';
  import ProgressSpinnerDemo from './OtherDemos/ProgressSpinnerDemo.svelte';
  import ReviewStarsDemo from './OtherDemos/ReviewStarsDemo.svelte';
  import StepperDemo from './OtherDemos/StepperDemo.svelte';
  import TableDemo from './OtherDemos/TableDemo.svelte';
  import TabsDemo from './OtherDemos/TabsDemo.svelte';
  import TooltipDemo from './OtherDemos/TooltipDemo.svelte';
  import TreeDemo from './OtherDemos/TreeDemo.svelte';

  import Demos from './Demos.svelte';
</script>

<AssetManagerDemo />
<!-- <MultiSearchDemo /> -->
<!--<ChipsDemo/>-->
<!-- <AsyncTableDemo />-->
<!-- <MultiSelectDemo /> -->
<!-- <FileListDemo /> -->
<!-- <Demos /> -->
<!-- <InputDemo /> -->
<!-- <ImageGalleryDemo /> -->
<!-- <DateRangeDemo /> -->
<!-- <CkEditorDemo /> -->
<!-- <CkEditorDemo /> -->
<!-- <RangeDemo /> -->

<div class="layout-container">
  <!--
  <aside class="sidebar">
    <ul>
      <li><a href="#">Link 1</a></li>
      <li><a href="#">Link 2</a></li>
      <li><a href="#">Link 3</a></li>
      <li><a href="#">Link 4</a></li>
    </ul>
  </aside>
-->
  <div class="form-container">
    <div class="form fields">
      <!-- <AutocompleteDemo /> -->
      <!-- <CheckboxDemo /> -->
      <!-- <ChipsDemo /> -->
      <!-- <CkEditorDemo /> -->
      <!-- <DateRangeDemo /> -->
      <!-- <DatepickerDemo /> -->
      <!-- <FileListDemo /> -->
      <!-- <FileUploadDemo /> -->
      <!-- <InputDemo /> -->
      <!-- <MultiSearchDemo /> -->
      <!-- <MultiSelectDemo /> -->
      <!-- <QuillDemo /> -->
      <!-- <RadioDemo /> -->
      <!-- <RangeDemo /> -->
      <!-- <SelectDemo /> -->
      <!-- <SliderDemo /> -->
      <!-- <TextareaDemo /> -->
      <!-- <ToggleDemo /> -->
    </div>
    <div class="editors">
      <!-- <CodeEditorDemo /> -->
      <!-- <JsonEditorDemos /> -->
    </div>
    <div class="other editors">
      <!-- <AccordionDemo/> -->
      <!-- <AlertDemo /> -->
      <!-- <AssetManagerDemo /> -->
      <!-- <AsyncTableDemo /> -->
      <!-- <ButtonsDemo/> -->
      <!-- <CarouselDemo /> -->
      <!-- <ConfirmDemo /> -->
      <!-- <DataPaginatorDemo /> -->
      <!-- <ImageGalleryDemo /> -->
      <!-- <LinkDemo /> -->
      <!-- <MenuDemo /> -->
      <!-- <PagePaginatorDemo/> -->
      <!-- <ProgressSpinnerDemo /> -->
      <!-- <ReviewStarsDemo /> -->
      <!-- <StepperDemo /> -->
      <!-- <TableDemo/> -->
      <!-- <TabsDemo /> -->
      <!-- <TooltipDemo /> -->
      <!-- <TreeDemo /> -->
    </div>
  </div>
  <!--
  <aside class="sidebar-right">
    <ul>
      <li><a href="#">Link 1</a></li>
      <li><a href="#">Link 2</a></li>
      <li><a href="#">Link 3</a></li>
      <li><a href="#">Link 4</a></li>
    </ul>
  </aside>
-->
</div>

<style>
  .layout-container {
    display: flex;
    width: 100%;
  }

  aside {
    width: 20%;
    background-color: #f4f4f4;
    padding: 15px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  }

  .sidebar {
    flex-shrink: 0;
  }

  .sidebar-right {
    flex-shrink: 0;
  }

  .form-container {
    flex-grow: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  aside ul {
    list-style: none;
    padding: 0;
  }

  aside ul li {
    margin: 10px 0;
  }

  aside ul li a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
  }
</style>
