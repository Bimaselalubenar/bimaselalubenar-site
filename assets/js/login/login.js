const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");

function generateCaptcha() {
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < 5; i++) {
        captcha += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }
    return captcha;
}

function refreshCaptcha() {
    const captchaElement = document.getElementById("captcha");
    captchaElement.textContent = generateCaptcha();
}

document
    .getElementById("refreshCaptcha")
    .addEventListener("click", refreshCaptcha);

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const captchaInput = document.getElementById("captchaInput").value;
    const captcha = document.getElementById("captcha").textContent;
    const user = getUserByEmail(email);

    if (captcha !== captchaInput) {
        errorMessage.innerText = "CAPTCHA salah. Coba lagi.";
        refreshCaptcha();
        return;
    }

    if (user && user.password === password) {
        // Google Analytics Event Tracking
        gtag('event', 'login', {
            'event_category': 'User',
            'event_label': email,
            'value': 1
        });
        // Akhir dari penambahan event tracking

        // Show SweetAlert success notification
        Swal.fire({
            title: 'User tersedia',
            text: 'Klik masuk untuk akses dashboard.',
            icon: 'success',
            confirmButtonText: 'Masuk Sekarang'
        }).then(() => {
            // Store the user information and redirect to dashboard
            localStorage.setItem("currentUser", JSON.stringify(user));
            window.location.href = "dashboard.html";
        });
    } else {
        errorMessage.innerText = "Email dan Password salah.";
    }
});

