const React = require('react');
const Question = require('./question');
const Results = require('./results');

class Main extends React.Component {

  constructor() {
    super(),
    this.state = {
      questions: null
    }
  }

  componentWillMount() {
    this.props.api.getQuestions().then(questions => {
      this.setState({ questions })
    })
  }

  render() {
    return ( 
      <div>
        <h1>Quiz</h1>
        {this.state.questions ? 
          this.state.questions.map(question =>
            <Question data={question} />
          ) : <div>Loading</div>
        }
        <Results questions={this.state.questions} />
      </div>
    )
  }

}

Main.propTypes = {
  api: React.PropTypes.object.isRequired
}

module.exports = Main;