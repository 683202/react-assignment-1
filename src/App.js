import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {
  state = {
    userName: 'Ramoo Kaka BKL'
  };

  changeUserNameHandler = (event) => {
    this.setState({
      userName: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <UserInput change = { this.changeUserNameHandler }></UserInput>
        <UserOutput name = { this.state.userName } defaultName = { this.state.userName }></UserOutput>
      </div>
    );
  }
}

export default App;
