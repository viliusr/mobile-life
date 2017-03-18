const React = require('react');
const ReactDOM = require('react-dom');
const Main = require('./main');
const api = require('./api');


ReactDOM.render(<Main api={api} />, document.getElementById('root'));