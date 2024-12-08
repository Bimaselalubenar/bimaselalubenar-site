// Ambil nilai jumlah klik dari localStorage atau set ke 0 jika tidak ada
let clickCount = parseInt(localStorage.getItem('clickCount')) || 0;

// Mendapatkan elemen tombol dan modal
const affiliateButton = document.getElementById("btn2");
const resetButtons = document.querySelectorAll(".reset-btn");  // Ambil semua tombol dengan class "reset-btn"
const modal = new bootstrap.Modal(document.getElementById('giveaway'));
const clickStatus = document.getElementById("clickStatus");

// Link afiliasi yang akan digunakan untuk klik 1 hingga seterusnya, cukup tambah link aja
const affiliateLinks = [
    "https://s.shopee.co.id/6fQgDxICvy",
    "https://s.shopee.co.id/7KgN1DsfJ5",
    "https://s.shopee.co.id/6AUPdEAaZC",
    "https://s.shopee.co.id/5fY92PwjyF",
    "https://s.shopee.co.id/3LAEGB91A2",
    "https://s.shopee.co.id/9pNi0JaXnL",
    "https://s.shopee.co.id/6V7G2FYtry",
    "https://s.shopee.co.id/6V7G2FYtry",
];

// "https://s.shopee.co.id/20ekoY29lj",
// "https://s.shopee.co.id/5VEcz0SES5",
// "https://s.shopee.co.id/2LHcqadEok",
// "https://s.shopee.co.id/7UzhMR4gD3",

// Inisialisasi status klik berdasarkan nilai yang ada di localStorage
updateClickStatus();

// Event listener untuk tombol afiliasi
affiliateButton.addEventListener("click", function () {
    if (clickCount < affiliateLinks.length) { // Mengecek apakah klik masih dalam batas jumlah link
        // Arahkan pengguna ke link afiliasi sesuai dengan klik
        window.open(affiliateLinks[clickCount], "_blank");

        // Update jumlah klik
        clickCount++;

        // Simpan jumlah klik ke localStorage
        localStorage.setItem('clickCount', clickCount);

        // Perbarui status setelah setiap klik
        updateClickStatus();
    }

    // Setelah mencapai batas klik (misalnya 8 klik), tampilkan modal dan matikan tombol
    if (clickCount === affiliateLinks.length) {
        // Pastikan modal hanya muncul setelah mencapai jumlah klik yang ditentukan
        setTimeout(function () {
            modal.show();
            affiliateButton.disabled = true; // Disable tombol setelah modal muncul
            clickStatus.textContent = "Batas klik tercapai! Terima kasih.";
        }, 100); // Beri sedikit waktu agar klik terakhir terhitung sebelum modal muncul
    }
});

// Event listener untuk semua tombol reset dengan class "reset-btn"
resetButtons.forEach(resetButton => {
    resetButton.addEventListener("click", function () {
        // Hapus data dari localStorage
        localStorage.removeItem('clickCount');

        // Reset jumlah klik
        clickCount = 0;

        // Perbarui status
        updateClickStatus();

        // Enable kembali tombol afiliasi
        affiliateButton.disabled = false;
    });
});

// Fungsi untuk memperbarui status klik
function updateClickStatus() {
    if (clickCount < affiliateLinks.length) {
        clickStatus.textContent = `Anda sudah mengklik ${clickCount}x, sisa ${affiliateLinks.length - clickCount} untuk membuka kunci!`;
    } else {
        clickStatus.textContent = `Anda sudah mengklik ${affiliateLinks.length}x! Klik lagi untuk membuka hadiah!`;
    }
}


// Data untuk countdown
// Menambahkan teks ke elemen dengan ID 'note1'
document.getElementById('note1').innerText = 'Siapa cepat dia dapat!';

// Menambahkan teks ke elemen dengan ID 'note2'
document.getElementById('note2').innerText = 'Siapa cepat dia dapat!';

// Menambahkan teks ke elemen dengan ID 'note3Sabar ya!
document.getElementById('note3').innerText = 'Siapa cepat dia dapat!';

// Menambahkan teks ke elemen dengan ID 'note4Sabar ya!
document.getElementById('note4').innerText = 'Siapa cepat dia dapat!';
document.getElementById('note5').innerText = 'Siapa cepat dia dapat!';
document.getElementById('note6').innerText = 'Siapa cepat dia dapat!';



