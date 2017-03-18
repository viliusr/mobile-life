const React = require('react');

class Results extends React.Component {

  submit() {
    this.props.api.getResults().then(results => {
      this.setState({results})
    })
  }

  reset() {
    
  }

  render() {
    return (
      <div>
        <span>Nope, can try again, or maybe go home</span>
        <span>Woo hoo!, now get to work</span>
        <button onClick={() => this.submit()}>Check results</button>
        <button onClick={() => this.reset()}>Try again</button>
      </div>
    )
  }

}

Results.propTypes = {
  api: React.PropTypes.object.isRequired
}

module.exports = Results;