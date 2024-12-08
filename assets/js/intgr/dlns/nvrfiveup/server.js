// server.js
const express = require('express');
const app = express();

// Endpoint untuk mendapatkan waktu server UTC
app.get('/server-time', (req, res) => {
    const serverTime = new Date().toISOString(); // Waktu dalam format UTC
    res.json({ time: serverTime });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
