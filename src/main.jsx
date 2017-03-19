const React = require('react')
const api = require('./api')
const Question = require('./question')
const Results = require('./results')

// Material UI
const mui = require('material-ui')
const Paper = mui.Paper
const AppBar = mui.AppBar
const CircularProgress = mui.CircularProgress

const style = {
  maxWidth: 600,
  margin: '0 auto'
}

class Main extends React.Component {

  constructor() {
    super(),
    this.state = {
      questions: null
    }
    this.getQuestions = this.getQuestions.bind(this);
  }

  getQuestions() {
    return api.getQuestions().then(questions => {
      this.setState({ questions })
    })
  }

  componentWillMount() {
    this.getQuestions()
  }

  render() {
    return ( 
      <Paper style={style} zDepth={3}>
        <AppBar title="Quiz" iconElementLeft={false} />
        {this.state.questions ? 
          this.state.questions.map(question =>
            <Question key={question.id} data={question} />
          ) : <CircularProgress size={80} thickness={5} />
        }
        <Results questions={this.state.questions} updater={this.getQuestions} />
      </Paper>
    )
  }

}

module.exports = Main;