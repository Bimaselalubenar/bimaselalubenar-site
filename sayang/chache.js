//Chache
async function calculateCacheSize() {
    if ('caches' in window) {
        let cacheSize = 0;
        const cacheNames = await caches.keys();
        for (const name of cacheNames) {
            const cache = await caches.open(name);
            const requests = await cache.keys();
            for (const request of requests) {
                const response = await cache.match(request);
                if (response) {
                    const buffer = await response.arrayBuffer();
                    cacheSize += buffer.byteLength;
                }
            }
        }
        return (cacheSize / (1024 * 1024)).toFixed(2); // Convert to MB
    }
    return 0;
}

async function updateCacheSizeDisplay() {
    const cacheSize = await calculateCacheSize();
    document.getElementById('cacheSize').textContent = `${cacheSize} MB`;
}

async function clearCache() {
    if ('caches' in window) {
        const cacheNames = await caches.keys();
        for (const name of cacheNames) {
            await caches.delete(name);
        }
    }
    // Clear localStorage and sessionStorage if needed
    localStorage.clear();
    sessionStorage.clear();
    // Clear cookies
    clearCookies();
    updateCacheSizeDisplay();

    const notification = document.getElementById('notification');
    notification.style.display = 'block';
    let countdown = 5;
    notification.textContent = `Cache dan cookies telah dibersihkan. Beralih ke halaman login dalam ${countdown} detik...`;

    const interval = setInterval(() => {
        countdown--;
        if (countdown <= 0) {
            clearInterval(interval);
            window.location.href = 'login.html';
        } else {
            notification.textContent = `Cache dan cookies telah dibersihkan. Beralih ke halaman login dalam ${countdown} detik...`;
        }
    }, 1000);
}

function clearCookies() {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    }
}

document.getElementById('clearCacheButton').addEventListener('click', clearCache);

updateCacheSizeDisplay();