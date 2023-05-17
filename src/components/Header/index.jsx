import {connect} from 'react-redux'
import Header from './header'

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch({ type: 'LOGOUT'}),
});

export default connect(null,mapDispatchToProps)(Header);