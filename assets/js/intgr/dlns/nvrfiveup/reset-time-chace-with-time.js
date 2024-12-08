// Ambil nilai jumlah klik dari localStorage atau set ke 0 jika tidak ada
let clickCount = parseInt(localStorage.getItem('clickCount')) || 0;

// Mendapatkan elemen tombol dan modal
const affiliateButton = document.getElementById("btn2");
const modal = new bootstrap.Modal(document.getElementById('giveaway'));
const clickStatus = document.getElementById("clickStatus");

// Link afiliasi yang akan digunakan untuk klik 1 hingga 4
const affiliateLinks = [
    "https://s.shopee.co.id/9pNX0ekTFR", // Link afiliasi untuk klik pertama
    "https://s.shopee.co.id/9pNX0ekTFR", // Link afiliasi untuk klik kedua
    "https://s.shopee.co.id/9pNX0ekTFR", // Link afiliasi untuk klik ketiga
    "https://s.shopee.co.id/9pNX0ekTFR"  // Link afiliasi untuk klik keempat
];

// Inisialisasi status klik berdasarkan nilai yang ada di localStorage
updateClickStatus();

// Menyimpan waktu kapan data harus direset (1 menit dari sekarang)
const resetTime = Date.now() + 60000; // 60000 ms = 1 menit

// Jika waktu reset sudah lewat, reset jumlah klik
setTimeout(function () {
    resetClickData();
}, 60000); // Reset setelah 1 menit

affiliateButton.addEventListener("click", function () {
    if (clickCount < 4) {
        // Arahkan pengguna ke link afiliasi sesuai dengan klik ke-1 hingga ke-4
        window.open(affiliateLinks[clickCount], "_blank");

        // Update jumlah klik
        clickCount++;

        // Simpan jumlah klik ke localStorage
        localStorage.setItem('clickCount', clickCount);

        // Perbarui status setelah setiap klik
        updateClickStatus();
    }

    // Setelah mencapai 4 klik, tampilkan modal dan matikan tombol
    if (clickCount === 4) {
        // Pastikan modal hanya muncul setelah mencapai 4 klik
        setTimeout(function () {
            modal.show();
            affiliateButton.disabled = true; // Disable tombol setelah modal muncul
            clickStatus.textContent = "Batas klik tercapai! Terima kasih.";
        }, 100); // Beri sedikit waktu agar klik terakhir terhitung sebelum modal muncul
    }
});

// Fungsi untuk memperbarui status klik
function updateClickStatus() {
    if (clickCount < 4) {
        clickStatus.textContent = `Anda sudah mengklik ${clickCount}x, sisa ${4 - clickCount} untuk membuka kunci!`;
    } else {
        clickStatus.textContent = "Anda sudah mengklik 4x! Klik lagi untuk membuka hadiah!";
    }
}

// Fungsi untuk mereset data klik
function resetClickData() {
    // Hapus data dari localStorage
    localStorage.removeItem('clickCount');

    // Reset jumlah klik
    clickCount = 0;

    // Perbarui status
    updateClickStatus();

    // Enable kembali tombol afiliasi
    affiliateButton.disabled = false;
}