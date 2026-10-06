// main.js
import { index, store, destroy } from "./controller.js";

const main = () => {
    console.log("TAMPILKAN DATA AWAL");
    index();

    console.log("TAMBAH DUA DATA BARU");
    store({ nama: 'bintang', umur: 30, alamat: 'Jl. depok', email: 'bintanglangit@gmail.com' });
    store({ nama: 'azmi', umur: 31, alamat: 'Jl. depok sawangan', email: 'azmi@gmail.com' });

    console.log("\nTAMPILKAN DATA SETELAH DITAMBAHKAN");
    index();

    console.log("HAPUS DATA");
    destroy();

    console.log("\nTAMPILKAN DATA SETELAH DIHAPUS");
    index();
};

main();