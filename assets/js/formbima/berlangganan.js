const scriptURL1 = 'https://script.google.com/macros/s/AKfycbw2tWMfFRw6T_ICuftlR-dwa2ZoDVcODJGrU-qO_1blLcaXtNh4ASAVgo9wTRiTcNtqzg/exec';
const form1 = document.getElementById('subscriptionForm');
const statusMessage1 = document.getElementById('status-message');

form1.addEventListener('submit', e => {
    e.preventDefault();

    statusMessage1.innerHTML = "Email sedang divalidasi...";
    statusMessage1.style.color = "blue"; // Mengatur warna teks menjadi biru untuk validasi

    setTimeout(() => {
        statusMessage1.innerHTML = "Tunggu sebentar...";
        statusMessage1.style.color = "orange"; // Mengatur warna teks menjadi oranye untuk menunggu
    }, 2000);

    setTimeout(() => {
        fetch(scriptURL1, { method: 'POST', body: new FormData(form1) })
            .then(response => {
                statusMessage1.innerHTML = "Pengajuan berhasil! tunggu balasan dari admin";
                statusMessage1.style.color = "green"; // Mengatur warna teks menjadi hijau untuk berhasil
            })
            .catch(error => {
                console.error('Error!', error.message);
                statusMessage1.innerHTML = "Ada masalah, coba ulangi lagi.";
                statusMessage1.style.color = "red"; // Mengatur warna teks menjadi merah untuk error
            });
    }, 5000);
});
