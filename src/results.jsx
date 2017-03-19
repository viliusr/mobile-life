const React = require('react')
const Grid = require('react-grid-system')
const Row = Grid.Row
const Col = Grid.Col

// Material UI
const mui = require('material-ui')
const RaisedButton = mui.RaisedButton

const styles = {
  padding: {
    padding: 20
  },
  message: {
    margin: '4px 0',
    fontSize: 24
  },
  button: {
    textAlign: 'right'
  }
}

let allowToCheck = false;

class Results extends React.Component {

  check() {
    let data = {};

    this.props.toggleQuestionsAvailability()

    this.props.questions.forEach(question => {
      data[question.id] = question.selectedAnswer
    })

    this.props.checker(data)
  }

  reset() {
    // Get new questions
    this.props.updater().then(() => { 
      this.props.toggleQuestionsAvailability() 
    })
  }

  render() {
    return (
      <div style={styles.padding}>
        <Row>
          {this.props.resultsStatus !== null ? 
            this.props.resultsStatus ?
              <Col sm={8} style={styles.message}>Son, come to the dark side</Col>
              :
              <div>
                <Col sm={8} style={styles.message}>You shall not pass</Col>
                <Col sm={4} style={styles.button}>
                  <RaisedButton label='Try again' onClick={() => this.reset()} />
                </Col>
              </div>
            :
            <Col sm={12} style={styles.button}>
              <RaisedButton label='Check results' secondary={true} onClick={() => this.check()} />
            </Col>
          }
        </Row>
      </div>
    )
  }

}

Results.propTypes = {
  questions: React.PropTypes.array,
  updater: React.PropTypes.func,
  checker: React.PropTypes.func,
  toggleQuestionsAvailability: React.PropTypes.func,
  resultsStatus: React.PropTypes.bool
}

module.exports = Results