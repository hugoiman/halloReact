import React, { Component } from 'react';

class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      title: "Menu Makanan"
    };
    this.rubahData = this.rubahData.bind(this);
  }

  // Function untuk mengubah state
  rubahData(){
    this.setState({title: "Pilih Makanan"});
  }

  render() {
    return (
      <div>
        <h3>{this.state.title}</h3>
        <button onClick={this.rubahData}>
          Rubah data
        </button>
      </div>
    );
  }
}

export default Main;
