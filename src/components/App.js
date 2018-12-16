import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from './Header';
import Footer from './Footer';
import List from './List';
import Top from './Top';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div>
        <Header list="3 Terbaik-" />
        <Top />
        <Main />
        <List />
        <Footer nama="Masakan Nusantara" tahun="2018" />
      </div>
    );
  }
}

export default App;
