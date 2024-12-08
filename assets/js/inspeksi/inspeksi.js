<!-- app -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<!-- selesai -->

<!-- drag off -->
<script>
    document.addEventListener('contextmenu', function (event) {
        event.preventDefault();
    });

    // Mencegah drag pada semua elemen
    document.addEventListener('dragstart', function (event) {
        event.preventDefault();
    });
</script>
<!-- selesai -->

<!-- mematikan inspection -->
<script>
    function showAlert(message) {
        Swal.fire({
            icon: 'warning',
            title: 'Akses Dilarang!',
            text: message,
            confirmButtonText: 'OK'
        });
    }

    document.addEventListener('keydown', function (event) {
        // Disable F12
        if (event.keyCode == 123) {
            event.preventDefault();
            showAlert('Anda tidak dapat melakukan inspeksi ilegal');
        }
        // Disable Ctrl+Shift+I
        if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
            event.preventDefault();
            showAlert('Anda tidak dapat melakukan inspeksi ilegal');
        }
        // Disable Ctrl+Shift+J
        if (event.ctrlKey && event.shiftKey && event.keyCode == 74) {
            event.preventDefault();
            showAlert('Anda tidak dapat melakukan inspeksi ilegal');
        }
        // Disable Ctrl+Shift+C
        if (event.ctrlKey && event.shiftKey && event.keyCode == 67) {
            event.preventDefault();
            showAlert('Anda tidak dapat melakukan inspeksi ilegal');
        }
        // Disable Ctrl+U
        if (event.ctrlKey && event.keyCode == 85) {
            event.preventDefault();
            showAlert('Anda tidak dapat melakukan inspeksi ilegal');
        }
        // Disable Ctrl+Shift+K (Mozilla Firefox Web Console)
        if (event.ctrlKey && event.shiftKey && event.keyCode == 75) {
            event.preventDefault();
            showAlert('Anda tidak dapat melakukan inspeksi ilegal');
        }
        // Disable Ctrl+Shift+S (Windows Snipping Tool)
        if (event.ctrlKey && event.shiftKey && event.keyCode == 83) {
            event.preventDefault();
            showAlert('Anda tidak dapat melakukan inspeksi ilegal');
        }
        // Disable Ctrl+K or Ctrl+F (Search in Developer Tools)
        if (event.ctrlKey && (event.keyCode == 75 || event.keyCode == 70)) {
            event.preventDefault();
            showAlert('Anda tidak dapat melakukan inspeksi ilegal');
        }
        // Disable F1 (Help in Developer Tools)
        if (event.keyCode == 112) {
            event.preventDefault();
            showAlert('Anda tidak dapat melakukan inspeksi ilegal');
        }
        // Disable Ctrl+P (File search in Developer Tools)
        if (event.ctrlKey && event.keyCode == 80) {
            event.preventDefault();
            showAlert('Anda tidak dapat melakukan inspeksi ilegal');
        }
    });

    document.addEventListener('contextmenu', function (event) {
        event.preventDefault();
        showAlert('Anda tidak dapat melakukan inspeksi ilegal');
    });

    // Mencegah drag pada semua elemen
    document.addEventListener('dragstart', function (event) {
        event.preventDefault();
        showAlert('Anda tidak dapat melakukan inspeksi ilegal');
    });

    // Mencegah tindakan ketika 3 jari menyentuh layar
    document.addEventListener('touchstart', function (event) {
        if (event.touches.length === 3) {
            event.preventDefault();
            showAlert('Anda tidak dapat melakukan tindakan ini');
        }
    });

    // Mencegah penyalinan konten
    document.addEventListener('copy', function (event) {
        event.preventDefault();
        const clipboardText = 'not allowed, web by https://bimaselalubenar.my.id';
        event.clipboardData.setData('text/plain', clipboardText);

        Swal.fire({
            icon: 'error',
            title: 'Tidak di izinkan',
            text: 'Tidak di izinkan untuk menyalin konten.',
            footer: '<a href="https://bimaselalubenar.my.id">www.bimaselalubenar.my.id</a>',
            didOpen: () => {
                Swal.getContent().insertAdjacentHTML('beforeend', '<p>Note: Copying is not allowed. Web by <a href="https://bimaselalubenar.my.id">https://bimaselalubenar.my.id</a></p>');
            }
        });
    });
</script>
<!-- selesai -->

<!-- menonaktifkan pelacakan id -->
<script>
    function detectDevTools() {
        const element = new Image();
        Object.defineProperty(element, 'id', {
            get: function () {
                window.location.href = 'w-w';
            }
        });
        console.log(element);
    }

    setInterval(detectDevTools, 1000);
</script>
<!-- selesai -->

<!-- animasi AOS -->
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
<script>
    AOS.init({
        duration: 1200
    });</script>
<!-- Selesai -->

