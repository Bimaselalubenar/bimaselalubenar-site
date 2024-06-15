const loginSayang = document.getElementById('loginSayang');
const errorMessage = document.getElementById('errorMessage');

function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 5; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
}

function refreshCaptcha() {
    const captchaElement = document.getElementById('captcha');
    captchaElement.textContent = generateCaptcha();
}

document.getElementById('refreshCaptcha').addEventListener('click', refreshCaptcha);

loginSayang.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const captchaInput = document.getElementById('captchaInput').value;
    const captcha = document.getElementById('captcha').textContent;
    const user = getUserByEmail(email);

    if (captcha !== captchaInput) {
        errorMessage.innerText = 'CAPTCHA is incorrect. Please try again.';
        refreshCaptcha();
        return;
    }

    if (user && user.password === password) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'dashboard.html';
    } else {
        errorMessage.innerText = 'Email or password is incorrect.';
    }
});

let users = [
    {
        name: 'Gusty Kukuh Indriyana M', email: 'gustykukuhindriyanmurty@gmail.com', password: 'pacarku3',
        phone: '08978010123', birthdate: '2000-25-01', position: 'Manager', cabang: 'MPM MADIUN'
    },
];

function getUserByEmail(email) {
    return users.find(user => user.email === email);
}

// Initialize CAPTCHA on page load
refreshCaptcha();