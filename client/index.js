import { render } from 'react-dom'
import h from 'react-hyperscript'

import App from './app'

document.addEventListener('DOMContentLoaded', () => {

	render(
		h(App),
		document.getElementById('app'),
	)

})
