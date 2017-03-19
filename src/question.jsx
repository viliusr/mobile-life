const React = require('react');

class Question extends React.Component {

  render() {

    const question = this.props.data;

    return (
      <div>
        <h2 className="question-text">{question.text}</h2>
        <div className="question-answers">
          {question.answers.map((item) => 
            <div key={item.id} className="question-answer">
              <input type="radio" name={question.id} onChange={() => question.selectedAnswer = item.id} /> {item.text}
            </div>
          )}
        </div>
      </div>
    )
  }

}

Question.propTypes = {
  question: React.PropTypes.object
};

module.exports = Question;