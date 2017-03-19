const React = require('react');
const Grid = require('react-grid-system');
const Row = Grid.Row;
const Col = Grid.Col;
const api = require('./api');

// Material UI
const mui = require('material-ui');
const RaisedButton = mui.RaisedButton;

const styles = {
  padding: {
    padding: 20
  },
  message: {
    margin: '4px 0',
    fontSize: 24
  }
};

let allowToCheck = false;

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
      <div style={styles.padding}>
        <Row>
          {this.state.results !== null ? 
            this.state.results ?
              <Col sm={8} style={styles.message}>OK, come to other side</Col>
              :
              <div>
                <Col sm={8} style={styles.message}>You shall not pass</Col>
                <Col sm={4} style={{ textAlign: "right" }}>
                  <RaisedButton label="Try again" onClick={() => this.reset()} />
                </Col>
              </div>
            :
            <Col sm={12} style={{ textAlign: "right" }}>
              <RaisedButton label="Check results" secondary={true} onClick={() => this.check()} />
            </Col>
          }
        </Row>
      </div>
    )
  }

}

Results.propTypes = {
  questions: React.PropTypes.array,
  updater: React.PropTypes.func
};

module.exports = Results;