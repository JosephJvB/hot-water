import h from 'react-hyperscript'
import { connect } from 'react-redux'

const mapStateToProps = state => ({ state })

export default connect(mapStateToProps)((props) => {
	console.log('weeelcome hooome', props)
	return h('h1', 'weeeeeelcome hooome')
})

