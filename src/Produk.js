import React, { Component } from 'react';

class Produk extends Component {
    render() {

        const { produkProduk } = this.props
        // penulisan sama dengan ini:
        // const produkProduk = this.props.produkProduk;

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
    }
}

export default Produk;