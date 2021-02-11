import './App.css';
import React, { Component } from 'react';
import Input from './Components/Input'
import Main from './Components/Main'
class App extends Component {
  state = {}
  render() {
    return (
      <div className="App">
       <h1>Hello</h1> 
        <Input />
        <Main />
      </div>
    );
  }

}

export default App;
