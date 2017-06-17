# reducer-generator-object-map

<!-- BADGES -->

A `reducer-generator` which builds a redux-reducer which matches against 
object literals.

> You may pass extra arguments when creating the reducer and when reducing. 
> The resulting arguments will be `(...initialArgs, ...reducerArgs)`.

### Installation

```
yarn add reducer-generator-object-map
```

**or**

```
npm install --save reducer-generator-object-map
```

### Simple Example

```js
import createObjectMapReducer from 'reducer-generator-object-map'

const system = createObjectMapReducer({ /* initial state */ }, {
  'SYSTEM_ONLINE': (state, { type, ...action }, ...extraArgs) => ({
    ...state,
    isOnline: true
  }),
  'SYSTEM_OFFLINE': (state, { type, ...action }, ...extraArgs) => ({
    ...state,
    isOnline: false
  })
}, /* You may pass extra args that will be passed to the reducer(s) */ )
```
