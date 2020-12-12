import React from 'react'; // cukup import React

const Produk = ({ produkProduk }) => {

    // const { produkProduk } = props 
    // langsugn akses ke produkProduk, tanpa perlu ditampung dulu ke variable props
    // hasil sama, hanya penulisan code lebih singkat

    // bekerja dengan react akan banyak menggunakan kombinasi dari container component dan ui (fungsioinal) component

    const listProduk = produkProduk.map(produk => {

        if (produk.stok > 30) {
            return (
                <div className="card kotak">
                    <div className='card-body' key={produk.id} >
                        <h5 className='card-title' >Nama Produk: {produk.namaProduk}</h5>
                        <p>Harga: {produk.harga}</p>
                        <p>Stok: {produk.stok}</p>
                    </div>
                </div>
            )
        } else {
            return null;
        }

    })

    return (
        <div>
            {listProduk}
        </div>
    )
}

export default Produk;