// Data akun pengguna
let users = [
    { name: 'Bimaselalubenar', email: 'Bima@gmail.com', password: 'Bima', branch: 'Madiun', position: 'PDCA', cabang: 'MPM Madiun', subscribed: true, expiryDate: '2024-09-30' },
    { name: 'Bimaselalubenar1', email: 'Bima1@gmail.com', password: 'Bima', branch: 'Madiun', position: 'PDCA', cabang: 'MPM Madiun', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Bimaselalubenar2', email: 'Bima2@gmail.com', password: 'Bima2', branch: 'Madiun', position: 'PDCA', cabang: 'MPM Madiun', subscribed: true, expiryDate: 'lifetime' },
    { name: 'Bimaselalubenar3', email: 'Bima3@gmail.com', password: 'Bima3', branch: 'Kota Madiun', position: 'PDCA', cabang: 'MPM MADIUN', subscribed: false, expiryDate: null },
    { name: 'Sudibyo', email: 'mpm.madiun1@gmail.com', password: 'Pangsud91', branch: 'Kota Madiun', position: 'PDCA', cabang: 'MPM MADIUN', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Mifta', email: 'mpmngagel.sby@gmail.com', password: 'MPMh0010', branch: 'Kota Surabaya', position: 'PDCA', cabang: 'MPM NGAGEL', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Raisa Jelita', email: 'h0900.mpmmotor.surabaya@gmail.com', password: 'Mst170**', branch: 'Surabaya', position: 'PDCA', cabang: 'MPM Motor Mastrip', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Nindy Ayu Tristami', email: 'mpmbjn@gmail.com', password: 'Mpmbjn!#', branch: 'Kabupaten Bojonegoro', position: 'PDCA', cabang: 'MPM Motor Bojonegoro', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Elna Kurnia Cahya', email: 'Elnaniakurnia24@gmail.com', password: 'Elnani@99', branch: 'Nganjuk', position: 'PDCA', cabang: 'MPM Motor Nganjuk', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'ENNY KARTIKANING ADI', email: 'mpmmotorsukun.malang@gmail.com', password: 'Kartikaning80!?', branch: 'Malang', position: 'PDCA', cabang: 'MPM Motor Sukun', subscribed: true, expiryDate: '2024-11-10' },
    { name: 'Ferdy Okta Pramanda', email: 'pdca.kediri@gmail.com', password: 'Nop4ssword', branch: 'Kota Kediri', position: 'PDCA', cabang: 'MPM Motor Kediri', subscribed: true, expiryDate: '2024-11-15' },
    { name: 'Indirwan Djara', email: 'indirwandjara07@gmail.com', password: 'Iwan123#!', branch: 'Kota Kupang', position: 'PDCA', cabang: 'MPM Motor Kupang', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'rudi ona', email: 'mpmpku.official@gmail.com', password: '1@MPMpku', branch: 'Pekanbaru', position: 'PDCA', cabang: 'MPM Motor Pekanbaru', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Hamam Nasrodin', email: 'mpm.bumibungkarno@gmail.com', password: 'Supriad!79', branch: 'Blitar', position: 'PDCA', cabang: 'MPM Motor Blitar', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'SILVESTER DIMAS SB', email: 'mpm.basra@gmail.com', password: 'mpmbasr@7173!', branch: 'Kota Malang', position: 'PDCA', cabang: 'MPM Motor Basra', subscribed: true, expiryDate: '2024-11-15' },
    { name: 'BAKTI ARI WIJAYA', email: 'MPMMOTOR.LAROS@GMAIL.COM', password: '@jrk?49FLP', branch: 'BANYUWANGI', position: 'PDCA', cabang: 'MPM Motor Banyuwangi', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'PRITA AYU GIANING RETNOWATI', email: 'pritaayu92@gmail.com', password: 'Nop4$$word!', branch: 'SURABAYA', position: 'PDCA', cabang: 'MPM Motor Simpang', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'DECKY KURNIAWAN', email: 'kurniawan.decky90@gmail.com', password: 'Decky@3190', branch: 'Jombang', position: 'PDCA', cabang: 'MPM Motor Jombang', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Ludfi Riyo', email: 'ludfi.riyo@gmail.com', password: 'Nop4$$word!', branch: 'Malang', position: 'PDCA', cabang: 'MPM Motor Kepanjen', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Tossy Aguk', email: 'admin.pare@mpm-motor.com', password: 'pkbangsa13C!', branch: 'Kediri', position: 'PDCA', cabang: 'MPM Motor Pare', subscribed: true, expiryDate: '2024-11-10' },
    { name: 'MUHAMMAD DAVID SULTANSYAH', email: 'davidsultansyah@gmail.com', password: 'mpmlarangan1', branch: 'SIDOARJO', position: 'PDCA', cabang: 'MPM Motor Larangan', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Eko Saputro', email: 'ekoputra1999@gmail.com', password: 'mpmngawi2023', branch: 'Ngawi', position: 'PDCA', cabang: 'MPM Motor Ngawi', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'LALU DEDY SISWARI AFRIZAL', email: 'laludedysiswariafrizal@gmail.com', password: '99Lht!@#$', branch: 'Mataram', position: 'PDCA', cabang: 'MPM Motor Mataram', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'PULUNG SIWANATA', email: 'pulung.siwanata91@gmail.com', password: 'Mpmb@b@t241!', branch: 'Lamongan', position: 'PDCA', cabang: 'MPM Motor Babat', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Afif Rizka R', email: 'Afif.rizkar@gmail.com', password: 'MpmMotorBondowoso', branch: 'Bondowoso', position: 'PDCA', cabang: 'MPM Motor Bondowoso', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'sri desi', email: 'sridesi139@gmail.com', password: 'Sridesi139', branch: 'bogor', position: 'PDCA', cabang: 'MPM Motor Bogor', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'NESSIA KRISWANINGYU', email: 'nessyakriswaningyu051194@gmail.com', password: '@MPMmjk19', branch: 'MOJOKERTO', position: 'PDCA', cabang: 'MPM Motor Mojokerto', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Mifta', email: 'mpmngagel.sby@gmail.com', password: 'MPMh0010', branch: 'Kota Surabaya', position: 'PDCA', cabang: 'MPM NGAGEL', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'FAHRI SETIAWAN', email: 'fahri.mpmpalu13105@gmail.com', password: 'dua+2=empat', branch: 'Palu', position: 'PDCA', cabang: 'MPM Motor Palu', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'DEVARA MARYELLA', email: 'Devaramaryella1@gmail.com', password: 'Devara1*', branch: 'Tuban', position: 'PDCA', cabang: 'MPM Motor Tuban', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Defliza Widayanti', email: 'defliza96@gmail.com', password: 'D3fLiza96W', branch: 'Prabumulih', position: 'PDCA', cabang: 'MPM Motor Prabumulih', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'M Rizky HIdayat', email: 'rizkydayat628@gmail.com', password: 'Smandamania@123', branch: 'Lombok Timur', position: 'PDCA', cabang: 'MPM Motor Lotim', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'NURUL AINI SIREGAR', email: 'ainisiregar0104@gmail.com', password: '@ini0104', branch: 'KOTA MEDAN', position: 'PDCA', cabang: 'MPM Motor Medan', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Dodi Sujono', email: 'mpmgateway.waru@gmail.com', password: 'mpm@gateway', branch: 'Sidoarjo', position: 'PDCA', cabang: 'MPM Motor Gateway', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Fuj Andayani', email: 'fujiandayani40@gmail.com', password: 'Mpm13436!', branch: 'Pontianak', position: 'PDCA', cabang: 'MPM Motor Pontianak', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'IKMAL WIDODO ', email: 'Ikmal.widodo@gmail.com', password: 'Mpmr30G0010', branch: 'Ponorogo', position: 'PDCA', cabang: 'MPM Motor Ponorogo', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'ERIS SAFITRI MARDIANA', email: 'jembermpmkebonsari@gmail.com', password: 'MpmKebonsariJember', branch: 'JEMBER', position: 'PDCA', cabang: 'MPM Motor Jember Kebonsari', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Hafeed syaif ali', email: 'aphied.aliali@gmail.com', password: 'Hafeedmpm203', branch: 'Kota tangerang', position: 'PDCA', cabang: 'MPM Motor Tangerang', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'EVIANA ZULAIKHOH', email: 'mpmmotortulungagung.pdca@gail.com', password: '3VI@NA1984', branch: 'Kota Tulungagung', position: 'PDCA', cabang: 'MPM Motor Tulungagung', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Benny Rahmatillah', email: 'pasuruan.mpm@gmail.com', password: 'Kertas@4', branch: 'Pasuruan', position: 'PDCA', cabang: 'MPM Motor Pasuruan', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Bhastian Juniardi Setiawan', email: 'bhast14n@gmail.com', password: 'BH4571AN', branch: 'Kota Pasuruan', position: 'PDCA', cabang: 'MPM Motor Sukorejo', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Alfian', email: 'mpm.gresik@gmail.com', password: 'gresik', branch: 'Gresik', position: 'PDCA', cabang: 'MPM MOTOR GRESIK', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'indah permata sari', email: 'admin.batam@mpm-motor.com', password: 'admin123!', branch: 'kota batam', position: 'PDCA', cabang: 'MSO Batam', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Ahmad Khoirun', email: 'ahmadkhoirun92@gmail.com', password: 'uunmpm92', branch: 'Tuban', position: 'PDCA', cabang: 'Tuban', subscribed: true, expiryDate: '2024-11-15' },
    { name: 'Rizallo Novega', email: 'rizallo.rn@gmail.com', password: 'DarkenD123', branch: 'Ponorogo', position: 'PDCA', cabang: 'MPM MOTOR PONOROGO', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'EKO ARI WIBOWO', email: 'datacrm4245@gmail.com', password: 'sosmedMPMdipo4245', branch: 'JEMBER', position: 'PDCA', cabang: 'MPM DIPONEGORO JEMBER', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Nurazimah', email: 'nurazimahharuna@gmail.com', password: 'Imong220701', branch: 'Makassar', position: 'PDCA', cabang: 'MPM MOTOR MAKASSAR', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Ahmadkhoirunns', email: 'ahmadkhoirun92@gmail.com', password: 'akudewe01', branch: 'Pasuruan', position: 'PDCA', cabang: 'MPM MOTOR SUKOREJO', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'NURAZIMAH', email: 'nurazimahharuna@gmil.com', password: 'MPM@13420', branch: 'MAKASSAR', position: 'PDCA', cabang: 'MPM MOTOR MAKASSAR', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Riko Pusponagari', email: 'nagari.riko@gmail.com', password: 'riko140593', branch: 'Nganjuk', position: 'PDCA', cabang: 'MPM MOTOR NGANJUK', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Bastian Setiawan', email: 'bhast14n@gmail.com', password: 'Sukorejo', branch: 'Pasuruan', position: 'PDCA', cabang: 'MPM MOTOR SUKOREJO', subscribed: false, expiryDate: '2024-08-27' },
    { name: '', email: '', password: '', branch: '', position: '', cabang: '', subscribed: false, expiryDate: '2024-08-30' },
    // SALES BATCH 1 & 2
    { name: 'DEDE MARLINA', email: 'dedechubbii@gmail.com', password: 'Dedempm203', branch: 'Kota Tangerang', position: 'SALES ONLINE', cabang: 'MPM Motor Tangerang', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Wahyu jadmiko', email: 'Wahyujat70@gmail.com', password: 'wahyu12345', branch: 'Nganjuk', position: 'SALES ONLINE', cabang: 'MPM Motor Nganjuk', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Sinta dwi cahyani', email: 'sintacika01@gmail.com', password: 'sinta1', branch: 'Malang', position: 'SALES ONLINE', cabang: 'MPM Motor Kediri', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Rochmanul karim', email: 'rochmanulkarim1@gmail.com', password: 'Cakkarim07@', branch: 'KAB. PASURUAN', position: 'SALES ONLINE', cabang: 'mpm sukorejo', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'AJI ADITYA PRAMANA', email: 'ajiapram4@gmail.com', password: 'ajiap1234', branch: 'KAB PASURUAN', position: 'SALES ONLINE', cabang: 'MPM SUKOREJO', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Rizky firmansyah', email: 'firmansyahrizky423@gmail.com', password: 'Rafly22', branch: 'KAB PASURUAN', position: 'SALES ONLINE', cabang: 'Sukorejo', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Linatul Husna', email: 'linahusna62@gmail.com', password: '123240', branch: 'Pasuruan', position: 'SALES ONLINE', cabang: 'MPM Motor Sukorejo', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Nidhom', email: 'nidhom81@gmail.com', password: 'Nelly_81', branch: 'Pasuruan', position: 'SALES ONLINE', cabang: 'MPM MOTOR SUKOREJO', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'LUCKY BAYUKURNIAWAN', email: 'luckybayu345@gmail.com', password: 'lucky123', branch: 'Kota Madiun', position: 'Pengunjung', cabang: 'MPM MOTOR MADIUN', subscribed: false, expiryDate: '2024-08-30' },
    { name: '', email: '', password: '', branch: '', position: '', cabang: '', subscribed: false, expiryDate: '2024-08-30' },
    // SALES BATCH 3
    { name: 'Moh Muhtarom Arroisi', email: 'muhtarom.arroisi@gmail.com', password: '708090', branch: 'JEMBER', position: 'SALES ONLINE', cabang: 'MPM MOTOR JEMBER KEBONSARI', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Zainal Abidin', email: 'zainalabdn10021996@gmail.com', password: 'Lovers46', branch: 'Kota Surabaya', position: 'SALES ONLINE', cabang: 'MPM MOTOR MASTRIP', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'AGUS SETIA WULANDARI', email: 'wulan.mpmpare@gmail.com', password: 'Wulan1208', branch: 'KEDIRI', position: 'SALES ONLINE', cabang: 'MPM MOTOR PARE', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'abdus shomad', email: 'somadabdus811@gmail.com', password: 'banjarsari1', branch: 'kota pasuruan', position: 'SALES ONLINE', cabang: 'MPM MOTOR PASURUAN', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Muji Hidayat', email: 'mujihidayat99@gmail.com', password: 'alisha270284', branch: 'Bondowoso', position: 'SALES ONLINE', cabang: 'MPM MOTOR BONDOWOSO', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'RISKY MPM MOTOR JOMBANG', email: 'riskyrace10@gmail.com', password: 'Cengngeng10', branch: 'Jombang', position: 'SALES ONLINE', cabang: 'MPM MOTORJOMBANG', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'MUCHAMMAD FATONI ', email: 'muchammadfatoni1@gmail.com', password: 'mpmlarangan1', branch: 'SIDOARJO ', position: 'SALES ONLINE', cabang: 'MPM MOTOR LARANGAN', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'PUTRI DWI PARWITASARI', email: 'putrikayana29@gmail.com', password: 'putri040791', branch: 'madiun', position: 'SALES ONLINE', cabang: 'MPM MOTOR MADIUN', subscribed: true, expiryDate: '2024-11-15' },
    { name: 'DINAH MARWAH FADJRIAH', email: 'dinahmarwah@gmail.com', password: 'dinahasayangm', branch: 'Blitar', position: 'SALES ONLINE', cabang: 'MPM MOTOR BLITAR', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Mir Alexander Yuza', email: 'miryuza116@gmail.com', password: '300905', branch: 'Kediri', position: 'SALES ONLINE', cabang: 'MPM MOTOR PARE', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Dinah Marwah Fadjriah', email: 'dinahmarwah@gmail.com', password: 'dinahsayangm', branch: 'Blitar', position: 'SALES ONLINE', cabang: 'MPM MOTOR BLITAR', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'SHERLY MEYLINDA S ', email: 'sherlymeylinda55@gmail.com', password: 'passwordmpm14', branch: 'Nganjuk ', position: 'SALES ONLINE', cabang: 'MPM MOTOR NGANJUK', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Moh Muhtarom Arroisi', email: 'muhtarom.arroisi@gmail.com', password: '708090', branch: 'JEMBER', position: 'SALES ONLINE', cabang: 'MPM MOTOR JEMBER KEBONSARI', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'lia hartati', email: 'liahartati64@yahoo.com', password: 'jon1986*', branch: 'batam', position: 'SALES ONLINE', cabang: 'MPM MOTOR BATAM', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Ain Septiani', email: 'ainseptiani@gmail.com', password: 'Ainsepti10', branch: 'Malang', position: 'SALES ONLINE', cabang: 'MPM MOTOR KEPANJEN', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Maderson ', email: 'Inihondabatam@gmail.com', password: 'Valentha1', branch: 'Batam', position: 'SALES ONLINE', cabang: 'MPM MOTOR BATAM', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'andre', email: 'andreijo222@gmail.com', password: 'andre666', branch: 'kediri', position: 'SALES ONLINE', cabang: 'MPM MOTOR KEDIRI', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Trio wahyu saputro', email: 'triowahyu45@gmail.com', password: 'Triowahyu29', branch: 'Surabaya', position: 'SALES ONLINE', cabang: 'MPM MOTOR GATEWAY', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Naufal', email: 'naufalfthur@gmail.com', password: 'Naufal123', branch: 'Blitar', position: 'SALES ONLINE', cabang: 'MPM MOTOR BLITAR', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Wahyu adi candra', email: 'wahyuac24@gmail.com', password: 'MPM_ked1r1', branch: 'Kota kediri', position: 'SALES ONLINE', cabang: 'MPM MOTOR KEDIRI', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'triana nana', email: 'nanastriana60@gmail.com', password: 'triananingrum28', branch: 'madiun', position: 'SALES ONLINE', cabang: 'MPM MOTOR MADIUN', subscribed: false, expiryDate: '2024-10-30' },
    { name: 'Joko tungkul', email: 'jokotungkul84@gmail.com', password: 'cintaku', branch: 'Madiun ', position: 'SALES ONLINE', cabang: 'MPM MOTOR MADIUN', subscribed: false, expiryDate: '2024-10-11' },
    { name: 'Rodhotul jannah', email: 'marsyanurazzahra@gmail.com', password: 'Marsyamirza', branch: 'Malang', position: 'SALES ONLINE', cabang: 'MPM MOTOR KEPANJEN', subscribed: false, expiryDate: '2024-10-30' },
    { name: 'Ahmad Rifki Santoso ', email: 'ahmadrivki313@gmail.com', password: 'Freedomm354', branch: 'Mojokerto ', position: 'SALES ONLINE', cabang: 'MPM MOTOR MOJOKERTO', subscribed: false, expiryDate: '2024-10-30' },
    { name: 'Yudha pratama', email: 'yudha.tama2307@gmail.com', password: '12345', branch: 'BATAM', position: 'SALES ONLINE', cabang: 'MPM MOTOR BATAM', subscribed: false, expiryDate: '2024-10-30' },
    { name: 'Yudha pratama', email: 'yudha.tama2307@gmail.com', password: '12345', branch: 'BATAM', position: 'SALES ONLINE', cabang: 'MPM MOTOR BATAM', subscribed: false, expiryDate: '2024-10-30' },
    { name: 'Mochammad Syahrul Dwi Cahyono ', email: 'syahruldwicahyono9821@gmail.com', password: '12345', branch: 'Gresik', position: 'SALES ONLINE', cabang: 'MPM MOTOR GRESIK', subscribed: false, expiryDate: '2024-10-30' },
    { name: 'khusnul muaniah', email: 'khusnulmuaniah23@gmail.com', password: '11Octo01', branch: 'lamongan', position: 'SALES ONLINE', cabang: 'MPM MOTOR BABAT', subscribed: false, expiryDate: '2024-10-30' },
    { name: 'Risky MPM ', email: 'riskyrace10@gmail.com', password: 'Cengngeng10', branch: 'Jombang', position: 'SALES ONLINE', cabang: 'MPM MOTORJOMBANG', subscribed: false, expiryDate: '2024-10-30' },
    { name: 'RORO NENI HENDRA KUSUMAWATI', email: 'roronenihk123@gmail.com', password: 'roroneni1223', branch: 'BOJONEGORO', position: 'SALES ONLINE', cabang: 'MPM MOTOR BOJONEGORO', subscribed: false, expiryDate: '2024-10-30' },
    { name: 'Aning nazila faricha ', email: 'aningnazilafaricha18@gmail.com', password: 'Icutcantik ', branch: 'Jombang', position: 'SALES ONLINE', cabang: 'MPM MOTORJOMBANG', subscribed: false, expiryDate: '2024-10-30' },
    { name: 'CHRISTIAN RUSMARA', email: 'christian.rusmara92@gmail.com', password: '@Gitar92', branch: 'MALANG', position: 'SALES ONLINE', cabang: 'MPM MOTOR SUKUN', subscribed: false, expiryDate: '2024-10-30' },
    { name: 'Randi Ridwan pratama', email: 'reendiridwan@gmail.com', password: 'Dedede123', branch: 'Batam', position: 'SALES ONLINE', cabang: 'MPM MOTOR BATAM', subscribed: false, expiryDate: '2024-10-30' },
    { name: 'Ahmad Dani samsudin ', email: 'ahmaddanisam@gmail.com', password: 'Dani12', branch: 'Bogor ', position: 'SALES ONLINE', cabang: 'MPM MOTOR BOGOR', subscribed: false, expiryDate: '2024-10-30' },
    { name: 'Ani setiyanti', email: 'anisetiyanti9@com.id', password: 'Sella023', branch: 'Malang', position: 'SALES ONLINE', cabang: 'MPM MOTOR SUKUN', subscribed: false, expiryDate: '2024-10-30' },
    { name: 'Herman Saputra ', email: 'hermansaputra2212@gmail.com', password: 'Herman221290', branch: 'Batam', position: 'SALES ONLINE', cabang: 'MPM MOTOR BATAM', subscribed: false, expiryDate: '2024-10-30' },
    { name: 'Yuzki', email: 'yuzki.amrullah@gmail.com', password: 'yuskiku', branch: 'Jember', position: 'SALES ONLINE', cabang: 'MPM MOTOR JEMBER DIPONEGORO', subscribed: false, expiryDate: '2024-10-30' },
    { name: 'Lukman hakim ', email: 'lukmanhondamotorjember@gmail.com', password: '123lukman123', branch: 'Jember ', position: 'SALES ONLINE', cabang: 'MPM MOTOR JEMBER DIPONEGORO', subscribed: false, expiryDate: '2024-10-30' },
    { name: 'NOVI AMELIA', email: 'noviameliaaa14@gmail.com', password: '12345', branch: 'BATAM', position: 'SALES ONLINE', cabang: 'MPM MOTOR BATAM', subscribed: false, expiryDate: '2024-10-30' },
    { name: 'Eko Nur mawanto', email: 'enurmawanto@gmail.com', password: 'Ekonur040996', branch: 'Jember', position: 'SALES ONLINE', cabang: 'MPM MOTOR JEMBER DIPONEGORO', subscribed: false, expiryDate: '2024-10-30' },
    { name: 'Enggar Sendha Risaldhi ', email: 'enggarsr123@gmail.com', password: 'Akuenggar123', branch: 'Tulungagung ', position: 'SALES ONLINE', cabang: 'MPM MOTOR TULUNGAGUNG', subscribed: false, expiryDate: '2024-10-30' },
    { name: 'Liana timur', email: 'cantikliana3@gmail.com', password: 'L!tYuda@76', branch: 'Jember ', position: 'SALES ONLINE', cabang: 'MPM MOTOR JEMBER DIPONEGORO', subscribed: false, expiryDate: '2024-10-30' },
    { name: 'Destiana Rizky ', email: 'destianarizky458@gmail.com', password: 'rizky000', branch: 'TULUNGAGUNG ', position: 'SALES ONLINE', cabang: 'MPM MOTOR TULUNGAGUNG', subscribed: false, expiryDate: '2024-10-30' },
    { name: 'IDA LISTRIANI', email: 'idalistriani26@gmail.com', password: '55555ida', branch: 'Tulungagung', position: 'SALES ONLINE', cabang: 'MPM MOTOR TULUNGAGUNG', subscribed: false, expiryDate: '2024-10-30' },
    { name: 'ELY KURNIA', email: 'ely.kurnia@mpm-motor.com', password: 'tb^WE&8k', branch: 'NGAWI', position: 'KACAB', cabang: 'MPM MOTOR NGAWI', subscribed: false, expiryDate: '2024-10-30' },
    { name: 'Amelia Saputri', email: 'saputriamelia26@gmail.com', password: 'Amel117872', branch: 'Jember', position: 'SALES ONLINE', cabang: 'MPM MOTOR JEMBER KEBONSARI', subscribed: false, expiryDate: '2024-10-30' },
    { name: 'HAIRUL UMAM', email: 'uhairul039@gmail.com', password: 'HairulUmam061896', branch: 'JEMBER', position: 'SALES ONLINE', cabang: 'MPM MOTOR JEMBER KEBONSARI', subscribed: false, expiryDate: '2024-10-30' },
    { name: 'Eko Nur mawanto', email: 'ekonurmawanto@gmail.com', password: 'Ekonur040996', branch: 'Jember', position: 'SALES ONLINE', cabang: 'MPM MOTOR JEMBER DIPONEGORO', subscribed: false, expiryDate: '2024-08-26' },
    { name: 'HENRY VIKA SULISTYANTO', email: 'henryonly003@gmail.com', password: 'mpmmadiun92', branch: 'MADIUN', position: 'SALES ONLINE', cabang: 'MPM MOTOR MADIUN', subscribed: false, expiryDate: '2024-08-28' },
    { name: 'Muhammad risky hidayat', email: 'bangsinyo18@gmail.com', password: 'Sinyo007', branch: 'Sidoarjo', position: 'SALES ONLINE', cabang: 'MPM MOTOR GATEWAY', subscribed: false, expiryDate: '2024-08-29' },
    { name: 'Eliska Dwi prameseila', email: 'selladnck@gmail.com', password: 'Eliskadwi15 ', branch: 'Blitar ', position: 'SALES ONLINE', cabang: 'MPM MOTOR BLITAR', subscribed: false, expiryDate: '2024-08-31' },
    { name: 'Sipau rohmah ', email: 'Syifaurohmah2019@gmail.com', password: 'Syifa231100', branch: 'Tangerang ', position: 'SALES ONLINE', cabang: 'MPM MOTOR TANGERANG', subscribed: false, expiryDate: '2024-08-32' },
    { name: 'Indra agus utomo', email: 'indraagusutomo59@gmail.com', password: 'Vinoarmani162895', branch: 'Kediri', position: 'SALES ONLINE', cabang: 'MPM MOTOR KEDIRI', subscribed: false, expiryDate: '2024-08-33' },
    { name: 'Arif Santoso', email: 'arief2021@gmail.com', password: 'Bandungaja4@', branch: 'Surabaya', position: 'SALES ONLINE', cabang: 'MPM MOTOR SIMPANG', subscribed: false, expiryDate: '2024-08-34' },
    { name: 'Cahya Aprilia ', email: 'papicahya86@gmail.com', password: 'Cahyampm473', branch: 'Surabaya ', position: 'SALES ONLINE', cabang: 'MPM MOTOR SIMPANG', subscribed: false, expiryDate: '2024-08-38' },
    { name: 'Muhammad risky hidayat', email: 'muhriskyhidayat26@gmail.com', password: 'Nyosinyo007', branch: 'Sidoarjo', position: 'SALES ONLINE', cabang: 'MPM MOTOR GATEWAY', subscribed: false, expiryDate: '2024-08-39' },
    { name: 'Arifin ', email: 'arieipin635@gmail.com', password: 'Ab635635635', branch: 'Malang ', position: 'SALES ONLINE', cabang: 'MPM MOTOR KEPANJEN', subscribed: false, expiryDate: '2024-08-40' },
    { name: 'vina anjar sari', email: 'vinaanjarsari3@gmail.com', password: '12345678', branch: 'malang', position: 'SALES ONLINE', cabang: 'MPM MOTOR SUKUN', subscribed: false, expiryDate: '2024-08-41' },
    { name: 'Trio wahyu saputro', email: 'triowahyu45@gmail.com', password: 'Triowahyu29', branch: 'Surabaya', position: 'SALES ONLINE', cabang: 'MPM MOTOR GATEWAY', subscribed: false, expiryDate: '2024-08-42' },
    { name: 'Maya meylasi oktavia', email: 'oktaviakcl@gmail.com', password: 'Mylavia20', branch: 'Malang', position: 'SALES ONLINE', cabang: 'MPM MOTOR KEPANJEN', subscribed: false, expiryDate: '2024-08-43' },
    { name: 'Ani Rahma', email: 'aamjunior464@gmail.com', password: '12345', branch: 'Tuban', position: 'SALES ONLINE', cabang: 'MPM MOTOR TUBAN', subscribed: false, expiryDate: '2024-08-45' },
    { name: 'M zaenal abidin', email: '10zaenal.abidin@gmail.com', password: '10zaenal11', branch: 'Tuban', position: 'Pengunjung', cabang: 'MPM MOTOR TUBAN', subscribed: false, expiryDate: '2024-08-46' },
    { name: 'Ani Rahma Safitri', email: 'aamjunior464@gmail.com', password: '12345', branch: 'Tuban', position: 'SALES ONLINE', cabang: 'MPM MOTOR TUBAN', subscribed: false, expiryDate: '2024-08-47' },
    // SPESIAL
    { name: 'Taufik', email: 'User2@supper.com', password: 'User2supper', branch: '-', position: '-', cabang: '-', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Mourits', email: 'Mourits@supper.com', password: 'Mourits', branch: '-', position: '-', cabang: '-', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Suma', email: 'Suma@supper.com', password: 'Suma931', branch: 'Madiun', position: 'PDCA', cabang: 'MPM Madiun', subscribed: true, expiryDate: '2024-10-31' },
    // KACAB
    { name: 'Diyah Megawati', email: 'Diyah@supper.com', password: 'Diyah123', branch: 'PONOROGO', position: 'KACAB', cabang: 'MPM PONOROGO', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Muda wira', email: 'mudawira.rpm@gmail.com', password: 'Mudawira25', branch: 'Batama', position: 'KACAB', cabang: 'MPM MOTOR BATAM', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'arif', email: 'arif.yudi@mpm-motor.com', password: 'WKTE1234', branch: 'kab Bogor', position: 'KACAB', cabang: 'MPM MOTOR BOGOR', subscribed: false, expiryDate: '2024-08-44' },
    { name: 'Agus Soleh Basuki', email: 'Soleh@gmail.com', password: 'Soleh123', branch: 'Madiun', position: 'KABENG', cabang: 'MPM MOTOR MADIUN', subscribed: false, expiryDate: '2024-08-30' },
    // Management Call
    { name: 'Reni Kusumawati', email: 'Reni@supper.com', password: 'Reniq2d', branch: '-', position: '-', cabang: '-', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Dita Susanti', email: 'Dita@supper.com', password: 'DitaLkq7', branch: '-', position: '-', cabang: '-', subscribed: false, expiryDate: '2024-08-30' },

    // Rapikan code dengan Shift + Alt + F
];

function getUserByEmail(email) {
    return users.find((user) => user.email === email);
}

// Inisialisasi CAPTCHA saat halaman dimuat
refreshCaptcha();