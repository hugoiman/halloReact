import React from "react";

const Top = () => {

  // const handlePesan = () => {
  function handlePesan() {
    alert("Halaman Top Tampil")
  }

  return (
    <a href="/" onClick={handlePesan}>
      Halaman Top
    </a>
  );
}

export default Top;
