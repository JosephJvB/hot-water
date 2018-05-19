# Boiling it up:

This is my boilerplate ripped straight from a private project that starts with and 'M' and rhymes with 'blinded'. I'm making this repo for my own learning about how to put together an app brick-by-brick. First step is to copy, and strip out any bits I don't need. Next step is to add in the bits I really want.

## Package: [babel](https://github.com/babel/babel)
<details>

### Sub-packages: `babel-core, babel-loader, babel-polyfill, babel-preset-env`
### Usage:
sorry to say that I can't explain each babel-subpackage. I can say that babel's job is to take all my tricky ES6 syntax and convert it into older JS syntax so that every browser can read and understand it. Stuff like `import` fat-arrow functions, async/await and generator/yields. I played around in babels sandbox mode where it transpiles es6 and shows you the result. Todo: understand the babel building blocks.

</details>
<hr/>

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
.eslint config file. "Joe why did you use a .yml file?" Great question reader. I had never written anything in yaml format so I wanted to try it out. One stackoverflow comment said yaml supports comments. Another said json might have better performance. the more you know.
I use the config file to override airbrb's linting rules that I dont like.<br/>
I run this command to install airbnb's eslint config locally :)
```bash
  (
    export PKG=eslint-config-airbnb;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
```

</details>
<hr/>

## Package: [knex](https://github.com/tgriesser/knex)
<details>

### Config(s): `knexfile, migration builder`
### Usage:
Use knex as a javascript layer above SQL. Write JS, create SQL. Pretty neato. Comes with command line usage in creating / managing table migrations. Knexfile is config, db/migrations folder stores migration (queries?) if that's the right term

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
- GOTCHA: I found a bug with ConnectedRouter at version 4.0.8. It came in as undefined as you imported it from the package. For that reason I could recommend installing @5.0.0-alpha.9

</details>
<hr/>

## Package: [webpack](https://github.com/webpack/webpack)
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

## Package listing status

| DONE | TODO |
| ----- | ----- |
| babel<br>chalk<br>eslint<br>knex<br>pg<br>react-router-config<br>react-router-redux<br>webpack | react<br>react-hyperscript<br>fela/react-fela<br>feathersjs<br>history<br>cors<br>winston<br>helmet<br>node-dev<br> |

scrappy list of todos:
<details>

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

ripped straight from the getting started page: https://www.apollographql.com/docs/react/essentials/get-started.html

apollo-boost: Package containing everything you need to set up Apollo Client
react-apollo: View layer integration for React
graphql-tag: Necessary for parsing your GraphQL queries
graphql: Also parses your GraphQL queries


basic query
```js
import { Query } from 'react-apollo'
import gql from "graphql-tag";

h(Query, {
  query: {
    // idk why the backticks are messed up
    gql`{ rates(currency: "USD") { currency } }`
    }, [
      ({loading, error, data}) => { // stuff that comes back from query
      if(loading) return h('p', 'loading')
        if(error) return h('p', 'error :(')
      }
      return (
        h('div', {}, [
        //do something with data
      ])
      )
    ]) // end Query element here
```

Cool properties of Query element: https://www.apollographql.com/docs/react/essentials/queries.html
{
  query: callback to deal with load, error and data,
  variables: ?_?,
  skip: ?_? both probably alter the data request,
  pollInterval: force request for new data @ milliseconds. near realtime data,
  notifyOnNetworkStatusChange: puts networkStatus in the callback too
}

refetch comes out of the callback destructure ({loading, error, data, refetch}) => ...

</details>


TODOS: //
- document dependencies (IN PROG)
- reselect / recompose (getters, actions, state management and access)
- GraphQL
- Web workers
- add picture / gif, every good readme needs one
- learn how to describe an ORM

DONE: //
- set up PG db
- copy basic feathers