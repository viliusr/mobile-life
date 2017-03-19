const React = require('react');

// Material UI
const mui = require('material-ui')
const RadioButton = mui.RadioButton
const RadioButtonGroup = mui.RadioButtonGroup

const styles = {
  radioButton: {
    marginBottom: 16
  },
  padding: {
    padding: '0 20px'
  }
};

class Question extends React.Component {

  render() {

    const question = this.props.data;

    return (
      <div style={styles.padding}>
        <h2>{question.text}</h2>
        <RadioButtonGroup name={"question" + question.id} onChange={(event, value) => question.selectedAnswer = value}>
          {question.answers.map((item) => 
            <RadioButton value={item.id} key={item.id} label={item.text} style={styles.radioButton} />
          )}
        </RadioButtonGroup>
      </div>
    )
  }

}

Question.propTypes = {
  question: React.PropTypes.object
};

module.exports = Question;