// DASHBOARD
const userInfo = document.getElementById('userInfo');
const user = JSON.parse(localStorage.getItem('currentUser'));

function getZodiacSign(dob) {
    const date = new Date(dob);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1;

    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        return "Aquarius";
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        return "Pisces";
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        return "Aries";
    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        return "Taurus";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        return "Gemini";
    } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        return "Cancer";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        return "Leo";
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        return "Virgo";
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        return "Libra";
    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
        return "Scorpio";
    } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        return "Sagittarius";
    } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
        return "Capricorn";
    }
}

if (user) {
    document.getElementById('userName').textContent = user.name;
    document.getElementById('userEmail').textContent = user.email;
    document.getElementById('userPassword').textContent = user.password;
    document.getElementById('userPhone').textContent = user.phone;
    document.getElementById('userDob').textContent = user.dob;
    document.getElementById('userZodiac').textContent = getZodiacSign(user.dob);

    document.getElementById('logoutButton').addEventListener('click', function () {
        localStorage.removeItem('currentUser');
        window.location.href = 'login.html'; // Redirect to login page
    });
} else {
    // Redirect to login page if user is not logged in
    window.location.href = 'login.html';
}