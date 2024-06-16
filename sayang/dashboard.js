const userInfo = document.getElementById('userInfo');
const user = JSON.parse(localStorage.getItem('currentUser'));

if (user) {
    document.getElementById('userName').textContent = user.name;
    document.getElementById('userEmail').textContent = user.email;
    document.getElementById('userPhone').textContent = user.phone;
    document.getElementById('userBirthdate').textContent = user.birthdate;
    document.getElementById('userPosition').textContent = user.position;
    document.getElementById('userCabang').textContent = user.cabang;

    document.getElementById('logoutButton').addEventListener('click', function () {
        localStorage.removeItem('currentUser');
        window.location.href = 'login.html'; // Redirect to login page
    });

} else {
    // Redirect to login page if user is not logged in
    window.location.href = 'login.html';
}
