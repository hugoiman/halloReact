import React from 'react';

//  Penulisan disarankan menggunakan cara ini
// const Footer = () => {
//   var nama = "Ogen"
//   return (
//     <div>
//       <h4>Halaman Footer {nama}</h4>
//       <p>@2018</p>
//     </div>
//   );
// };

//  Penulisan dengan Props
const Footer = props => {
  return (
    <div>
      <h4>Halaman Footer {props.nama}</h4>
      <p>@{props.tahun}</p>
    </div>
  );
};

//  Penulisan Function lain
// function Footer () {
//   return (
//     <div>
//       <h4>Halaman Footer</h4>
//       <p>@2018</p>
//     </div>
//   );
// };

export default Footer;
