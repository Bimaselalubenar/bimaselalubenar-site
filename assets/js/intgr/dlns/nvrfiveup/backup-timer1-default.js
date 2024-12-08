// Ambil nilai jumlah klik dari localStorage atau set ke 0 jika tidak ada
let clickCount = parseInt(localStorage.getItem('clickCount')) || 0;

// Mendapatkan elemen tombol dan modal
const affiliateButton = document.getElementById("btn2");
const resetButton = document.getElementById("btnj");
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

// Event listener untuk reset tombol
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

// Fungsi untuk memperbarui status klik
function updateClickStatus() {
    if (clickCount < 4) {
        clickStatus.textContent = `Anda sudah mengklik ${clickCount}x, sisa ${4 - clickCount} untuk membuka kunci!`;
    } else {
        clickStatus.textContent = "Anda sudah mengklik 4x! Klik lagi untuk membuka hadiah!";
    }
}


// Data untuk countdown
// Menambahkan teks ke elemen dengan ID 'note1'
document.getElementById('note1').innerText = 'Tunggu waktu selesai!';

// Menambahkan teks ke elemen dengan ID 'note2'
document.getElementById('note2').innerText = 'Tunggu waktu selesai!';

// Menambahkan teks ke elemen dengan ID 'note3'
document.getElementById('note3').innerText = 'Tunggu waktu selesai!';

// Menambahkan teks ke elemen dengan ID 'note4'
document.getElementById('note4').innerText = 'Tunggu waktu selesai!';



const countdownData = [
  { id: "countdown1", buttonId: "button1", remindButtonId: "remind-button-1", date: "2024-12-01T16:50:00", link: "aHR0cHM6Ly9saW5rLmRhbmEuaWQva2FnZXQ/Yz1zaDZ1OW1hcGUmcj1iZ3BCUzU=" },
  { id: "countdown2", buttonId: "button2", remindButtonId: "remind-button-2", date: "2024-12-01T17:50:00", link: "aHR0cHM6Ly9saW5rLmRhbmEuaWQva2FnZXQ/Yz1zeXo2YjVycTcmcj1iZ3BCUzU=" },
  { id: "countdown3", buttonId: "button3", remindButtonId: "remind-button-3", date: "2024-12-01T18:50:00", link: "aHR0cHM6Ly9saW5rLmRhbmEuaWQva2FnZXQ/Yz1zM3JhNzVjZjkmcj1iZ3BCUzU=" },
  { id: "countdown4", buttonId: "button4", remindButtonId: "remind-button-4", date: "2024-12-01T19:50:00", link: "aHR0cHM6Ly9zLnNob3BlZS5jby5pZC85cE5YMGVrVEZS" }
];

// Fungsi untuk mendekripsi URL Base64
function decryptBase64(base64Str) {
  const decodedStr = atob(base64Str);
  return decodedStr;
}

// Fungsi untuk update countdown
function updateCountdown() {
  const now = new Date().getTime(); // Waktu sekarang

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