import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'

import reducers from '../reducers'

export default (history) => {

	const middleware = [
		thunk,
		routerMiddleware(history)
	]

	return createStore(
		reducers, // combined-reducers goes here
		compose(
			applyMiddleware(...middleware),
			window.__REDUX_DEVTOOLS_EXTENSION__
				? window.__REDUX_DEVTOOLS_EXTENSION__()
				: store => store
		)
	)

}