<!-- untuk screen capture -->
<script>
    function showAlert(message) {
        Swal.fire({
            icon: 'warning',
            title: 'Akses Dilarang!',
            text: message,
            confirmButtonText: 'OK'
        });
    }

    // Fungsi untuk menampilkan SweetAlert khusus untuk screenshot
    function showScreenshotAlert() {
        Swal.fire({
            icon: 'warning',
            title: 'Screenshot Dilarang!',
            text: 'Anda tidak diperbolehkan mengambil screenshot atau mencetak konten ini.',
            confirmButtonText: 'OK'
        });
    }

    document.addEventListener('keydown', function(event) {
        // Disable F12
        if (event.keyCode == 123) {
            event.preventDefault();
            showAlert('Anda tidak dapat melakukan inspeksi ilegal');
        }
        // Disable Ctrl+Shift+I
        if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
            event.preventDefault();
            showAlert('Anda tidak dapat melakukan inspeksi ilegal');
        }
        // Disable Ctrl+Shift+J
        if (event.ctrlKey && event.shiftKey && event.keyCode == 74) {
            event.preventDefault();
            showAlert('Anda tidak dapat melakukan inspeksi ilegal');
        }
        // Disable Ctrl+Shift+C
        if (event.ctrlKey && event.shiftKey && event.keyCode == 67) {
            event.preventDefault();
            showAlert('Anda tidak dapat melakukan inspeksi ilegal');
        }
        // Disable Ctrl+U
        if (event.ctrlKey && event.keyCode == 85) {
            event.preventDefault();
            showAlert('Anda tidak dapat melakukan inspeksi ilegal');
        }
        // Disable Ctrl+Shift+K (Mozilla Firefox Web Console)
        if (event.ctrlKey && event.shiftKey && event.keyCode == 75) {
            event.preventDefault();
            showAlert('Anda tidak dapat melakukan inspeksi ilegal');
        }
        // Disable Ctrl+Shift+S (Windows Snipping Tool)
        if (event.ctrlKey && event.shiftKey && event.keyCode == 83) {
            event.preventDefault();
            showAlert('Anda tidak dapat melakukan inspeksi ilegal');
        }
        // Disable Ctrl+K or Ctrl+F (Search in Developer Tools)
        if (event.ctrlKey && (event.keyCode == 75 || event.keyCode == 70)) {
            event.preventDefault();
            showAlert('Anda tidak dapat melakukan inspeksi ilegal');
        }
        // Disable F1 (Help in Developer Tools)
        if (event.keyCode == 112) {
            event.preventDefault();
            showAlert('Anda tidak dapat melakukan inspeksi ilegal');
        }
        // Disable Ctrl+P (File search in Developer Tools)
        if (event.ctrlKey && event.keyCode == 80) {
            event.preventDefault();
            showAlert('Anda tidak dapat melakukan inspeksi ilegal');
        }
        // Disable PrintScreen and other screenshot combinations
        if (event.key === 'PrintScreen' ||
            (event.ctrlKey && event.key === 'p') ||
            (event.shiftKey && (event.metaKey || event.keyCode === 91 || event.keyCode === 92) && event.key === 'S') ||
            (event.key === 'PrintScreen' && (event.metaKey || event.keyCode === 91 || event.keyCode === 92)) ||
            event.key === 'Meta') {
            event.preventDefault();
            showScreenshotAlert();
        }
    });

    // Deteksi tombol PrintScreen dan Windows + Print Screen
    document.addEventListener('keyup', function (event) {
        if (event.key === 'PrintScreen' || (event.key === 'PrintScreen' && (event.metaKey || event.keyCode === 91 || event.keyCode === 92))) {
            navigator.clipboard.writeText('');
            showScreenshotAlert();
        }
    });

    document.addEventListener('contextmenu', function (event) {
        event.preventDefault();
        showAlert('Anda tidak dapat melakukan inspeksi ilegal');
    });

    // Mencegah drag pada semua elemen
    document.addEventListener('dragstart', function (event) {
        event.preventDefault();
        showAlert('Anda tidak dapat melakukan inspeksi ilegal');
    });

    // Mencegah tindakan ketika 3 jari menyentuh layar
    document.addEventListener('touchstart', function (event) {
        if (event.touches.length === 3) {
            event.preventDefault();
            showAlert('Anda tidak dapat melakukan tindakan ini');
        }
    });

    // Mencegah penyalinan konten
    document.addEventListener('copy', function (event) {
        event.preventDefault();
        const clipboardText = 'not allowed, web by https://bimaselalubenar.my.id';
        event.clipboardData.setData('text/plain', clipboardText);

        Swal.fire({
            icon: 'error',
            title: 'Tidak di izinkan',
            text: 'Tidak di izinkan untuk menyalin konten.',
            footer: '<a href="https://bimaselalubenar.my.id">www.bimaselalubenar.my.id</a>',
            didOpen: () => {
                Swal.getContent().insertAdjacentHTML('beforeend', '<p>Note: Copying is not allowed. Web by <a href="https://bimaselalubenar.my.id">https://bimaselalubenar.my.id</a></p>');
            }
        });
    });
</script>
<!-- Selesai -->

<amp-ad width="100vw" height="320" type="adsense" data-ad-client="ca-pub-8913081554574910" data-ad-slot="5303068928"
    data-auto-format="rspv" data-full-width="">
    <div overflow=""></div>
</amp-ad>


<!-- onesignal -->
<script src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" defer></script>
<script>
    window.OneSignalDeferred = window.OneSignalDeferred || [];
    OneSignalDeferred.push(async function (OneSignal) {
        await OneSignal.init({
            appId: "6ae2ed3c-f763-465d-8648-0538e5f7e40c",
        });
    });
</script>
<!-- selesai -->