import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class Header extends Component{
  render(){
    return(
      <div>
        <h2>Ini header</h2>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Rendering Elements</h1>
      </div>
    );
  }
}

export default App;
