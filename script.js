// script.js
document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('hackerCanvas');
    const ctx = canvas.getContext('2d');
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const fontSize = 20;
    const columns = canvas.width / fontSize;
    const drops = [];

    // Ayarları başlat
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        for (let x = 0; x < columns; x++) {
            drops[x] = 0; // her kolonu başlat
        }
    }

    // Rakam ve harfleri rastgele oluştur
    function randomChar() {
        return characters.charAt(Math.floor(Math.random() * characters.length));
    }

    // Çizim işlemi
    function draw() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; // Arka planı sil
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "green"; // Yazılar yeşil renkte olacak
        ctx.font = `${fontSize}px monospace`;

        // Ekranda tüm kolonlar boyunca yazılar kayacak
        for (let i = 0; i < canvas.width / fontSize; i++) {
            const char = randomChar();
            ctx.fillText(char, i * fontSize, drops[i] * fontSize);

            // Ekranın altına geldiğinde rastgele bir yerde başlasın
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            drops[i]++;
        }
    }

    // Canvas boyutlarını ayarlamak için pencere boyutunu dinle
    window.addEventListener('resize', resizeCanvas);

    // Başlangıç ayarları ve animasyonu başlat
    resizeCanvas();
    setInterval(draw, 35); // Hızını buradan ayarlayabilirsiniz
});
