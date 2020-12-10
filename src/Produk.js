import React, { Component } from 'react';

class Produk extends Component {
    render() {

        const { namaProduk, harga, stok } = this.props

        return (
            <div className='kotak'>
                <p>Nama Produk: {namaProduk}</p>
                <p>Harga: {harga}</p>
                <p>Stok: {stok}</p>
            </div>
        )
    }
}

export default Produk;