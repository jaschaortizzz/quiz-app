import {connect} from 'react-redux'
import QuestionItem from './questionItem'

const mapStateProps = ({questions, user: {user}}) => ({
  user,
  questions,
})

export default connect(mapStateProps, null)(QuestionItem);