console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const onFormSubmit = (event) => {
  event.preventDefault();

  const option = event.target.elements.option.value;

  if (option) {
    app.options.push(option);
    event.target.elements.option.value = "";
    renderFunction();
  }

}

const onRemoveAll = () => {
  app.options = [];
  renderFunction();
}

const appRoot = document.getElementById('app');



const renderFunction = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>

      <ol>
        {app.options.map((option) => <li key={option}>{option}</li>)}
      </ol>
  
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>

      <button onClick={onRemoveAll}>Remove All</button>
    </div>
  );

  ReactDOM.render(template, appRoot);

};

renderFunction();




