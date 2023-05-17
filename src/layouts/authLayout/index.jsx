import { connect } from 'react-redux';
import AuthLayout from './authLayout';

const mapStateToProps = ({ user: { user } }) => ({ user });

export default connect(mapStateToProps)(AuthLayout)