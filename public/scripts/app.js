"use strict";

console.log("App.js is running");

// create app object title/subtitle
// user title/subtitle in the template
// render template

// const title = {
//   title: 'Indecision App',
//   subtitle: 'Subtitle'
// }

// const template = (
//   <div> 
//     <h1 id="someid">{title.title}</h1> 
//     <p>{title.subtitle}</p>
//   </div>
// );

// Create a template a new JSX expression
// root div
//    h1 = Name
//    p = Age: 35
//    p = Location: Toronto
// Render template 2

// const user = {
//   name: 'Andrew',
//   age: 35,
//   location: 'Toronto'
// }

// const userName = 'Andrew Zapotochnyi';
// const userAge = 35;
// const userLocation = "Toronto"

// const getFirstName = (name) => name.split(' ')[0];

// if (userName) {
//   getFirstName(userName);
// }

// const template2 = (
//   <div>
//     <h1>{getFirstName(userName)}</h1>
//     <p>Age: {user.age}</p>
//     <p>Location: {user.location}</p>

//   </div>
// );

var count = 0;
var addOne = function addOne() {
  // console.log("addOne");
  count++;
  renderCounterApp();
};

var minusOne = function minusOne() {
  // console.log("minusOne");
  count--;
  renderCounterApp();
};

var reset = function reset() {
  // console.log("reset");
  count = 0;
  renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Count ",
      count
    ),
    React.createElement(
      "button",
      { onClick: addOne },
      "+1"
    ),
    React.createElement(
      "button",
      { onClick: minusOne },
      "-1"
    ),
    React.createElement(
      "button",
      { onClick: reset },
      "reset"
    )
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();

// const multiplier = {
//   // array of numbers
//   numbers: [1, 2, 3, 4, 5],
//   // multiplyBy
//   multiplyBy: 100,
//   // multiply 
//   multiply() {
//     return this.numbers.map((num) => this.multiplyBy * num);
//   }
// }

// console.log(multiplier.multiply());
