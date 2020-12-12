// import React, { Component } from 'react'; 
import React from 'react'; // cukup import React

// class Produk extends Component {
const Produk = (props) => { //diganti dengan fungsional/ui component
    // render() {   // baris render tidak diperlukan lagi

    // const { produkProduk } = this.props
    const { produkProduk } = props // this tidak diperlukan lagi karena langsung akses props

    const listProduk = produkProduk.map(produk => {
        return (
            <div className='kotak' key={produk.id} >
                <p>Nama Produk: {produk.namaProduk}</p>
                <p>Harga: {produk.harga}</p>
                <p>Stok: {produk.stok}</p>
            </div>
        )
    })

    return (
        <div>
            {listProduk}
        </div>
    )
    // } // kurung kurawal penutup baris render
}

export default Produk;