//Buat class Pelanggan dengan properti nama, nomorTelepon, dan kendaraanDisewa
class Pelanggan {
  constructor(nama, nomorTelepon) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = null; //awal beum sewa
  }

  //Tambahkan metode untuk mencatat transaksi penyewaan kendaraan oleh pelanggan
  sewaKendaraan(namaKendaraan) {
    this.kendaraanDisewa = namaKendaraan;
    console.log(`[Tansaksi Sukses] ${this.nama} menyewa ${namaKendaraan}`);
  }
}

//Buat sistem yang menampilkan daftar pelanggan yang sedang menyewa kendaraan
class SistemTransportasi {
  constructor() {
    this.daftarPelanggan = [];
  }

  //Method untuk menambahkan pelanggan ke dalam sistem
  tambahPelanggan(pelanggan) {
    this.daftarPelanggan.push(pelanggan);
  }

  //Method untuk menampilkan daftar pelanggan yang sedang menyewa kendaraan
  tampilkanDafftarPenyewa() {
    console.log("Daftar Pelanggan Yang Sedang Menyewa Kendaraan ");

    this.daftarPelanggan.forEach(function (pelanggan) {
      //Menampilkan pelanggan yang kendaraanDisewa
      if (pelanggan.kendaraanDisewa !== null) {
        console.log(`Nama            : ${pelanggan.nama}`);
        console.log(`Nomor Telepon   : ${pelanggan.nomorTelepon}`);
        console.log(`Kendaraan Sewa  : ${pelanggan.kendaraanDisewa}`);
        console.log("");
      }
    });
  }
}

//Inisialisasi
let sistem = new SistemTransportasi();

//Membuat Objek Pelanggan
let pelanggan1 = new Pelanggan("Faisa Alfarel", "081234567890");
let pelanggan2 = new Pelanggan("Zaidan Salman Safiq", "089876543210");
let pelanggan3 = new Pelanggan("Muflih ", "085511223344");


sistem.tambahPelanggan(pelanggan1);
sistem.tambahPelanggan(pelanggan2);
sistem.tambahPelanggan(pelanggan3);

//Pelanggan Mencatat Transaksi Penyewaan
pelanggan1.sewaKendaraan("Mobil Toyota Avanza");
pelanggan2.sewaKendaraan("Motor Honda Vario");

//pelanggan3 tidak menyewa kendaraan

//Menampilkan Daftar Pelanggan Yang Sedang Menyewa
sistem.tampilkanDafftarPenyewa();