firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        const username = user.email;
        document.getElementById('username').textContent = username;
    } else {
        // User is not logged in
        window.location.href = 'login.html';
    }
});

function logout() {
    firebase.auth().signOut()
        .then(() => {
            // Sign-out successful.
            window.location.href = 'login.html';
        })
        .catch((error) => {
            // An error happened.
            console.error(error);
            alert('Logout failed. Please try again.');
        });
}
