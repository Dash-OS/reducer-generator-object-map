<!-- TITLE/ -->

<h1>reducer-generator-object-map</h1>

<!-- /TITLE -->


<!-- BADGES/ -->

<span class="badge-npmversion"><a href="https://npmjs.org/package/reducer-generator-object-map" title="View this project on NPM"><img src="https://img.shields.io/npm/v/reducer-generator-object-map.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/reducer-generator-object-map" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/reducer-generator-object-map.svg" alt="NPM downloads" /></a></span>
<span class="badge-travisci"><a href="http://travis-ci.org/Dash-OS/reducer-generator-object-map" title="Check this project's build status on TravisCI"><img src="https://img.shields.io/travis/Dash-OS/reducer-generator-object-map/master.svg" alt="Travis CI Build Status" /></a></span>
<span class="badge-coveralls"><a href="https://coveralls.io/r/Dash-OS/reducer-generator-object-map" title="View this project's coverage on Coveralls"><img src="https://img.shields.io/coveralls/Dash-OS/reducer-generator-object-map.svg" alt="Coveralls Coverage Status" /></a></span>

<!-- /BADGES -->


<!-- DESCRIPTION/ -->

A redux reducer-generator which builds a redux-reducer which matches against object literals.

<!-- /DESCRIPTION -->


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

<!-- HISTORY/ -->

<h2>History</h2>

<a href="https://github.com/Dash-OS/reducer-generator-object-map/releases">Discover the release history by heading on over to the releases page.</a>

<!-- /HISTORY -->


<!-- BACKERS/ -->

<h2>Backers</h2>

<h3>Maintainers</h3>

These amazing people are maintaining this project:

<ul><li><a href="https://github.com/bradennapier">Braden Napier</a> — <a href="https://github.com/Dash-OS/reducer-generator-object-map/commits?author=bradennapier" title="View the GitHub contributions of Braden Napier on repository Dash-OS/reducer-generator-object-map">view contributions</a></li></ul>

<h3>Sponsors</h3>

No sponsors yet! Will you be the first?



<h3>Contributors</h3>

These amazing people have contributed code to this project:

<ul><li><a href="https://github.com/bradennapier">Braden Napier</a> — <a href="https://github.com/Dash-OS/reducer-generator-object-map/commits?author=bradennapier" title="View the GitHub contributions of Braden Napier on repository Dash-OS/reducer-generator-object-map">view contributions</a></li></ul>



<!-- /BACKERS -->


<!-- LICENSE/ -->

<h2>License</h2>

Unless stated otherwise all works are:

<ul><li>Copyright &copy; Braden R. Napier</li></ul>

and licensed under:

<ul><li><a href="http://spdx.org/licenses/MIT.html">MIT License</a></li></ul>

<!-- /LICENSE -->
