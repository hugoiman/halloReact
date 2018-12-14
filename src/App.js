import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from './Header';

const Footer = () => {
  return (
    <div>
      <h4>Halaman Footer</h4>
      <p>@2018</p>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Rendering Elements</h1>
        <Footer />
      </div>
    );
  }
}

export default App;
