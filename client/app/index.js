import h from 'react-hyperscript'
import { createRenderer } from 'fela'
import { Provider as felaProvider, ThemeProvider as felaThemeProvider } from 'react-fela'
import { ConnectedRouter } from 'react-router-redux'
import { renderRoutes } from 'react-router-config'
import { Provider as reduxProvider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'

// NEW
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import routes from './routes'
import theme from './theme'
import { ConnectedSwitch, createStore } from './util'

const mountNode = document.getElementById('stylesheet')

const renderer = createRenderer({})
const history = createHistory()
const store = createStore(history)
const client = new ApolloClient({
	/* copied from example pupstagram for reference
	  uri: "https://dog-graphql-api.glitch.me/graphql",
	  	clientState: {
	  		defaults,
	  		resolvers
	  	}
	*/
})

export default () => (
	h(ApolloProvider, { client }, [
	// make redux store available
		h(reduxProvider, { store }, [
		// make fela styles available
			h(felaProvider, { renderer, mountNode }, [
			// makes theme avaliable
				h(felaThemeProvider, { theme }, [
				// router
					h(ConnectedRouter, { history }, [
					// switch
						h(ConnectedSwitch, [
						// renders routes
							renderRoutes(routes)
						])
					])
				])
			])
		])
	])
)
