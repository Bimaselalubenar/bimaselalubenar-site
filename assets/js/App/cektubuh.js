function cekBeratBadan(event) {
            event.preventDefault(); // Mencegah pengiriman form

            // Tampilkan loading
            document.getElementById('loading').style.display = 'block';
            document.getElementById('result').style.display = 'none';

            // Simulasi waktu pemrosesan
            setTimeout(function() {
                const nama = document.getElementById('nama').value;
                const usia = document.getElementById('usia').value;
                const tinggi = document.getElementById('tinggi').value;
                const jenisKelamin = document.getElementById('jenisKelamin').value;
                const berat = document.getElementById('berat').value;

                // Menghitung BMI
                const tinggiMeter = tinggi / 100;
                const bmi = (berat / (tinggiMeter * tinggiMeter)).toFixed(2);

                // Menentukan status berat badan
                let status = '';
                let beratIdeal = 0;
                let estimasiWaktuDiet = '';
                let totalKalori = 0;
                let kebutuhanProtein = 0;
                let kebutuhanCairan = 0;
                let kebutuhanLemak = 0;
                let kebutuhanKarbo = 0;
                let rekomendasiMakanan = '';
                let makananHindari = '';
                let buahCocok = '';
                let keterangan = '';

                if (bmi < 18.5) {
                    status = 'Berat badan kurang';
                    beratIdeal = 18.5 * (tinggiMeter * tinggiMeter);
                    estimasiWaktuDiet = 'Naikkan berat badan Anda dengan mengonsumsi lebih banyak kalori sehat selama beberapa bulan.';
                    keterangan = 'Disarankan untuk meningkatkan berat badan secara sehat.';
                } else if (bmi >= 18.5 && bmi < 24.9) {
                    status = 'Berat badan ideal';
                    beratIdeal = berat;
                    estimasiWaktuDiet = 'Pertahankan berat badan Anda saat ini dengan menjaga pola makan dan olahraga yang seimbang.';
                    keterangan = 'Selamat, berat badan Anda sudah normal dan ideal!';
                } else if (bmi >= 25 && bmi < 29.9) {
                    status = 'Berat badan berlebih';
                    beratIdeal = 24.9 * (tinggiMeter * tinggiMeter);
                    estimasiWaktuDiet = 'Kurangi berat badan Anda dengan mengurangi asupan kalori dan meningkatkan aktivitas fisik selama beberapa bulan.';
                    keterangan = 'Disarankan untuk menurunkan berat badan secara bertahap.';
                } else {
                    status = 'Obesitas';
                    beratIdeal = 24.9 * (tinggiMeter * tinggiMeter);
                    estimasiWaktuDiet = 'Sangat disarankan untuk menurunkan berat badan dengan bantuan ahli gizi atau dokter selama beberapa bulan hingga setahun.';
                    keterangan = 'Sangat penting untuk segera mengatur pola makan dan aktivitas.';
                }

                totalKalori = beratIdeal * 24 * 1.2; // Estimasi kebutuhan kalori per hari (1.2 adalah faktor aktivitas rendah)
                kebutuhanProtein = beratIdeal * 0.8; // Kebutuhan protein per kg berat badan ideal
                kebutuhanCairan = beratIdeal * 30; // Estimasi kebutuhan cairan 30 ml per kg berat badan
                kebutuhanLemak = totalKalori * 0.3 / 9; // 30% dari kalori total untuk lemak, 9 kalori per gram lemak
                kebutuhanKarbo = totalKalori * 0.5 / 4; // 50% dari kalori total untuk karbohidrat, 4 kalori per gram karbo

                rekomendasiMakanan = 'Konsumsi makanan sehat dan seimbang, termasuk sayuran, buah-buahan, protein tanpa lemak, dan biji-bijian.';
                makananHindari = 'Hindari makanan cepat saji, makanan tinggi gula, dan makanan berlemak tinggi.';
                buahCocok = 'Apel, pisang, dan jeruk sangat cocok untuk Anda.';

                // Hitung perubahan berat badan yang diperlukan
                let perubahanBerat = Math.abs(berat - beratIdeal).toFixed(1);

                // Sembunyikan loading dan tampilkan hasil
                document.getElementById('loading').style.display = 'none';
                document.getElementById('result').style.display = 'block';

                // Tampilkan hasil ke halaman
                document.getElementById('outputNama').innerText = nama;
                document.getElementById('outputUsia').innerText = usia;
                document.getElementById('outputTinggi').innerText = tinggi;
                document.getElementById('outputJenisKelamin').innerText = jenisKelamin === 'male' ? 'Pria' : 'Wanita';
                document.getElementById('outputBerat').innerText = berat;
                document.getElementById('outputBMI').innerText = bmi;
                document.getElementById('outputStatus').innerText = status;
                document.getElementById('outputBeratIdeal').innerText = beratIdeal.toFixed(1);
                document.getElementById('outputPerubahanBerat').innerText = perubahanBerat;
                document.getElementById('outputEstimasiWaktu').innerText = estimasiWaktuDiet;
                document.getElementById('outputKalori').innerText = totalKalori.toFixed(1);
                document.getElementById('outputProtein').innerText = kebutuhanProtein.toFixed(1);
                document.getElementById('outputCairan').innerText = kebutuhanCairan.toFixed(1);
                document.getElementById('outputLemak').innerText = kebutuhanLemak.toFixed(1);
                document.getElementById('outputKarbo').innerText = kebutuhanKarbo.toFixed(1);
                document.getElementById('outputRekomendasiMakanan').innerText = rekomendasiMakanan;
                document.getElementById('outputMakananHindari').innerText = makananHindari;
                document.getElementById('outputBuahCocok').innerText = buahCocok;
                document.getElementById('outputKeterangan').innerText = keterangan;
            }, 1000);
        }