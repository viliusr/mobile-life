const React = require('react')
const ReactDOM = require('react-dom')
const api = require('./api')
const Main = require('./main')
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <Main api={api} />
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'))