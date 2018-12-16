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

  handlePesan(value, e){
    e.preventDefault(); // agar tidak refresh, maka sisipkan 'e' di param
    alert(this.state.daftar);
    alert(value);
  }

  render(){
    return(
      <div>
        <h2>Makanan Khas Indonesia</h2>
        <p>{this.state.daftar}</p>
        <p>{this.state.dataList}</p>
        <a href="/" onClick={e => this.handlePesan("Pesan dari Header", e)}>
          Halaman Header
        </a>
      </div>
      // <a href="/" onClick={() => this.handlePesan("Pesan dari Header")}>
      //   Halaman Header
      // </a>
    )
  }
}

export default Header;
