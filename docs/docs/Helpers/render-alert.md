# renderAlert

### Description

`renderAlert` is a function that makes rendering `<jp-alert>` easier.

### Parameters

| **Name** | **Required** | **Type** | **Description** |
| :----: | :----: | :----: | :---: |
| options | | `AlertOptions` | rendering options |
| callback | | `(action?: string) => void` | called when alert closes |

### Interfaces

#### `AlertOptions`

##### Properties

| **Name** | **Required** | **Type** | **Description** |
| :----: | :----: | :----: | :----: |
| title | | `string` | title of the alert |
| message | | `string` | information within an alert |
| state | | `'error'` or `'success'` | type of alert | 
| host | | `HTMLElement` | element to append the alert to |
| duration | | `number` | duration of the appereance of alert |