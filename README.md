# reducer-generator-object-map

A `reducer-generator` which builds a redux-reducer which matches against 
object literals.

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
import objectMapReducer from 'reducer-generator-object-map'

const system = objectMapReducer({ /* initial state */ }, {
  'SYSTEM_ONLINE': (state, { type, ...action }) => ({
    ...state,
    isOnline: true
  }),
  'SYSTEM_OFFLINE': (state, { type, ...action }) => ({
    ...state,
    isOnline: false
  })
})
```