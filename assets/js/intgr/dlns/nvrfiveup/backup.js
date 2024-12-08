// Data untuk countdown
const countdownData = [
  { id: "countdown1", buttonId: "button1", remindButtonId: "remind-button-1", date: "", link: "https://link.dana.id/kaget?c=sl4mfjsks&r=bgpBS5" },
  { id: "countdown2", buttonId: "button2", remindButtonId: "remind-button-2", date: "", link: "https://link.dana.id/kaget?c=sj4spvm68&r=bgpBS5" },
  { id: "countdown3", buttonId: "button3", remindButtonId: "remind-button-3", date: "", link: "https://link.dana.id/kaget?c=sb7uw68dm&r=bgpBS5" },
  { id: "countdown4", buttonId: "button4", remindButtonId: "remind-button-4", date: "", link: "https://link.dana.id/kaget?c=s8m7cmr62&r=bgpBS5" },
];

// Fungsi untuk update countdown
function updateCountdown() {
  const now = new Date().getTime();

  countdownData.forEach(item => {
    const container = document.getElementById(item.id);
    const countdownDisplay = container.querySelector('.countdowngiveaway');
    const button = document.getElementById(item.buttonId);
    const targetTime = new Date(item.date).getTime();
    const distance = targetTime - now;

    if (distance <= 0) {
      // Aktifkan tombol jika waktu habis
      button.disabled = false;
      button.classList.add("enabled");
      button.onclick = () => window.location.href = item.link; // Direct link redirection
    } else {
      // Hitung waktu yang tersisa
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      countdownDisplay.textContent = `${days}Hari ${hours}Jam ${minutes}Menit ${seconds}Detik`;
    }
  });
}

// Fungsi untuk menampilkan pengingat menggunakan SweetAlert
function setReminder(countdownTime, countdownId) {
  const targetTime = new Date(countdownTime).getTime();
  const reminderTime = targetTime - (5 * 60 * 1000); // 5 menit sebelum waktu habis

  const now = new Date().getTime();

  // Cek apakah waktu pengingat sudah lewat
  if (reminderTime <= now) {
    Swal.fire({
      icon: 'warning',
      title: 'Pengingat Sudah Lewat!',
      text: 'Waktu pengingat sudah terlewat untuk countdown ini.',
      confirmButtonText: 'OK'
    });
    return;
  }

  // Menampilkan pengingat menggunakan SweetAlert 5 menit sebelum waktu habis
  setTimeout(() => {
    Swal.fire({
      icon: 'info',
      title: 'Pengingat Countdown',
      text: `Countdown ${countdownId} akan berakhir dalam 5 menit!`,
      confirmButtonText: 'OK'
    });
  }, reminderTime - now);
}

// Meminta izin untuk menampilkan notifikasi (SweetAlert sudah menangani pengingat)
try {
  if (Notification.permission !== "granted") {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        console.log("Izin notifikasi diberikan");
      }
    });
  }
} catch (error) {
  console.log("Notifikasi tidak didukung di perangkat ini.");
}

// Tambahkan event listener untuk tombol "Ingatkan Saya"
// Setiap tombol "Ingatkan Saya" akan memiliki pengingat untuk countdown-nya masing-masing
countdownData.forEach(item => {
  const remindButton = document.getElementById(item.remindButtonId);
  remindButton.addEventListener('click', () => {
    setReminder(item.date, item.id);
  });
});

// Update countdown setiap detik
setInterval(updateCountdown, 1000);
