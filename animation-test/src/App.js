import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Router } from "@reach/router";
// import { TransitionGroup, Transition } from "react-transition-group";
import Home from "./Components/home";
import About from "./Components/about";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>Actual Navigation Links</p>
        <nav>
          <Link to="/">Home</Link> <Link to="about">About</Link>
        </nav>
        <Router>
          <Home path="/" />
          <Home path="/listing" />
          <About path="/about" />
          <About path="/first" />
          <About path="/second" />
          <About path="/third" />
        </Router>
      </div>
    );
  }
}

export default App;
