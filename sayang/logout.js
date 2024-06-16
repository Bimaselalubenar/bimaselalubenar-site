document.getElementById('logoutButton').addEventListener('click', function() {
    // Hapus semua data dari local storage
    localStorage.clear();

    // Arahkan kembali ke halaman login
    window.location.href = 'login.html';
});
