// Data untuk countdown
const countdownData = [
  { id: "countdown1", buttonId: "button1", remindButtonId: "remind-button-1", date: "", link: "aHR0cHM6Ly9saW5rLmRhbmEuaWQva2FnZXQ/Yz1zbDRtZmpza3Mmcj1iZ3BCUzU=" },
  { id: "countdown2", buttonId: "button2", remindButtonId: "remind-button-2", date: "", link: "aHR0cHM6Ly9saW5rLmRhbmEuaWQva2FnZXQ/Yz1zajRzcHZtNjgmcj1iZ3BCUzU=" },
  { id: "countdown3", buttonId: "button3", remindButtonId: "remind-button-3", date: "", link: "aHR0cHM6Ly9saW5rLmRhbmEuaWQva2FnZXQ/Yz1zYjd1dzY4ZG0mcj1iZ3BCUzU=" },
  { id: "countdown4", buttonId: "button4", remindButtonId: "remind-button-4", date: "", link: "aHR0cHM6Ly9saW5rLmRhbmEuaWQva2FnZXQ/Yz1zOG03Y21yNjImcj1iZ3BCUzU=" },
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
          button.onclick = () => {
              const decryptedLink = decryptBase64(item.link); // Dekripsi link sebelum mengarahkan pengguna
              window.location.href = decryptedLink; // Redirect ke link asli
              // Tampilkan link yang dapat disalin
              const copyableElement = document.getElementById("copyable-link");
              copyableElement.textContent = decryptedLink;
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