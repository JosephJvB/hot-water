# Boiling it up:

- [Eslint-airbnb config](https://github.com/airbnb/javascript): I run this command to install airbnb's eslint config locally :)
```bash
  (
    export PKG=eslint-config-airbnb;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
```
<hr/>

- [react-router-config](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config)<br/>
### Component(s): `renderRoutes`
### Usage:
renderRoutes accepts an array of route objects and renders them. Alternative that I've used in the past is a dedicated custom h(Routes) component with react-router's Route component as children. This is cleaner - I guess?
<hr/>

- [react-router-redux](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux)<br/>
### Component(s): `ConnectedRouter`
### Usage:
attach a history object to redux state.
<hr/>

- []()<br/>
### Components: ``
### Usage:
<hr/>

- []()<br/>
### Components: ``
### Usage:
<hr/>


webpack / webpack-cli / webpack-dev-server

babel:  loader / polyfill / core / preset-env

eslint: airbnb

@feathersjs: feathers / express
cors
fela
helmet
node-dev -> hot reloader
winston

MINDED STRUCTURE: //
  - reducers use { handleActions } from 'redux-actions'
  - createStructuredSelector from 'reselect'


TODOS: //
- document dependencies
- set up structured selectors for state / props
- I dont have any setup for a database, is that a problem...
  -> if I could set up PG that would be good learning