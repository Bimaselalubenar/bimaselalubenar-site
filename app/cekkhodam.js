src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.8/lottie.min.js"

const khodams = [
    { name: "Khodam Kucing", meaning: "Menjaga agar kamu selalu malas, Dan tidur di tempat yang nggak jelas." },
    { name: "Khodam Anjing", meaning: "Membuatmu setia ke tukang bakso, Tapi lupa jalan pulang pas laper peso." },
    { name: "Khodam Bebek", meaning: "Menjaga langkahmu tetap berbaris rapi, Biar nggak nyasar pas cari wifi." },
    { name: "Khodam Kambing", meaning: "Membantu menghindari makan sayur, Tapi malah nyari junk food tanpa takur." },
    { name: "Khodam Kerbau", meaning: "Mengingatkanmu untuk mandi lumpur, Biar jadi anak sawah yang selalu subur." },
    { name: "Khodam Ayam", meaning: "Membuatmu bangun pagi walau ngantuk, Tapi tidur lagi setelah lihat jam dinding buntung." },
    { name: "Khodam Kupu-Kupu", meaning: "Menjaga supaya selalu kelihatan cantik, Tapi tiap hari berlama-lama di salon antik." },
    { name: "Khodam Sapi", meaning: "Membantu selalu kenyang setelah makan, Walau perut penuh tetap lanjut ngemil kue basah." },
    { name: "Khodam Gajah", meaning: "Menjaga supaya ingatanmu tak pernah lupa, Tapi tetap aja nyari kunci rumah yang disembunyikan opa." },
    { name: "Khodam Burung Hantu", meaning: "Membuatmu selalu begadang, Walau esok pagi harus bangun tegang." },
    { name: "Khodam Singa", meaning: "Menjaga agar kamu tetap berani ke dapur malam-malam, Tapi akhirnya balik lagi karena takut sama bayang-bayang." },
    { name: "Khodam Tikus", meaning: "Membuatmu jago ngumpet dari pekerjaan, Tapi nggak jago ngumpet dari panggilan mama buat makan." },
    { name: "Khodam Kura-Kura", meaning: "Menjaga agar kamu tetap lambat saat jogging, Tapi tetap berusaha cepat kalau ada tawaran diskon clothing." },
    { name: "Khodam Ular", meaning: "Membuatmu licin dari tanggung jawab, Tapi nggak licin kalau ditangkap pacar minta sab." },
    { name: "Khodam Ikan", meaning: "Menjaga agar kamu selalu suka berenang, Tapi cuma di kolam renang mini, takut tenggelam soalnya." },
    { name: "Khodam Kelelawar", meaning: "Membantu tidur saat siang dan bangun malam, Biar bisa main game online tanpa gangguan salam." },
    { name: "Khodam Serigala", meaning: "Membuatmu jago dalam mencari makanan malam, Tapi akhirnya cuma beli mie instan rasa ayam." },
    { name: "Khodam Laba-Laba", meaning: "Menjaga rumah dari nyamuk, Tapi nyamuk malah minta tolong laba-laba jadi pengasuh." },
    { name: "Khodam Bebek", meaning: "Membuat suaramu nyaring seperti bebek, Biar bisa panggil teman di tempat ramai, nggak pake berkerek." },
    { name: "Khodam Kuda", meaning: "Menjaga agar kamu tetap semangat berkuda di mimpi, Tapi bangun tidur malah ingat mimpi makan sate sapi." },
    { name: "Khodam Domba", meaning: "Membuatmu selalu tidur dengan hitungan domba, Tapi domba malah kabur karena takut kena karma." },
    { name: "Khodam Rusa", meaning: "Menjaga agar kamu tetap gesit saat diskon, Tapi tetap nyasar cari pintu keluar pas hari Ramadhan." },
    { name: "Khodam Harimau", meaning: "Membuatmu terlihat garang tapi lembut, Tapi tetap takut sama kucing yang tiba-tiba berkelit." },
    { name: "Khodam Nyamuk", meaning: "Menjaga agar kamu selalu gatal di tempat tidur, Biar jadi alasan untuk beli kasur baru yang empuk kayak bantal." },
    { name: "Khodam Lebah", meaning: "Membuatmu rajin tapi selalu ngumpul, Biar pas kerja tetap bisa ngobrol tanpa asal mul." },
    { name: "Khodam Kancil", meaning: "Menjaga agar kamu pintar menghindar dari masalah, Tapi tetap bingung ngeles kalau ketahuan bohong masalah uang kas." },
    { name: "Khodam Kodok", meaning: "Membuatmu suka lompat-lompat saat gembira, Tapi malah jatuh pas mau gaya di depan dia." },
    { name: "Khodam Capung", meaning: "Menjaga agar kamu selalu tampak anggun, Tapi jadi kesandung pas mau tampil di panggung." },
    { name: "Khodam Gagak", meaning: "Membuatmu suka mengoleksi barang hitam, Tapi tetap nggak mau beli dompet warna kelam." },
    { name: "Khodam Buaya", meaning: "Menjaga agar kamu tetap tenang saat curhat, Tapi tetap cemas kalau nggak ada yang jawab sampai mat." },
    { name: "Khodam Bebek", meaning: "Membuatmu suka berenang di air keruh, Tapi nggak suka mandi kecuali airnya bersih biru." },
    { name: "Khodam Jangkrik", meaning: "Menjaga agar kamu selalu bising di malam hari, Biar tetangga sebelah nggak bisa tidur sampai pagi." },
    { name: "Khodam Kucing", meaning: "Membuatmu jago minta makanan, Biar dompet tetap tebal tanpa kesusahan." },
    { name: "Khodam Anjing", meaning: "Menjaga rumahmu dari tukang kredit, Tapi tetap takut sama tukang es krim yang selalu terbit." },
    { name: "Khodam Kuda Nil", meaning: "Membuatmu suka berendam di bak mandi, Tapi akhirnya keluar pas airnya udah jadi bersih lagi." },
    { name: "Khodam Panda", meaning: "Menjaga agar kamu selalu lucu dan malas, Biar bisa tiduran terus tanpa harus gerak balas." },
    { name: "Khodam Burung Merak", meaning: "Membuatmu suka pamer pakaian baru, Biar teman-teman lihat dan bilang kamu selalu laku." },
    { name: "Khodam Ikan Paus", meaning: "Menjaga agar kamu tetap besar di kolam kecil, Biar jadi raja kecil tanpa perlu ke laut besar." },
    { name: "Khodam Ulat", meaning: "Membuatmu suka makan daun (makanan sehat), Tapi tetap nyari cemilan manis di sore hari yang penat." },
    { name: "Khodam Zebra", meaning: "Menjaga agar kamu tetap setia dengan garis-garis hidup, Tapi tetap bingung kalau lihat jalanan yang ribet." },
    { name: "Khodam Kelelawar", meaning: "Membuatmu suka nongkrong di malam hari, Tapi tetap pulang kalau lampu jalan udah nyala sendiri." },
    { name: "Khodam Katak", meaning: "Menjaga agar kamu selalu lompat kegirangan, Tapi tetap hati-hati biar nggak kepleset dalam genangan." },
    { name: "Khodam Flamingo", meaning: "Membuatmu berdiri di satu kaki dengan anggun, Tapi tetap jatuh kalau ada yang dorong dari angin." },
    { name: "Khodam Penguin", meaning: "Menjaga agar kamu tetap dingin dalam situasi panas, Biar nggak kepanasan walau kipas angin rusak parah." },
    { name: "Khodam Cacing", meaning: "Membuatmu jago sembunyi di balik tugas, Tapi tetap dicari bos buat kerja tanpa bisa ngeles." },
    { name: "Khodam Burung Hantu", meaning: "Menjaga agar kamu tetap jago baca buku malam-malam, Biar bisa belajar terus tanpa ngantuk sampai salam." },
    { name: "Khodam Lebah", meaning: "Membuatmu selalu manis tapi bisa menyengat, Biar orang lain hati-hati kalau mau dekat." },
    { name: "Khodam Merpati", meaning: "Menjaga agar kamu tetap jago kirim surat cinta, Biar nggak ada yang tahu rahasia asmara di balik pintu." },
    { name: "Khodam Kelinci", meaning: "Membuatmu suka wortel dan lari cepat, Tapi tetap berhenti kalau ada snack di jalan sesat." },
    { name: "Khodam Kanguru", meaning: "Menjaga agar kamu selalu bawa barang di kantong, Biar nggak lupa bawa kunci rumah walau jalan jongkok." }
    // Tambahkan lebih banyak khodam sesuai keinginan
];

