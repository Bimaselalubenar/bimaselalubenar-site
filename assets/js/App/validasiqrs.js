// Daftar kode valid dan halaman terkait
const validCodes = {
    'DANA50': 'https://link.dana.id/kaget?c=s93hm9t5y&r=bgpBS5', // URL untuk kode valid
};

const video = document.getElementById('video-namaid-qr');
const statusElement = document.getElementById('status-namaid-qr');
const resultElement = document.getElementById('result-namaid-qr');
const validUrlElement = document.getElementById('valid-url-namaid-qr');
const retryContainer = document.getElementById('retry-container-namaid-qr');
const retryButton = document.getElementById('retry-button-namaid-qr');
const timestampElement = document.getElementById('timestamp-namaid-qr');
const linkContainer = document.getElementById('link-container-namaid-qr'); // Container untuk catatan dan tombol
const validUrlButton = document.getElementById('valid-url-button-namaid-qr'); // Tombol link valid

let timeout; // Untuk melacak waktu 20 detik
let scanInProgress = false; // Untuk memastikan hanya satu pemindaian yang berjalan

// Mengakses kamera untuk scan QR Cod
function startScanning() {
    if (scanInProgress) return; // Jangan mulai ulang pemindaian jika sedang berjalan

    scanInProgress = true;
    resultElement.textContent = '';
    validUrlElement.innerHTML = '';
    retryContainer.style.display = 'none'; // Sembunyikan tombol ulangi
    timestampElement.textContent = ''; // Bersihkan timestamp
    statusElement.textContent = 'Sedang membaca... Tunggu...';

    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
        .then((stream) => {
            video.srcObject = stream;
            video.play();
            scanQRCode();
            startTimer(); // Mulai hitung mundur
        })
        .catch((error) => {
            statusElement.textContent = 'Tidak dapat mengakses kamera';
        });
}

// Fungsi untuk memindai QR Code
function scanQRCode() {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    setInterval(() => {
        if (video.readyState === video.HAVE_ENOUGH_DATA) {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            
            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            const code = jsQR(imageData.data, canvas.width, canvas.height);

            if (code) {
                validateQRCode(code.data); // Validasi kode QR
                clearTimeout(timeout); // Hentikan timer jika QR Code ditemukan
            }
        }
    }, 100);
}

// Validasi QR Code
function validateQRCode(code) {
    const currentTimestamp = new Date().toLocaleString(); // Mengambil waktu saat ini
    if (validCodes[code]) {
        resultElement.textContent = 'Berhasil'; // Menampilkan 'Berhasil' jika kode ditemukan di daftar validCodes
        validUrlElement.innerHTML = ''; // Menghapus pesan URL jika ada
        timestampElement.textContent = `QR Code dipindai pada: ${currentTimestamp}`; // Menampilkan timestamp
        linkContainer.style.display = 'block'; // Menampilkan container dengan catatan dan tombol
        validUrlButton.onclick = function () {
            window.open(validCodes[code], '_blank'); // Membuka URL di tab baru
        };
        clearTimeout(timeout); // Hentikan timer jika QR Code valid
        statusElement.textContent = ''; // Menghapus pesan "Mencari QR Code..."
        scanInProgress = false;
    } else {
        resultElement.textContent = 'Gagal'; // Menampilkan 'Gagal' jika kode tidak ditemukan
        linkContainer.style.display = 'none'; // Menyembunyikan link container jika kode tidak valid
        retryContainer.style.display = 'block'; // Tampilkan tombol ulangi setelah 20 detik
        statusElement.textContent = 'Gagal, ulangi kembali';
        scanInProgress = false;
    }
}

// Fungsi untuk memulai timer 20 detik
function startTimer() {
    timeout = setTimeout(() => {
        if (scanInProgress) {
            retryContainer.style.display = 'block'; // Tampilkan tombol ulangi setelah 20 detik
            scanInProgress = false; // Menghentikan pemindaian setelah 20 detik
            statusElement.textContent = 'Gagal, ulangi kembali';
        }
    }, 20000); // 20 detik
}

// Tombol untuk mengulang pemindaian
retryButton.addEventListener('click', () => {
    retryContainer.style.display = 'none'; // Sembunyikan tombol ulangi
    startScanning(); // Mulai ulang pemindaian QR Code
});

// Mulai pemindaian saat halaman dimuat
startScanning();
