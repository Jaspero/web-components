# File list

### Description

`<jp-file-list>` is a component with functionality of `<input multiple type="file">`, but also supports initial value in form of urls.

### Attributes

| Name | Required |   Type   |     Description      |
|:--------:|:------------:|:------------:|:------------------------:|
|    value    |              |   `string` (list of urls separated by comma)   |    initial value     |
|    label    |              |   `string` (HTML)   |    displayed above the field     |
|    id    |              |   `string`   |    unique identifier     |
|   name   |      ✓       |   `string`   | name of the form control |
| service  |      ✓       | [`FileService`](#fileservice) |      file service       |
| sortable | | `boolean` | enables/disables drag and drop sort |
| maxfiles | | `number` | maximum number of files allowed |
| maxfilesValidationMessage | | `string` | validation message for when component does not satisfy maxfiles |
| minfiles | |  `number` |  minimum number of files allowed |
| minfilesValidationMessage | | `string` | validation message for when component does not satisfy minfiles |
| validationMessages | | `{[type]: string}` where `type` is `string` | compact way of writing validation messages in a single attribute |

### Interfaces

#### `FileService`

Defines the accepted file types and provides a method to upload a file.

##### Properties

| **Name** | **Required** | **Type** |**Description** |
| :----: | :----: | :----: | :---: |
| acceptedFiles | ✓ | `string` | defines acceptable file types |
| maxSize |  | `number` | max file size in bytes |
| uploadFile |  | `(file: any, id?: string) => Promise<string>` | uploads a file and returns a promise <br></br> which is a string that represents a link to the file location |

<br></br>

### Slots

This component does not have any slots.

### Methods
- `reportValidity` 
  - triggers reportValidity
- `save` 
  - async function that saves files and adds urls to value

### Events
- `value` 
  - triggers when files change
- `removed` 
  - triggers when saved file is removed and contains information about url
- `change` 
  - triggers when new files are added and contains information about unsaved files
- `rejected` 
  - triggers when added file is not accepted because it does not satisfy some service criteria
  
### Demo

```jsx live
<jp-file-list>
</jp-file-list>
```
