const scriptURL1 = 'https://script.google.com/macros/s/AKfycbzr_2rLRbFSMH5gguctrOwTRLdGjdn2Eo_n7L8yBEyHl6G0l5xCuwlFw2CFfgWnE19h/exec';
        const form1 = document.getElementById('daftarDulu');
        const statusMessage1 = document.getElementById('status-txt');

        form1.addEventListener('submit', e => {
            e.preventDefault();

            statusMessage1.innerHTML = "Email sedang divalidasi...";

            setTimeout(() => {
                statusMessage1.innerHTML = "Tunggu sebentar...";
            }, 2000);

            setTimeout(() => {
                fetch(scriptURL1, { method: 'POST', body: new FormData(form1) })
                    .then(response => {
                        statusMessage1.innerHTML = "Anda berhasil mendaftar";
                        Swal.fire({
                            icon: 'success',
                            title: 'Data terkirim!',
                            text: 'Tunggu, Pastikan email anda aktif, kami akan memberitahukan melalui email',
                        }).then(() => {
                            window.location.reload();
                        });
                    })
                    .catch(error => {
                        console.error('Error!', error.message);
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Ada masalah, coba ulangi lagi.',
                        });
                    });
            }, 5000);
        });