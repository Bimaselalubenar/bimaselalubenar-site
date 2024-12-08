// Ambil elemen tombol
        const btn1 = document.getElementById('btn1');
        const btn2 = document.getElementById('btn2');

        // Menambahkan event listener untuk klik pada button pertama
        btn1.addEventListener('click', function() {
            // Sembunyikan button pertama
            btn1.style.display = 'none';
            // Tampilkan button kedua
            btn2.style.display = 'inline-block';
        });