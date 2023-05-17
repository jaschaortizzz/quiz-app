import { connect } from 'react-redux'
import Menu from './menu'
import { loadUserAction } from '../../actions/questionActions';


const mapDispatchToProps = dispatch => ({
  loadUser: data => loadUserAction(data)(dispatch),
});

const mapStateToProps = ({ user: {user}}) => ({
  user,
})

export default connect(mapStateToProps,mapDispatchToProps)(Menu);