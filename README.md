<!-- TITLE -->

<!-- BADGES/ -->

<span class="badge-travisci"><a href="http://travis-ci.org/Dash-OS/reducer-generator-object-map" title="Check this project's build status on TravisCI"><img src="https://img.shields.io/travis/Dash-OS/reducer-generator-object-map/master.svg" alt="Travis CI Build Status" /></a></span>
<span class="badge-npmversion"><a href="https://npmjs.org/package/reducer-generator-object-map" title="View this project on NPM"><img src="https://img.shields.io/npm/v/reducer-generator-object-map.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/reducer-generator-object-map" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/reducer-generator-object-map.svg" alt="NPM downloads" /></a></span>

<!-- /BADGES -->

<!-- DESCRIPTION -->

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

<!-- HISTORY -->
<!-- BACKERS -->
<!-- LICENSE -->