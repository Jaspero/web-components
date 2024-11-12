<!-- import '../../static/c/multisearch.wc.js';
import '../../static/c/multisearch.css'; -->

# Multisearch

### Description

`<jp-multisearch>` is a component with a combination of search and multi select functionalities.

### Attributes

|            Name             | Required |                    Type                     |                            Description                            |
| :-------------------------: | :------: | :-----------------------------------------: | :---------------------------------------------------------------: |
|            value            |          |                  `string`                   |                              setter                               |
|           service           |    ✓     |      [`SearchService`](#searchservice)      |                          search service                           |
|            name             |    ✓     |                  `string`                   |                     name of the form control                      |
|         minSelects          |          |                  `number`                   |                 minimum number of selects allowed                 |
|        singleSelect         |          |                  `boolean`                  |         is it possible to select only one option or more          |
| minselectsValidationMessage |          |                  `string`                   | validation message for when component does not satisfy minselects |
|         maxSelects          |          |                  `number`                   |                 maximum number of selects allowed                 |
| maxselectsValidationMessage |          |                  `string`                   | validation message for when component does not satisfy maxselects |
|          required           |          |                  `boolean`                  |               determines if a selection is required               |
|  requiredValidationMessage  |          |                  `string`                   |  validation message for when component does not satisfy required  |
|          disabled           |          |                  `boolean`                  |               determines if a selection is disabled               |
|             id              |          |                  `string`                   |                         unique identifier                         |
|            label            |          |                  `string`                   |                   shows at the top of the field                   |
|          labelType          |          |          `'outside'` or `'inside'`          |          whether label is inside or outside of the field          |
|            hint             |          |                  `string`                   |                       shows below the field                       |
|     validationMessages      |          | `{[type]: string}` where `type` is `string` | compact way of writing validation messages in a single attribute  |
|        defaultSearch        |          |                  `boolean`                  |          determines if options are visible upon opening           |
|      defaultShowNumber      |          |                  `number`                   |                determines number of visible options               |

### Interfaces

#### `SearchService`

Defines functions for getting select options.

##### Properties

| **Name**  |      **Required**      |                 **Type**                  |               **Description**               |
| :-------: | :--------------------: | :---------------------------------------: | :-----------------------------------------: |
|  search   |                        | `(str: string) => Promise<Array<Option>>` |         option results from search          |
| getSingle | if `value` is provided | `(str: string) => Promise<Array<Option>>` |       returns option given the value        |
| loadMore  |                        | `(str: string) => Promise<Array<Option>>` | returns options given current search string |

Where `Option` is `{ label?: string; value: string; selected?: boolean; disabled?: boolean }`

<br></br>

### Slots

This component does not have any slots.

### Methods

- `getValue`
  - returns form field value
- `reportValidity`
  - triggers reportValidity

### Events

- `value`
  - triggers when selected options change

### Demo

```jsx live
// import '../../static/c/multisearch.wc.js';
// import '../../static/c/multisearch.css';

function multisearch(props) {
  let el = useRef(null);
  useEffect(() => {
    const multisearch = document.createElement('jp-multisearch');
    multisearch.value = 'aaa, bbb';
    multisearch.service = {
      i: 0,
      async search(str) {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        return [{ value: 'str+1' }, { value: 'str+2' }];
      },
      async loadMore(str) {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        this.loadMore = null;
        return [{ value: str }];
      },
      async getSingle(value) {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        return { value: value, label: this.i++ };
      }
    };
    el.current.appendChild(multisearch);
  });
  return <div ref={el}></div>;
}
```
