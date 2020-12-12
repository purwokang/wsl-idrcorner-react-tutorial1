import React from 'react';

const Produk = ({ produkProduk }) => {


    const listProduk = produkProduk.map(produk => {

        let minstok = produk.stok <= 30 ? ('minstok') : (null)

        return (
            <div className="card kotak">
                <div className={minstok + ' card-body'} key={produk.id} >
                    <h5 className='card-title' >Nama Produk: {produk.namaProduk}</h5>
                    <p>Harga: {produk.harga}</p>
                    <p>Stok: {produk.stok}</p>
                </div>
            </div>
        )


    })

    return (
        <div>
            {listProduk}
        </div>
    )
}

export default Produk;