const countdownData = [
    { id: "countdown1", buttonId: "button1", remindButtonId: "remind-button-1", date: "2024-12-08T13:00:00", link: "aHR0cHM6Ly9saW5rLmRhbmEuaWQva2FnZXQ/Yz1zbjRtazl5bmomcj1iZ3BCUzU=" },
    { id: "countdown2", buttonId: "button2", remindButtonId: "remind-button-2", date: "2024-12-08T14:00:00", link: "aHR0cHM6Ly9saW5rLmRhbmEuaWQva2FnZXQ/Yz1za2VueDk3Zmwmcj1iZ3BCUzU=" },
    { id: "countdown3", buttonId: "button3", remindButtonId: "remind-button-3", date: "2024-12-08T15:00:00", link: "aHR0cHM6Ly9saW5rLmRhbmEuaWQva2FnZXQ/Yz1zd3psc3BtOWwmcj1iZ3BCUzU=" },
    { id: "countdown4", buttonId: "button4", remindButtonId: "remind-button-4", date: "2024-12-08T16:00:00", link: "aHR0cHM6Ly9saW5rLmRhbmEuaWQva2FnZXQ/Yz1zdzhrbDQ4YWgmcj1iZ3BCUzU=" },
    { id: "countdown5", buttonId: "button5", remindButtonId: "remind-button-5", date: "2024-12-08T17:00:00", link: "aHR0cHM6Ly9saW5rLmRhbmEuaWQva2FnZXQ/Yz1zY2w3dDc5cHgmcj1iZ3BCUzU=" },
    { id: "countdown6", buttonId: "button6", remindButtonId: "remind-button-6", date: "2024-12-08T18:00:00", link: "aHR0cHM6Ly9saW5rLmRhbmEuaWQva2FnZXQ/Yz1zdHI3dnU5dGImcj1iZ3BCUzU=" }
];

// Fungsi untuk mendekripsi URL Base64
function decryptBase64(base64Str) {
    const decodedStr = atob(base64Str);
    return decodedStr;
}

// Fungsi untuk mendapatkan waktu UTC dari WorldTimeAPI
async function getServerTime() {
    try {
        const response = await fetch('http://worldtimeapi.org/api/timezone/Etc/UTC');
        const data = await response.json();
        return new Date(data.utc_datetime).getTime(); // Mengembalikan waktu UTC dalam format timestamp
    } catch (error) {
        console.error('Error fetching server time:', error);
        return new Date().getTime(); // Fallback ke waktu lokal jika gagal mengambil waktu dari API
    }
}

// Fungsi untuk update countdown
async function updateCountdown() {
    const now = await getServerTime(); // Waktu sekarang dari server

    countdownData.forEach(item => {
        const container = document.getElementById(item.id);
        const countdownDisplay = container.querySelector('.countdowngiveaway');
        const button = document.getElementById(item.buttonId);
        const targetTime = new Date(item.date).getTime(); // Target waktu untuk countdown
        const distance = targetTime - now; // Selisih waktu antara target dan waktu sekarang

        if (distance <= 0) {
            // Aktifkan tombol jika waktu habis
            button.disabled = false;
            button.classList.remove("disabled");
            button.classList.add("enabled");

            // Flag untuk pertama kali klik
            let firstClick = true;

            button.onclick = () => {
                if (firstClick) {
                    // Jika klik pertama, arahkan ke link afiliasi dalam tab baru
                    const affiliateLink = decryptBase64(item.link);
                    window.open(affiliateLink, '_blank');  // Arahkan ke link afiliasi di tab baru
                    firstClick = false;  // Ubah flag, supaya klik berikutnya mengarah ke link tujuan
                } else {
                    // Jika sudah klik sebelumnya, arahkan ke link tujuan
                    const decryptedLink = decryptBase64(item.link); // Dekripsi link sebelum mengarahkan pengguna
                    window.location.href = decryptedLink; // Redirect ke link asli
                }

                // Tampilkan pesan khusus untuk setiap tombol
                const noteElement = document.getElementById(item.idnote);
                if (noteElement) {
                    noteElement.style.display = "block"; // Tampilkan pesan
                }
            };

            countdownDisplay.textContent = "Buruan Ambil!";
        } else {
            // Hitung waktu yang tersisa
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Update countdown
            countdownDisplay.textContent = `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;
        }
    });
}

// Update countdown setiap detik
setInterval(updateCountdown, 1000); // Memperbarui countdown setiap 1 detik