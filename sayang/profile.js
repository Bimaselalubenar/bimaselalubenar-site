const profile1 = document.getElementById('profile1');
const profile2 = document.getElementById('profile2');
const upload = document.getElementById('upload');
const deleteBtn = document.getElementById('delete');
const applyBtn = document.getElementById('apply');

function loadProfilePictures() {
    const savedProfile1 = localStorage.getItem('profile1');
    const savedProfile2 = localStorage.getItem('profile2');

    if (savedProfile1) {
        profile1.src = savedProfile1;
    }

    if (savedProfile2) {
        profile2.src = savedProfile2;
    }
}

function updateProfilePictures(file) {
    const reader = new FileReader();

    reader.onload = function (e) {
        const result = e.target.result;
        profile1.src = result;
        profile2.src = result;
    }

    reader.readAsDataURL(file);
}

upload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        updateProfilePictures(file);
    }
});

deleteBtn.addEventListener('click', () => {
    const defaultImage = 'default.jpg';
    profile1.src = defaultImage;
    profile2.src = defaultImage;
    localStorage.removeItem('profile1');
    localStorage.removeItem('profile2');
});

applyBtn.addEventListener('click', () => {
    try {
        localStorage.setItem('profile1', profile1.src);
        localStorage.setItem('profile2', profile2.src);
        alert('Profile pictures updated successfully!');
    } catch (e) {
        console.error('Error saving to local storage', e);
    }
});

window.onload = loadProfilePictures;
