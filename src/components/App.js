import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from './Header';
import Footer from './Footer';
import List from './List';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <List />
        <Footer />
      </div>
    );
  }
}

export default App;
