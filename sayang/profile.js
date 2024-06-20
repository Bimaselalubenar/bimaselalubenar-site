$(document).ready(function () {
    // Handle file upload
    $('#upload').on('change', function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }
            reader.readAsDataURL(this.files[0]);
        }
    });

    // Save images to local storage
    $('#saveButton').on('click', function () {
        var images = [];
        $('.profile-pic').each(function () {
            var src = $(this).attr('src');
            if (src) {
                images.push(src);
            }
        });
        if (images.length > 0) {
            localStorage.setItem('profileImages', JSON.stringify(images));
            alert('Gambar profil telah disimpan.');
        } else {
            alert('Tidak ada gambar untuk disimpan.');
        }
    });

    // Delete images from local storage and page
    $('#deleteButton').on('click', function () {
        $('.profile-pic').attr('src', '');
        localStorage.removeItem('profileImages');
        alert('Gambar profil telah dihapus.');
    });

    // Load images from local storage on page load
    var savedImages = JSON.parse(localStorage.getItem('profileImages'));
    if (savedImages && savedImages.length > 0) {
        $('.profile-pic').each(function (index) {
            if (index < savedImages.length) {
                $(this).attr('src', savedImages[index]);
            }
        });
    }
});


// Profile

const userInfo = document.getElementById("LoginSayang");
const user = JSON.parse(localStorage.getItem("currentUser"));
if (user) {
    document.getElementById("userName0").textContent = user.name;
    document.getElementById("userName1").textContent = user.name;
    document.getElementById("userEmail").textContent = user.email;
    document.getElementById("userBranch").textContent = user.branch;
    document.getElementById("userPosition").textContent = user.position;
    document.getElementById("userCabang0").textContent = user.cabang;
    document.getElementById("userCabang").textContent = user.cabang;

    document
        .getElementById("logoutButton")
        .addEventListener("click", function () {
            localStorage.removeItem("currentUser");
            window.location.href = "dashboard.html"; // Redirect to login page
        });
} else {
    // Redirect to login page if user is not logged in
    window.location.href = "dashboard.html";
}
