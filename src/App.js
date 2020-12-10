import React, { Component } from 'react'
import Produk from './Produk'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hallo Aplikasi React Perdanaku</h1>
        <Produk namaProduk='LCD' harga='1200000' stok='5' />
        <br />
        <Produk namaProduk='Keyboard' harga='130000' stok='200' />
        <br />
        <Produk namaProduk='Mic' harga='300000' stok='20' />
        <br />
      </div>
    )
  }
}

export default App;