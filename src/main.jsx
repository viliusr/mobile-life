const React = require('react')
const Question = require('./question')
const Results = require('./results')

// Material UI
const mui = require('material-ui')
const Paper = mui.Paper
const AppBar = mui.AppBar
const CircularProgress = mui.CircularProgress
const Divider = mui.Divider

const style = {
  container: { 
    maxWidth: 600,
    margin: '0 auto'
  },
  containerDepth: 3,
  preLoaderWrapper: {
    textAlign: 'center',
    padding: 20
  },
  preLoader: {
    size: 100,
    thickness: 5
  }
}

class Main extends React.Component {

  constructor() {
    super()
    this.state = { questions: null, disableQuestions: false, resultsStatus: null }
    this.getQuestions = this.getQuestions.bind(this)
    this.checkResults = this.checkResults.bind(this)
    this.toggleQuestionsAvailability = this.toggleQuestionsAvailability.bind(this)
  }

  toggleQuestionsAvailability() {
    this.setState({ disableQuestions: !this.state.disableQuestions })
  }

  getQuestions() {
    return this.props.api.getQuestions().then(questions => {
      this.setState({ questions: null }) // To fully reset
      this.setState({ questions })
      this.setState({ resultsStatus: null })
    })
  }

  checkResults(data) {
    return this.props.api.getResults(data).then(results => { 
      this.setState({ resultsStatus: results.status })
    })
  }

  componentWillMount() {
    return this.getQuestions()
  }

  render() {
    return (
      <Paper style={style.container} zDepth={style.containerDepth}>
        <AppBar title='The Quiz' />
        {this.state.questions ? 
          this.state.questions.map(question =>
            <Question key={question.id} data={question} disabled={this.state.disableQuestions} />
          ) : <div style={style.preLoaderWrapper}>
                <CircularProgress size={style.preLoader.size} thickness={style.preLoader.thickness} />
              </div>
        }
        <Divider />
        <Results questions={this.state.questions} updater={this.getQuestions} checker={this.checkResults} resultsStatus={this.state.resultsStatus} toggleQuestionsAvailability={this.toggleQuestionsAvailability} />
      </Paper>
    )
  }

}

module.exports = Main