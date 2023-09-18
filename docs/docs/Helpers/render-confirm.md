# renderConfirm

### Description

`renderConfirm` is a function that makes rendering `<jp-confirm>` easier.

### Parameters

| **Name** | **Required** | **Type** | **Description** |
| :----: | :----: | :----: | :---: |
| options | | `ConfirmOptions` | rendering options |
| callback | | `(action?: string) => void` | called when confirm closes |

### Interfaces

#### `ConfirmOptions`

##### Properties

| **Name** | **Required** | **Type** |**Description** |
| :----: | :----: | :----: | :---: |
| title | |`string` | title of the confirmation |
| message | | `string` | information within the confirmation |
| reject | | `string` | reject button inner text |
| accept | | `string` | accept button inner text |
| closable | | `boolean` | determines if a confirmation can be closed |
| host | | `HTMLElement` | element to append the confirm to |