//Data array
let produkToko = [
  { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
  { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
  { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

//Fungsi tambah produk
function tambahProduk(nama, harga, stok) {
  let idBaru = produkToko.length + 1;
  produkToko.push({
    id: idBaru,
    nama: nama,
    harga: harga,
    stok: stok
  });
  console.log(`Produk ${nama} berhasil ditambahkan!`);
}

//Fungsi menghapus produk
function hapusProduk(id) {
  produkToko = produkToko.filter(function(item) {
    return item.id !== id;
  });
  console.log(`Produk dengan ID ${id} berhasil dihapus.`);
}

//Fungsi tampilin produk
function tampilkanProduk() {
  console.log("DAFTAR PRODUK TOKO");
  produkToko.forEach(function(item) {
    console.log(`ID: ${item.id}, Nama: ${item.nama}, Harga: Rp${item.harga}, Stok: ${item.stok}`);
  });
}

//tapilin produk awal
tampilkanProduk();

console.log("\nMenambahkan Produk Baru");
tambahProduk("Monitor", 1500000, 4);

//Menampilkan produk yang udah di tambah
tampilkanProduk();

console.log("\nMenghapus Produk");
hapusProduk(2);

//Menampilkan produk yang sudah di apus
tampilkanProduk();