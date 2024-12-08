src = "https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.8/lottie.min.js"

const khodams = [
    { name: "Pocong Diet", meaning: "Meski terbungkus rapat, tetap berusaha langsing. Setiap malam sibuk menghitung kalori yang dikonsumsi waktu masih hidup." },
    { name: "Vampir Kepanasan", meaning: "Dulu suka hisap darah, sekarang pakai payung dan sunblock SPF 100 biar nggak meleleh di bawah matahari." },
    { name: "Hantu Jomblo", meaning: "Selalu nongkrong di pojok kuburan, berharap ada hantu lain yang ngajak kenalan. Udah lama nggak ada yang diajak ghosting, jadi beneran jadi ghost." },
    { name: "Kuntilanak Sering Salah", meaning: "Sering keliru muncul di rumah tetangga, malah bikin tamu undangan acara arisan kabur semua." },
    { name: "Jin Malas", meaning: "Suka tidur di dalam lampu, keluar cuma kalau ada permintaan, tapi sering ngedumel kalau permintaannya aneh-aneh." },
    { name: "Tuyul Belajar Nabung", meaning: "Nyuri uang sana-sini tapi nggak buat boros, semuanya ditabung di celengan babi buat beli mainan hantu." },
    { name: "Genderuwo Hobi Curhat", meaning: "Nongkrong di pohon beringin, curhat soal masalah cinta dan mantan yang nggak kunjung balik." },
    { name: "Hantu Lupa Password", meaning: "Sering kebingungan masuk ke dunia arwah karena selalu lupa password portalnya. Akhirnya terjebak di antara dua dunia." },
    { name: "Pocong Gemeteran", meaning: "Selalu menggigil tiap malam, bukan karena takut manusia, tapi karena lupa bawa selimut." },
    { name: "Vampir Vegetarian", meaning: "Dulu sih suka darah, sekarang lebih suka jus tomat dan salad. Bilangnya sih demi gaya hidup sehat." },
    { name: "Kuntilanak Nyasar", meaning: "Sering muncul di tempat yang salah, kayak di kamar mandi pria, cuma buat kemudian minta maaf dan pergi dengan kikuk." },
    { name: "Jin Kesasar", meaning: "Suka muncul di mimpi yang salah orang. Orang yang tadinya mimpi liburan malah jadi mimpi ketemu jin galau." },
    { name: "Tuyul Posesif", meaning: "Nyuri uang buat dia sendiri aja, nggak suka berbagi, bahkan sama teman tuyul lainnya. Pokoknya harta karun milik pribadi!" },
    { name: "Genderuwo Hobi Nongkrong", meaning: "Kalau hantu lain suka muncul buat nakut-nakutin, dia cuma suka nongkrong di tempat angker sambil ngopi." },
    { name: "Hantu Overthinking", meaning: "Kepikiran terus, meski udah jadi arwah. Masih mikirin apakah rumah berhantu tempat dia gentayangan itu udah cukup serem atau belum." },
    { name: "Pocong Lupa Sarung", meaning: "Selalu ngantuk karena nggak bisa tidur siang tanpa sarung favoritnya. Jadinya ngendon di kuburan sambil ngeluh kedinginan." },
    { name: "Vampir Hemat", meaning: "Daripada minum darah setiap hari, dia lebih milih makan bawang putih sedikit-sedikit buat kekebalan. Katanya biar irit darah." },
    { name: "Kuntilanak Gaul", meaning: "Suka nongkrong di mall, bukan di pohon. Doyan banget nge-tap baju putih di department store, biar penampilannya selalu up-to-date." },
    { name: "Jin Gagal Move On", meaning: "Masih ingat permintaan master yang dulu, padahal master-nya udah lama banget pindah ke dunia lain. Sering nyari-nyari alasan buat balik ke masa lalu." },
    { name: "Tuyul Pencinta Diskon", meaning: "Nyuri uang tapi cuma pas ada diskon besar. Uangnya buat belanja online di 'TuyulMall', situs favorit tuyul-tuyul." },
    { name: "Genderuwo Fitness", meaning: "Suka angkat pohon beringin buat jaga badan. Nggak cuma gentayangan, tapi juga berotot biar kelihatan lebih serem." },
    { name: "Hantu Pelupa", meaning: "Suka lupa udah mati, sering balik ke rumah dan bingung kenapa orang-orang teriak-teriak ketakutan." },
    { name: "Pocong Yoga", meaning: "Meski terbungkus kain kafan, tetep bisa pose lotus. Suka meditasi malam-malam biar auranya makin kuat." },
    { name: "Vampir Insomnia", meaning: "Nggak bisa tidur siang karena kebanyakan minum kopi. Padahal, siangnya harus ngumpet dari matahari, tapi malah sibuk buka mata lebar-lebar." },
    { name: "Kuntilanak Fashionista", meaning: "Gonta-ganti kain putih tiap malam biar nggak bosan. Udah kayak fashion show sendiri di tengah kuburan." },
    { name: "Jin Pelupa", meaning: "Suka lupa udah ngabulin permintaan apa aja, jadinya suka ketuker-tuker antara permintaan kaya mendadak sama jodoh ideal." },
    { name: "Tuyul Tukang Gosip", meaning: "Nyuri uang sambil dengerin cerita orang. Kalau udah gosipin manusia, bisa lupa balik ke dunia arwah." },
    { name: "Genderuwo Gabut", meaning: "Suka muncul terus ngilang tanpa alasan. Kadang muncul di TV pas lagi nggak ada acara menarik." },
    { name: "Hantu Galau", meaning: "Bingung mau gentayangan atau pindah dunia. Masih mempertimbangkan jadi influencer di dunia arwah." },
    { name: "Pocong Ketar-Ketir", meaning: "Selalu deg-degan kalau ada orang lewat dekat kuburannya. Takutnya, ada yang bawa garam, bikin dia nggak bisa gerak." },
    { name: "Vampir Kelewat Sibuk", meaning: "Jadwal hisap darah padat banget, kadang lupa jadwal makan malam. Suka bingung mana korban yang harus digigit duluan." },
    { name: "Kuntilanak Curhatan", meaning: "Suka muncul kalau dipanggil buat curhat. Udah jadi psikolog tanpa lisensi di dunia arwah." },
    { name: "Jin Susah Tidur", meaning: "Suka nongkrong di botol karena nggak bisa tidur. Insom banget, sering dengerin podcast sambil nunggu pagi." },
    { name: "Tuyul Anti-Ketahuan", meaning: "Selalu licin dan nggak pernah tertangkap. Udah kayak master ninja di dunia tuyul, tapi spesialisasinya nyuri recehan." },
    { name: "Genderuwo Kepo", meaning: "Suka ngintipin orang dari balik pohon. Hobinya ngamatin manusia sambil ngepoin status media sosial mereka." },
    { name: "Hantu Kaget", meaning: "Suka ngagetin diri sendiri pas ngaca. Tiap kali muncul tiba-tiba, dia juga ikut teriak bareng manusia." },
    { name: "Pocong Pelari", meaning: "Suka lari-lari di malam hari buat ngejaga kebugaran. Siapa tahu ada lomba marathon di dunia arwah." },
    { name: "Vampir Sering Salah Orang", meaning: "Suka salah gigit, korban yang seharusnya sehat malah jadi lebih bugar karena dia nyedot darahnya orang yang salah." },
    { name: "Kuntilanak Tukang Foto", meaning: "Suka muncul di background foto orang, terus diem-diem ikut photobombing tanpa izin. Udah kayak selebgram dunia arwah." },
    { name: "Jin Galau Teknologi", meaning: "Suka bingung dengan permintaan yang modern. Masih ketinggalan zaman, nggak ngerti gimana ngabulin permintaan followers Instagram." },
    { name: "Tuyul Matre", meaning: "Suka milih-milih uang yang dicuri, cuma mau yang baru dan wangi. Kalau dapet uang lusuh, langsung dibuang." },
    { name: "Genderuwo Tukang Pamer", meaning: "Suka pamer kekuatan di depan manusia. Kadang suka sengaja nunjukin otot-ototnya yang besar biar kelihatan lebih seram." },
    { name: "Hantu Introvert", meaning: "Suka gentayangan sendirian. Kalau rame-rame, dia malah sembunyi di pojokan dan berharap nggak ada yang nyadar." },
    { name: "Pocong Suka Tidur", meaning: "Selalu ketiduran di dalam kubur. Malah kadang kelewatan gentayangannya karena asyik mimpi." },
    { name: "Vampir Sering Salah Jam", meaning: "Suka muncul pas siang hari gara-gara lupa setting alarm. Jadinya kepanasan dan harus buru-buru balik ke peti." },
    { name: "Kuntilanak Sering Salah Tempat", meaning: "Suka nongol di tempat-tempat aneh, kayak di dalam lift, terus bingung kenapa nggak ada orang yang takut." },
    { name: "Jin Hobi Main Game", meaning: "Suka nongkrong di lampu minyak sambil main game online. Bukan cuma manusia, jin juga butuh hiburan." },
    { name: "Tuyul Sering Salah Tarik", meaning: "Suka narik uang yang salah. Harusnya narik seratus ribu, eh, malah dapet koin receh." },
    { name: "Genderuwo Fans Berat", meaning: "Suka nongkrong di rumah selebriti dunia arwah. Penggemar setia, selalu hadir di setiap penampakan selebriti." },
    { name: "Hantu Ketinggalan Zaman", meaning: "Suka muncul dengan gaya jadul. Masih pakai kain kafan kuno, padahal hantu lain udah upgrade style." },
    { name: "Pocong Nganggur", meaning: "Udah lama nggak ada yang panggil. Suka nongkrong di kuburan sambil nunggu job, tapi sepi terus." }
    
    // Tambahkan lebih banyak khodam sesuai keinginan
];

document.getElementById('khodam-form').addEventListener('submit', function (event) {
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
