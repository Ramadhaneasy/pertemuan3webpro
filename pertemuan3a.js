// Arrow function untuk penjumlahan
const tambah = (a, b) => {
    return a + b;
};

// Fungsi biasa untuk menghitung luas
function hitungluas(panjang, lebar) {
    const luas = panjang * lebar;
    return luas;
}

// Arrow function untuk menghitung luas
const hitungluas2 = (panjang, lebar) => {
    const luas = panjang * lebar;
    return luas;
};

// Pemanggilan fungsi dan menampilkan hasilnya
console.log(tambah(7, 3));            // Output: 10
console.log(hitungluas(10, 4));       // Output: 40
console.log(hitungluas2(10, 7));      // Output: 70
