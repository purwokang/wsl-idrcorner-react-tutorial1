import React, { Component } from 'react'
import Produk from './Produk'
import Style from './Style.module.css'

class App extends Component {

  state = {
    produk: [
      { id: 1, namaProduk: 'Headset', harga: 100000, stok: 30 },
      { id: 2, namaProduk: 'MIC', harga: 450000, stok: 5 },
      { id: 3, namaProduk: 'Keyboard Ex', harga: 30000, stok: 300 },
      { id: 4, namaProduk: 'Printer', harga: 400000, stok: 15 },
      { id: 5, namaProduk: 'Hardisk', harga: 1600000, stok: 100 },
      { id: 6, namaProduk: 'Mini Flashdisk', harga: 150000, stok: 40 },
      { id: 7, namaProduk: 'RAM 4 GB', harga: 800000, stok: 2 }
    ]
  }

  render() {

    const heading1 = {
      color: 'red'
    }

    return (
      <div>
        <h1 style={heading1}>Hallo Aplikasi React Pertamax</h1>

        <p className={Style.judul}>Daftar Produk</p>

        <Produk produkProduk={this.state.produk} />
      </div>
    )
  }
}

export default App;