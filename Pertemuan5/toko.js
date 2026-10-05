//Data Produk
let produkList = [
    { id: 1, nama: "Laptop", harga: 12999999 },
    { id: 2, nama: "Smartphone", harga: 5699999 },
    { id: 3, nama: "Smartwatch", harga: 1499999 },
    { id: 4, nama: "Headphone", harga: 499999 },
    { id: 5, nama: "Keyboard Mechanical", harga: 299999 }
]; //minimal 5 data produk

//nama fungsi
const eventHandler = {
    onAction: (pesan) => console.log(`Event: ${pesan}`)
};

//Menambahkan Produk dengan Spread Operator
function tambahProduk(id, nama, harga) {
    const produkBaru = { id, nama, harga };
    produkList = [...produkList, produkBaru]; 
    eventHandler.onAction(`Produk '${nama}' berhasil ditambahkan.`);
}

//Menghapus Produk dengan Rest Parameter
function hapusProduk(...ids) {
    produkList = produkList.filter(produk => !ids.includes(produk.id));
    eventHandler.onAction(`Proses hapus produk dengan id ${ids.join(", ")} selesai.`);
}

//Menampilkan Produk dengan Destructuring
function tampilkanProduk() {
    console.log("Daftar Produk Sekarang");
    produkList.forEach(produk => {
        const { id, nama, harga } = produk; 
        console.log(`${id} ${nama} dengan Harga : Rp ${harga.toLocaleString('id-ID')}`);
    });
    console.log("");
}

//Menampilkan Produk Awal
tampilkanProduk();

//contoh penambahan data
tambahProduk(6, "Tablet", 6299999);
tampilkanProduk();

//contoh penghapusan data
hapusProduk(4);
tampilkanProduk();