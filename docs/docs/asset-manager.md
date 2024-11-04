# Asset Manager

### Description

`<jp-asset-manager>` is a component designed for managing files and folders, enabling users to upload, select, and organize assets seamlessly.

### Attributes

|     **Name**     | **Required** |               **Type**               |               **Description**                                                 |
| :--------------: | :----------: | :----------------------------------: | :-----------------------------------------:                                   |
|      wording     |      ✓       | `Object`                             | Contains customizable text labels for UI elements.                            |
|     rootPath     |              | `string`                             | Initial path to the root directory where assets are managed.                  |
|     maxSize      |              | `number`                             | Specifies the maximum file size (in bytes) allowed for uploads.               |
|   acceptedFiles  |              | `string`                             | Defines the accepted file types (e.g., images, documents).                    |
|    shownFiles    |              | `string[]`                           | Array of file types that should be displayed in the manager.                  |
|     service      |      ✓       | `AssetManagerService`                | Handles asset management operations, such as uploading and fetching files.    |
|    selectable    |              | `'' | 'single' | 'multiple'`         | Sets the asset selection mode, allowing either single or multiple selections. |

### Slots

This component does not have any slots.

### Methods

- `clearSelection`
  - Clears the currently selected items in the asset manager, resetting the selection state to an empty object.

### Events

- `selected`
  - Dispatched when the user confirms their selection of assets. This event includes the selected asset(s) as its detail, allowing parent components to respond appropriately.

### Demo

```jsx live
<jp-asset-manager wording='{"DROP_FILES_HERE": "Drop your files here", "FOLDER_NAME": "Folder name", "SUBMIT": "Submit", "FOLDER_IS_EMPTY": "Folder is empty"
"CONFIRM_SELECTION": "Confirm selection", "PAUSE": "Pause", "RESUME": "Resume", "CANCEL": "Cancel"}'rootPath='/'maxSize='10485760'acceptedFiles='*'shownFiles='[]'service='assetManagerService'selectable='multiple'></jp-asset-manager>
```
