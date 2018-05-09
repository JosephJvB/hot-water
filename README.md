# Boiling it up:

This is my boilerplate ripped straight from a private project that starts with and 'M' and rhymes with 'blinded'. I'm making this repo for my own learning about how to put together an app brick-by-brick. First step is to copy, and strip out any bits I don't need. Next step is to add in the bits I really want.

## Package: [Chalk](https://github.com/chalk/chalk)
<details>

### Component(s): `chalk`
### Usage:
Using chalk to colour the console messages in my server-side code so it looks more excellent.

</details>
<hr/>

## Package: [Eslint-airbnb config](https://github.com/airbnb/javascript)
<details>

### Script(s): `./node_modules/.bin/eslint --fix-dry-run ./client/.`
### Usage:
The script above lives in my package.json. It checks all my client-side code and tells me where I have linting errors.
I run this command to install airbnb's eslint config locally :)
```bash
  (
    export PKG=eslint-config-airbnb;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
```

</details>
<hr/>

## Package: [node-postgres](https://github.com/brianc/node-postgres)
<details>

### Client: `pg`
### Usage:
Using a postgres database. Need this node-postgres module to give to knex so it has a js client to control postgres. I think that's how this works.

</details>
<hr/>

## Package: [react-router-config](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config)
<details>

### Component(s): `renderRoutes`
### Usage:
renderRoutes accepts an array of route objects and renders them. Alternative that I've used in the past is a dedicated custom h(Routes) component with react-router's Route component as children. This is cleaner - I guess?

</details>
<hr/>

## Package: [react-router-redux](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux)
<details>

### Component(s): `ConnectedRouter, routerMiddleware`
### Usage:
ConnectedRouter attaches a history object to redux state.
routerMiddleware is an item in the middleware array applied in creating the redux store. I assume it plays a part in receiving info from the connected router and putting it into the store but idk lol.

</details>
<hr/>

## Package: [webpack](https://github.com/webpack/webpack)
<details>

<details>

### Script(s): `webpack --watch --mode development`
### Usage:
This script bundles my client code and saves it in a file called bundle.js (imaginative I know). I then have a script tag on my html template page that asks for the bundle's contents and that's how my client-code gets into the html document.

</details>
<hr/>

## Package: [webpack-cli]()
<details>

### Script(s): `?_?`
### Usage:
Not sure, seems to be required to make use of the main webpack package. I tried to remove it thinking it wasn't needed but then everything broke.

</details>
<hr/>

## Package: [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
<details>

### Script: `webpack-dev-server`
### Usage:
well in theory I would use this script to bundle my client-side code during development, but it doesn't seem to rebuild my bundle. So I just use the regular webpack script.

</details>
<hr/>

Template:
```md
## Package: []()
<details>

### Component(s): ``
### Usage:

</details>
<hr/>
```


webpack / webpack-cli / webpack-dev-server

babel:  loader / polyfill / core / preset-env

eslint: airbnb

react - react dom are just to let me use react framework

react-hyperscript I use this because I need to feel superior than the masses who use JSX, it's important for my ego

fela /react-fela -> smart styles written in js

@feathersjs: feathers / express / knex

history - another steal from mindy, used with connectedrouter from react-router-redux

cors
winston
helmet -> these three are ripped straight from mindy stack.

node-dev -> hot reloader

mindy STRUCTURE: //
  - reducers use { handleActions } from 'redux-actions'
  - createStructuredSelector from 'reselect'


TODOS: //
- document dependencies
- set up structured selectors for state / props
- I dont have any setup for a database, is that a problem...
  -> if I could set up PG that would be good learning
- add picture / gif, every good readme needs one
- hide / show on package description