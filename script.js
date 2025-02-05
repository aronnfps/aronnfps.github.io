// script.js
document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('hackerCanvas');
    const ctx = canvas.getContext('2d');
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const fontSize = 20;
    const columns = Math.floor(canvas.width / fontSize); // Ekrandaki kolon sayısı
    const drops = [];
    const speed = 2;

    // Ekran boyutunu ayarla
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        for (let i = 0; i < columns; i++) {
            drops[i] = 0; // Her kolon için sıfırlama
        }
    }

    // Rastgele bir karakter seç
    function randomChar() {
        return characters.charAt(Math.floor(Math.random() * characters.length));
    }

    // Yazıları ekranda kaydır
    function draw() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; // Arka planı sil
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "green"; // Yazılar yeşil olacak
        ctx.font = `${fontSize}px monospace`;

        // Ekranda her kolon boyunca yazı kaydırma
        for (let i = 0; i < columns; i++) {
            const char = randomChar();
            const xPos = Math.floor(Math.random() * canvas.width); // X pozisyonu, ekranın herhangi bir yerinden başlayacak
            const yPos = drops[i] * fontSize; // Y pozisyonu, kayma miktarı

            ctx.fillText(char, xPos, yPos);

            // Eğer yazı ekranın altına ulaştıysa, tekrar en üstten başlasın
            if (yPos > canvas.height) {
                drops[i] = 0; // Kolon sıfırlanır
            }

            // Kayma hızını arttır
            drops[i] += speed; // Bu sayede hareket eder
        }
    }

    // Ekran boyutlarını değiştirdiğinde canvas'ı yeniden boyutlandır
    window.addEventListener('resize', resizeCanvas);

    // Başlangıçta canvas boyutunu ayarla ve animasyonu başlat
    resizeCanvas();
    setInterval(draw, 35); // Hızını buradan ayarlayabilirsiniz
});
