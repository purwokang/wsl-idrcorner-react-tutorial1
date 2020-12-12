import React from 'react'; // cukup import React

const Produk = ({ produkProduk }) => {

    const listProduk = produkProduk.map(produk => {

        const list = produk.stok > 30 ? (
            <div className="card kotak">
                <div className='card-body' key={produk.id} >
                    <h5 className='card-title' >Nama Produk: {produk.namaProduk}</h5>
                    <p>Harga: {produk.harga}</p>
                    <p>Stok: {produk.stok}</p>
                </div>
            </div>
        ) : (
                null
            )
        return list
    })

    return (
        <div>
            {listProduk}
        </div>
    )
}

export default Produk;