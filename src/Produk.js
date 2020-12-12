import React from 'react'; // cukup import React

const Produk = ({ produkProduk }) => {

    // const { produkProduk } = props 
    // langsugn akses ke produkProduk, tanpa perlu ditampung dulu ke variable props
    // hasil sama, hanya penulisan code lebih singkat

    // bekerja dengan react akan banyak menggunakan kombinasi dari container component dan ui (fungsioinal) component

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

export default Produk;