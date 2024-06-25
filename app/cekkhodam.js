src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.8/lottie.min.js"

const khodams = [
    { name: "Kipas Angin", meaning: "Selalu bikin adem suasana, meski suka bikin ribut kalau berputar terlalu kencang." },
    { name: "Senter Hidup", meaning: "Bisa menerangi kegelapan hidupmu dengan senyumnya yang menyinari." },
    { name: "Tas Tidur", meaning: "Selalu siap menemanimu tidur nyenyak di setiap malam." },
    { name: "Sapu Lidi", meaning: "Bisa membersihkan masalah dengan cepat meski dalam jumlah yang banyak." },
    { name: "Payung", meaning: "Selalu melindungi dari segala cuaca buruk, baik itu hujan deras atau panas terik." },
    { name: "Pensil Ajaib", meaning: "Mampu menghapus kesalahan dan membuat garis baru untuk masa depan yang lebih baik." },
    { name: "Sarung Bantal", meaning: "Selalu nyaman untuk dijadikan tempat beristirahat setelah seharian lelah bekerja." },
    { name: "Kunci Inggris", meaning: "Bisa membuka pintu kesuksesan dengan kemampuan adaptasi dan perbaikan yang cepat." },
    { name: "Piring Pecah", meaning: "Meski terlihat rapuh, tapi memiliki keindahan dan keunikan tersendiri." },
    { name: "Tali Sepatu", meaning: "Menyatukan langkah dalam setiap perjalanan hidupmu." },
    { name: "Jam Dinding", meaning: "Selalu tepat waktu dan mengingatkanmu akan pentingnya waktu dalam hidup." },
    { name: "Gunting", meaning: "Mampu memotong masalah menjadi lebih mudah diatasi." },
    { name: "Tempat Sampah", meaning: "Menyimpan segala hal yang tidak berguna agar tidak mengotori kehidupanmu." },
    { name: "Korek Api", meaning: "Menghidupkan semangat di setiap langkah kehidupanmu." },
    { name: "Keran Air", meaning: "Selalu mengalirkan kebaikan dan memberikan kesegaran dalam kehidupan." },
    { name: "Kabel Charger", meaning: "Menyuplai energi dan semangat agar tetap terhubung dengan dunia." },
    { name: "Botol Minum", meaning: "Menyediakan kebutuhan akan hidrasi dan kebutuhan akan tetap sehat." },
    { name: "Kompor Gas", meaning: "Memberikan kehangatan dan kelezatan dalam setiap hidangan kehidupan." },
    { name: "Pisau Dapur", meaning: "Mampu memotong masalah menjadi lebih mudah diatasi." },
    { name: "Penghapus", meaning: "Menghapus kesalahan dan memberikan kesempatan untuk memulai hal baru." },
    { name: "Kasur Empuk", meaning: "Memberikan kenyamanan dan kelembutan dalam setiap langkah tidurmu." },
    { name: "Kamera", meaning: "Mengabadikan kenangan indah dalam setiap momen kehidupan." },
    { name: "Lampu Meja", meaning: "Memberikan penerangan dalam kegelapan dan memberikan inspirasi." },
    { name: "Rak Buku", meaning: "Menyimpan pengetahuan dan pengalaman untuk kebijaksanaan di masa depan." },
    { name: "Penggaris", meaning: "Memberikan arah dan ukuran dalam setiap langkah kehidupan." },
    { name: "Korek Api", meaning: "Menghidupkan semangat di setiap langkah kehidupanmu." },
    { name: "Papan Tulis", meaning: "Menjadi tempat untuk mencatat setiap langkah dan impian dalam kehidupan." },
    { name: "Sepatu", meaning: "Menyediakan langkah nyaman dalam menjalani kehidupan." },
    { name: "Topi", meaning: "Melindungi dari teriknya matahari dan memberikan gaya dalam berpenampilan." },
    { name: "Kardus Bekas", meaning: "Menjadi bukti bahwa kita bisa menjadi lebih baik meski dari awal yang sederhana." },
    { name: "Lilin", meaning: "Menyinari kegelapan dan memberikan harapan dalam setiap langkah." },
    { name: "Gembok", meaning: "Melindungi dari hal-hal negatif dan memberikan rasa aman dalam hidup." },
    { name: "Selimut", meaning: "Memberikan hangat dan kenyamanan dalam setiap momen istirahat." },
    { name: "Pensil Warna", meaning: "Memberikan warna dalam kehidupan dan memberikan keceriaan dalam setiap langkah." },
    { name: "Alat Musik", meaning: "Memberikan keharmonisan dalam kehidupan dan membangkitkan semangat." },
    { name: "Gelang", meaning: "Menyatukan ikatan persahabatan dan memberikan kenangan yang indah." },
    { name: "Kolam Renang", meaning: "Memberikan kesegaran dan keceriaan dalam hidup." },
    { name: "Obeng", meaning: "Bisa memperbaiki kesalahan dan memberikan solusi dalam setiap masalah." },
    { name: "Tempat Tidur", meaning: "Memberikan kenyamanan dan kelembutan dalam setiap tidur." },
    { name: "Kipas Angin", meaning: "Selalu bikin adem suasana, meski suka bikin ribut kalau berputar terlalu kencang." },
    { name: "Senter Hidup", meaning: "Bisa menerangi kegelapan hidupmu dengan senyumnya yang menyinari." },
    { name: "Tas Tidur", meaning: "Selalu siap menemanimu tidur nyenyak di setiap malam." },
    { name: "Sapu Lidi", meaning: "Bisa membersihkan masalah dengan cepat meski dalam jumlah yang banyak." },
    { name: "Payung", meaning: "Selalu melindungi dari segala cuaca buruk, baik itu hujan deras atau panas terik." },
    { name: "Pensil Ajaib", meaning: "Mampu menghapus kesalahan dan membuat garis baru untuk masa depan yang lebih baik." },
    { name: "Sarung Bantal", meaning: "Selalu nyaman untuk dijadikan tempat beristirahat setelah seharian lelah bekerja." },
    { name: "Kunci Inggris", meaning: "Bisa membuka pintu kesuksesan dengan kemampuan adaptasi dan perbaikan yang cepat." },
    { name: "Piring Pecah", meaning: "Meski terlihat rapuh, tapi memiliki keindahan dan keunikan tersendiri." },
    { name: "Tali Sepatu", meaning: "Menyatukan langkah dalam setiap perjalanan hidupmu." },
    { name: "Jam Dinding", meaning: "Selalu tepat waktu dan mengingatkanmu akan pentingnya waktu dalam hidup." },
    { name: "Gunting", meaning: "Mampu memotong masalah menjadi lebih mudah diatasi." },
    { name: "Tempat Sampah", meaning: "Menyimpan segala hal yang tidak berguna agar tidak mengotori kehidupanmu." },
    { name: "Korek Api", meaning: "Menghidupkan semangat di setiap langkah kehidupanmu." },
    { name: "Keran Air", meaning: "Selalu mengalirkan kebaikan dan memberikan kesegaran dalam kehidupan." },
    { name: "Kabel Charger", meaning: "Menyuplai energi dan semangat agar tetap terhubung dengan dunia." },
    { name: "Botol Minum", meaning: "Menyediakan kebutuhan akan hidrasi dan kebutuhan akan tetap sehat." },
    { name: "Kompor Gas", meaning: "Memberikan kehangatan dan kelezatan dalam setiap hidangan kehidupan." },
    { name: "Pisau Dapur", meaning: "Mampu memotong masalah menjadi lebih mudah diatasi." },
    { name: "Penghapus", meaning: "Menghapus kesalahan dan memberikan kesempatan untuk memulai hal baru." },
    { name: "Kasur Empuk", meaning: "Memberikan kenyamanan dan kelembutan dalam setiap langkah tidurmu." }
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
