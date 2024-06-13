const forgotPasswordForm = document.getElementById('forgotPasswordForm');

forgotPasswordForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = forgotPasswordForm['email'].value;

    firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            // Email sent
            alert('Password reset email sent. Check your inbox.');
            window.location.href = 'login.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage);
            alert('Password reset failed. Please try again.');
        });
});
