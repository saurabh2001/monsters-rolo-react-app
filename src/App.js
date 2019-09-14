import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      name: 'saurabh'
    };

  }
alertMessage(){
  console.log(this.state);
}

  render() {
    return (

      <div className='App'>
        <img src={logo} className='App-logo' alt='alternet text for'></img>
        <p>{this.state.name}</p>
        <button onClick={() => this.setState({name:'sauu'})}> Update the state</button> 
        <br></br>
        <button onClick={() => this.alertMessage()}> Print to console</button> 
      </div >
    )
  }
}



export default App;
