import React, { Component } from 'react';

class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      title: "Menu Makanan",
      title2: "Menu Minuman"
    };
    this.rubahData = this.rubahData.bind(this);
  }

  // Function untuk mengubah state: 2 cara
  // rubahData(){
  //   this.setState({title: "Pilih Makanan"});
  // }

  //  Disarankan menggunakan ini
  rubahData(){
    this.setState((state, props) => { //  (state, props) digunakan jika value yang diambil dari state/props
      return {
        title : "Pilih Menu Makanan",
        title2 : this.state.title
      };
    });
  }

  render() {
    return (
      <div>
        <h3>{this.state.title}</h3>
        <h2>{this.state.title2}</h2>
        <button onClick={this.rubahData}>
          Rubah data
        </button>
      </div>
    );
  }
}

export default Main;
