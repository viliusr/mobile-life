const React = require('react');

class Question extends React.Component {

  render() {

    const question = this.props.data;

    return (
      <div>
        <h2 className="question-title">{question.title}</h2>
        <div className="question-answers">
          {question.answers.map((item, index) => 
            <div key={index} className="question-answer">
              <input type="radio" name={question.title} onChange={() => question.selectedAnswer = index} /> {item}
            </div>
          )}
        </div>
      </div>
    )
  }

}

module.exports = Question;