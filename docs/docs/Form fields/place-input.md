# Place Input

### Description

`<jp-place-input>` is a field component with a place lookup functionality.

### Attributes

| **Name** | **Required** | **Type** | **Description** |
| :----: | :----: | :----: | :---: |
| apiKey |  ✓  | `string` |  a unique identifier which is used for authentication of requests associated with usage and billing of Google Maps |
| mapId | ✓ | `string`| unique identifier of a single instance of a Google Map |
| startingLatitude | | `number` | latitude to center the map on |
| startingLongitude | | `number` |  longitude to center the map on |
| mapType |  |  One of the following: <br></br> `'roadmap'`, `'satellite'`, <br></br> `'hybrid'`, `'terrain'` | an interface that defines the display and usage of map tiles |
| zoom | | `number` | determines the zoom level on the map |
| label | | `string` | shows at the top of an input |
| labelType | | `'outside'` or `'inside'` | whether label is inside or outside of the field |
| name | ✓ | `string` |  name of the form control |
| id | | `string`| unique identifier |
| inputFocused | | `boolean` | determines if an input is focused on page load|
| disabled | | `boolean` | determines if an input is disabled |
| readonly | | `boolean` | determines if an input is read-only |
| placeholder | | `string` | temporary text that appears in an <br></br> input field before any input is entered |
| returnedValue | | `'simple'` or `'extended'` | determines if the returned value is dispatched only in a form of address or if it returns coordinates as well as the address |
| enableMap | | `boolean` | determines if a map is visible |
| gestureHandling | | One of the following: <br></br> `'cooperative'`, `'greedy'`, `'auto'` | determines whether the panning and scrolling behavior on the map is controlled by clicking the zoom controls or by all touch gestures and scroll events |
| types | | `string[]` | determines type of search results |
| componentRestriction | | `object` | used for restricting predictions |
|    value    |              |   `string`   |    setter     |
| required | | `boolean` | determines if an input is required |
| requiredValidationMessage | | `string` | validation message for when component does not satisfy required |
| resultValidationMessage | | `string` | validation message for when component cannot find results |
| validationMessages | | `{[type]: string}` where `type` is `string` | compact way of writing validation messages in a single attribute |

## Dependencies

### Permissions
In order for this component to work, `Places API`, `Geocoding API` and `Google Maps JS SDK` (or `Google Maps JS API`) permissions are required.
<br></br>

Steps on how to enable `Places API` can be found at https://developers.google.com/maps/documentation/javascript/places#GetStarted
<br></br>

Steps on how to enable `Geocoding API` can be found at https://developers.google.com/maps/documentation/javascript/geocoding#GetStarte
<br></br>

Steps on how to enable `Google Maps JS SDK` or `Google Maps JS API` can be found at https://developers.google.com/maps/documentation/javascript/cloud-setup#enabling-apis



### Attributes

In order to use certain attributes you have to implement them in a certain way. The following attributes and the ways to implement them are shown below:

#### `apiKey`

In order to be able to use a map, an apiKey needs to be generated.
Steps on how to create an API key can be found at https://developers.google.com/maps/documentation/javascript/get-api-key#create-api-keys

#### `mapId`

In order to be able to use a map, a mapId needs to be generated.
Steps on how to create a mapId can be found at https://developers.google.com/maps/documentation/get-map-id

#### `types`

The attribute is used to reduce search to a more specific result with searching by type of the place. Array can contain up to 5 types and more about types can be found at <br></br>
https://developers.google.com/maps/documentation/places/web-service/autocomplete#types

#### `componentRestriction`

The attribute is used to restrict search to a more specific prediction. Restrictions are made for specified countries for which the maximum amount is an array of 5 provided countries. More about restrictions can be found at https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#ComponentRestrictions

### Slots

This component does not have any slots.

### Methods
- `getValue` 
  - returns form field value
- `reportValidity` 
  - triggers reportValidity

### Events

- `value` 
  - triggers when value of the field changes
- `longitude` 
  - triggers when value of the field changes if returnedValue is set to 'extended'
- `latitude` 
  - triggers when value of the field changes if returnedValue is set to 'extended'

### Demo

```jsx live
function placeInput(props){
  let el = useRef(null);
  useEffect(() => {
    const placeInput = document.createElement('jp-place-input')
    placeInput.apiKey = '';
    placeInput.mapId = 'DEMO-MAP-ID';
    placeInput.componentRestrictions = {country: 'us'};
    placeInput.types = ['hospital'];
    placeInput.label = 'Place Input'
    el.current.appendChild(placeInput)
  })
  return (
    <div ref={el}></div>
  )
}

```
