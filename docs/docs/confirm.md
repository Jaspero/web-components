# Confirm

### Description

`<jp-confirm>` is a component with the functionality of confirming user's actions.

### Attributes

| **Name** | **Required** | **Type** | **Description** |
| :----: | :----: | :----: | :---: |
| title | |`string` | title of the confirmation |
| message | | `string` | information within the confirmation |
| reject | | `string` | reject button inner text |
| accept | | `string` | accept button inner text |
| closable | | `boolean` | determines if a confirmation can be closed |

### Slots

This component does not have any slots.


### Methods

This component does not have any methods.


### Events

- `close`
   - triggers when closing the confirmation
- `confirmation`
   - triggers when confirmation is accepted or rejected
