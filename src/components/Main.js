import React, { Component } from 'react';

class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      title: "Menu Makanan",
      title2: "Menu Minuman",
      inputValue: "Nasi Padang"
    };
    this.rubahData = this.rubahData.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  handleChange(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <div>
        <h3>{this.state.title}</h3>
        <h2>{this.state.title2}</h2>
        <button onClick={this.rubahData}>
          Rubah data
        </button>
        <br/><br/>
        <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
      </div>
    );
  }
}

export default Main;
