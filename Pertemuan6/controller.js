import users from "./data.js";

const index = () => {
    console.log("Daftar User");
    users.map((user, i) => {
        console.log(`${i + 1}. Nama: ${user.nama} Umur: ${user.umur} Alamat: ${user.alamat} Email: ${user.email}`);
    });
    console.log("");
};

// Menambah data
const store = (user) => {
    users.push(user);
    console.log(`BERHASIL: Data '${user.nama}' berhasil ditambahkan.`);
};

// Menghapus data
const destroy = () => {
    if (users.length > 0) {
        const deletedUser = users.pop();
        console.log(`BERHASIL: Data '${deletedUser.nama}' berhasil dihapus.`);
    } else {
        console.log("GAGAL: Data kosong.");
    }
};

export { index, store, destroy };