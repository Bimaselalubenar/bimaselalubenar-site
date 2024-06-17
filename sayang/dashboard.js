document.addEventListener("DOMContentLoaded", function() {
    const user = JSON.parse(localStorage.getItem('currentUser'));

    if (user) {
        document.getElementById('userName0').textContent = user.name;
        document.getElementById('userName1').textContent = user.name;
        document.getElementById('userEmail1').textContent = user.email;
        document.getElementById('userPhone2').textContent = user.phone;
        document.getElementById('userBirthdate3').textContent = user.birthdate;
        document.getElementById('userPosition').textContent = user.position;
        document.getElementById('userCabang0').textContent = user.cabang;
        document.getElementById('userCabang').textContent = user.cabang;

        document.getElementById('logoutButton').addEventListener('click', function() {
            localStorage.removeItem('currentUser');
            window.location.href = 'login.html'; // Redirect to login page
        });
    } else {
        // Redirect to login page if user is not logged in
        window.location.href = 'login.html';
    }
});
