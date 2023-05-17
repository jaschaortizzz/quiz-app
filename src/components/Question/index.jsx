import {connect} from 'react-redux'
import { loadQuestions, nextQuestionAction, prevQuestionAction, loadUserAction } from '../../actions/questionActions';
import Question from './question'

const mapDispatchToProps = dispatch => ({
  loadQuestions: () => loadQuestions()(dispatch),
  loadUser: data => loadUserAction(data)(dispatch),
  nextQuestion: data => nextQuestionAction(data)(dispatch),
  prevQuestion: data => prevQuestionAction(data)(dispatch),
});

const mapStateProps = ({ user: {user},questions, loading}) => ({
  user,
  questions,
  loading: loading.some(
    x => x.action === 'LOAD_QUESTIONS',
  ),
})

export default connect(mapStateProps,mapDispatchToProps)(Question)