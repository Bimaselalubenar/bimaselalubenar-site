function startMatch() {
    document.getElementById('div1').style.display = 'none';
    document.getElementById('div2').style.display = 'block';

    setTimeout(function() {
        document.getElementById('div2').style.display = 'none';
        calculateMatch();
        document.getElementById('div3').style.display = 'block';
    }, 5000);
}

function resetForm() {
    document.getElementById('maleName').value = '';
    document.getElementById('maleDob').value = '';
    document.getElementById('femaleName').value = '';
    document.getElementById('femaleDob').value = '';
    document.getElementById('div1').style.display = 'block';
    document.getElementById('div2').style.display = 'none';
    document.getElementById('div3').style.display = 'none';
}

function calculateMatch() {
    const maleName = document.getElementById('maleName').value;
    const maleDob = new Date(document.getElementById('maleDob').value);
    const femaleName = document.getElementById('femaleName').value;
    const femaleDob = new Date(document.getElementById('femaleDob').value);

    const lovePercentage = getLovePercentage(maleDob, femaleDob);

    document.getElementById('pria').textContent = maleName;
    document.getElementById('wanita').textContent = femaleName;
    animatePercentage(lovePercentage);
}

function getLovePercentage(dob1, dob2) {
    const specialDob1 = new Date('2002-03-23');
    const specialDob2 = new Date('2000-01-25');

    if ((dob1.getTime() === specialDob1.getTime() && dob2.getTime() === specialDob2.getTime()) ||
        (dob1.getTime() === specialDob2.getTime() && dob2.getTime() === specialDob1.getTime())) {
        return 0;
    }

    const diffTime = Math.abs(dob2 - dob1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return (diffDays % 100) + 1;
}

function animatePercentage(finalValue) {
    let currentPercentage = 0;
    const interval = setInterval(() => {
        currentPercentage = Math.floor(Math.random() * 100) + 1;
        document.getElementById('persentase').textContent = currentPercentage;
    }, 50);

    setTimeout(() => {
        clearInterval(interval);
        document.getElementById('persentase').textContent = finalValue;
    }, 2000);
}

function shareResult() {
    const pria = document.getElementById('pria').textContent;
    const wanita = document.getElementById('wanita').textContent;
    const persentase = document.getElementById('persentase').textContent;
    const shareText = `Pria: ${pria}\nWanita: ${wanita}\nPersentase Cinta: ${persentase}%\nCek kecocokan cinta Anda di: ${window.location.href}`;

    if (navigator.share) {
        navigator.share({
            title: 'Love Match Result',
            text: shareText,
            url: window.location.href
        }).then(() => {
            console.log('Thanks for sharing!');
        }).catch(err => {
            console.error('Error sharing:', err);
        });
    } else {
        alert('Web Share API is not supported in this browser.');
    }
}