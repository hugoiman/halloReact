import React, {Component} from 'react';

// Penulisan alternatif
// import React from 'react'; maka class harus ditulis
// class Header extends React.Component{

class Header extends Component{

  // Menulis State yg berada di dalam construsctor
  constructor(props) {
    super(props);
    this.state = {
      /*nama state = daftar*/ daftar : "Daftar Makanan Nusantara",
      dataList : this.props.list
    };
    //  wajib menuliskan jika terdapat hadling event berasal dari state/props
    this.handlePesan = this.handlePesan.bind(this);
  }

  handlePesan(){
    alert(this.state.daftar);
  }

  render(){
    return(
      <div>
        <h2>Makanan Khas Indonesia</h2>
        <p>{this.state.daftar}</p>
        <p>{this.state.dataList}</p>
        <a href="/" onClick={this.handlePesan}>
          Halaman Header
          </a>
      </div>
    )
  }
}

export default Header;
