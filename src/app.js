console.log("App.js is running")

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

let count = 0;
const addOne = () => {
  console.log("addOne");
}

const minusOne = () => {
  console.log("minusOne");
}

const templateTwo = (
  <div>
    <h1>Count {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
  </div>
)


const appRoot = document.getElementById('app');

const multiplier = {
  // array of numbers
  numbers: [1, 2, 3, 4, 5],
  // multiplyBy
  multiplyBy: 100,
  // multiply 
  multiply() {
    return this.numbers.map((num) => this.multiplyBy * num);
  }
}

console.log(multiplier.multiply());

ReactDOM.render(templateTwo, appRoot);