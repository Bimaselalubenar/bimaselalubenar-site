<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
$(document).ready(function() {
    // Handle file upload
    $('#upload').on('change', function() {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('.profile-pic').attr('src', e.target.result);
            }
            reader.readAsDataURL(this.files[0]);
        }
    });

    // Save images to local storage
    $('#saveButton').on('click', function() {
        var images = [];
        $('.profile-pic').each(function() {
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
    $('#deleteButton').on('click', function() {
        $('.profile-pic').attr('src', '');
        localStorage.removeItem('profileImages');
        alert('Gambar profil telah dihapus.');
    });

    // Load images from local storage on page load
    var savedImages = JSON.parse(localStorage.getItem('profileImages'));
    if (savedImages && savedImages.length > 0) {
        $('.profile-pic').each(function(index) {
            if (index < savedImages.length) {
                $(this).attr('src', savedImages[index]);
            }
        });
    }
});
</script>