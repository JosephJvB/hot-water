import { connect } from 'react-redux'
import { Switch } from 'react-router'

const mapStateToProps = state => ({ location: state.router.location })

export default connect(mapStateToProps)(Switch)
