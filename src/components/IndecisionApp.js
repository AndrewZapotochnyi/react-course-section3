import React from 'react';
import ReactDOM from 'react-dom';

import AddOption from './AddOption';
import Option from './Option';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';


// stateless functional component

export default class IndecisionApp extends React.Component {

  state = {
    options: [],
    selectedOption: undefined
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  }

  handleOptionModalClose = () => {
    this.setState(() => ({ selectedOption: undefined }));
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    
    this.setState(() => ({
     selectedOption: option
    }));
  }

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
  }
  

  componentDidMount() {
    console.log("Component did mounts")
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component did update")
  }

  componentWillUnmount() {
    console.log("Component will unmount")
  }

  
  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption
            handleAddOption={this.handleAddOption}
          />
          <OptionModal 
          selectedOption={this.state.selectedOption}
          handleOptionModalClose={this.handleOptionModalClose}
          />
        </div>
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

Header.defaultProps = {
  title: 'Indecision'
};