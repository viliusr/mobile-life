const React = require('react');
const api = require('./api');

// Material UI
const mui = require('material-ui');
const RaisedButton = mui.RaisedButton;

class Results extends React.Component {

  constructor() {
    super(),
    this.state = { results: null }
  }

  check() {
    let data = {};

    this.props.questions.forEach(question => {
      data[question.id] = question.selectedAnswer
    })

    api.getResults(data).then(results => {
      this.setState({ results: results.status })
    })
  }

  reset() {
    // Get new questions
    this.props.updater().then(() => this.setState({ results: null }))
  }

  render() {
    return (
      <div>
        {this.state.results !== null ? 
          <div>
            {this.state.results ?
              <span>Woo hoo!, everything is correct, now get to work</span>
              :
              <div>
                <span>Nope, you can try again, or maybe go home</span>
                <button onClick={() => this.reset()}>Try again</button>
              </div>
            }
          </div> 
          : 
          <RaisedButton label="Check results" primary={true} onClick={() => this.check()} />
        }
      </div>
    )
  }

}

Results.propTypes = {
  questions: React.PropTypes.array,
  updater: React.PropTypes.func
};

module.exports = Results;