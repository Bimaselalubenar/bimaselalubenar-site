const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = registerForm['email'].value;
    const password = registerForm['password'].value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Registered and logged in
            const user = userCredential.user;
            alert('Registration successful! You are now logged in.');
            window.location.href = 'dashboard.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage);
            alert('Registration failed. Please try again.');
        });
});
