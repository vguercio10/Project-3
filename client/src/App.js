import React, { Component } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  //function that runs when login form submitted
  handleSubmit = e => { 
    console.log("testing submit");
    axios.post("/client/api/login").then(response => {
      console.log(response);
      // function that will run any errors
    }).catch(error => {
      console.log(error);
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          hi.

        {/* sign up form */}
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="email" placeholder="Email Address" name="email"></input>
          <input type="password" placeholder="password" name="password"></input>
        </form>
        <button onClick={e => this.handleSubmit(e)}>Submit</button>
        




        </p>
      </div>
    );
  }
}

export default App;

