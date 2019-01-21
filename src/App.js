import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={value:"hello "};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
      this.setState({value: event.target.value});
  }
  render() {
    var value = this.state.value;
    return (
      <div className="App">
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <h1>{value}</h1>
      </div>
    );
  }
}

export default App;
