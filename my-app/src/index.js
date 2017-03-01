

var React = require('react'),
    ReactDOM = require('react-dom'),
    App = require('./App/index.js'),
    Todo = require('./to-do/index');

require('./index.css');


ReactDOM.render(
  <Todo />,
  document.getElementById('root')
);

