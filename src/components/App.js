import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from './Header';
import Footer from './Footer';
import List from './List';
import Top from './Top';

class App extends Component {
  render() {
    return (
      <div>
        <Header list="3 Terbaik-" />
        <Top />
        <List />
        <Footer nama="Masakan Nusantara" tahun="2018" />
      </div>
    );
  }
}

export default App;