document.getElementById('khodam-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const inputContainer = document.getElementById('input-container');
    const loadingContainer = document.getElementById('loading-container');
    const resultContainer = document.getElementById('result-container');
    const resultNameElement = document.getElementById('result-name');
    const resultKhodamNameElement = document.getElementById('result-khodam-name');
    const resultKhodamMeaningElement = document.getElementById('result-khodam-meaning');
    const shareButton = document.getElementById('share-button');
    const retryButton = document.getElementById('retry-button');

    inputContainer.style.display = 'none';
    loadingContainer.style.display = 'block';
    resultContainer.style.display = 'none';

    // Load Lottie Animation
    lottie.loadAnimation({
        container: document.getElementById('lottie-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://assets6.lottiefiles.com/packages/lf20_q5pk6p1k.json' // URL of Lottie JSON animation file
    });

    setTimeout(() => {
        loadingContainer.style.display = 'none';

        // Get today's date in YYYY-MM-DD format
        const today = new Date().toISOString().split('T')[0];

        // Simple hash function
        const hashCode = (str) => {
            let hash = 0;
            for (let i = 0; i < str.length; i++) {
                const char = str.charCodeAt(i);
                hash = ((hash << 5) - hash) + char;
                hash |= 0; // Convert to 32bit integer
            }
            return hash;
        };

        const index = Math.abs(hashCode(name + today)) % khodams.length;
        const selectedKhodam = khodams[index];

        resultNameElement.textContent = `${name}`;
        resultKhodamNameElement.textContent = `${selectedKhodam.name}`;
        resultKhodamMeaningElement.textContent = `${selectedKhodam.meaning}`;
        resultContainer.style.display = 'block';

        shareButton.onclick = () => {
            const shareText = `Isi khodam dalam diriku (${name}): ${selectedKhodam.name} - ${selectedKhodam.meaning}`;
            if (navigator.share) {
                navigator.share({
                    title: 'Khodam Finder',
                    text: shareText,
                    url: window.location.href
                }).catch(console.error);
            } else {
                alert('Sharing not supported in this browser.');
            }
        };

        retryButton.onclick = () => {
            inputContainer.style.display = 'block';
            resultContainer.style.display = 'none';
            document.getElementById('name').value = '';
        };
    }, 5000);
});
