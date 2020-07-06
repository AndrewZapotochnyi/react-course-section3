'use strict';

console.log("App.js is running");

// create app object title/subtitle
// user title/subtitle in the template
// render template

var title = {
  title: 'Indecision App',
  subtitle: 'Subtitle'
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    { id: 'someid' },
    title.title
  ),
  React.createElement(
    'p',
    null,
    title.subtitle
  )
);

// Create a template a new JSX expression
// root div
//    h1 = Name
//    p = Age: 35
//    p = Location: Toronto
// Render template 2

var user = {
  name: 'Andrew',
  age: 35,
  location: 'Toronto'
};

var userName = 'Andrew Zapotochnyi';
var userAge = 35;
var userLocation = "Toronto";

var getFirstName = function getFirstName(name) {
  return name.split(' ')[0];
};

if (userName) {
  getFirstName(userName);
}

var template2 = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    getFirstName(userName)
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    user.location
  )
);

var appRoot = document.getElementById('app');

var multiplier = {
  // array of numbers
  numbers: [1, 2, 3, 4, 5],
  // multiplyBy
  multiplyBy: 100,
  // multiply 
  multiply: function multiply() {
    var _this = this;

    return this.numbers.map(function (num) {
      return _this.multiplyBy * num;
    });
  }
};

console.log(multiplier.multiply());

ReactDOM.render(template2, appRoot);
