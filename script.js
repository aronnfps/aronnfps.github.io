// script.js
document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('hackerCanvas');
    const ctx = canvas.getContext('2d');
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const fontSize = 20;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = [];

    // Ayarları başlat
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        for (let i = 0; i < columns; i++) {
            drops[i] = 0; // Her kolon için sıfırlama
        }
    }

    // Rastgele bir karakter seçme
    function randomChar() {
        return characters.charAt(Math.floor(Math.random() * characters.length));
    }

    // Yazıları ekranda kaydırma
    function draw() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; // Arka planı sil
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "green"; // Yazılar yeşil olacak
        ctx.font = `${fontSize}px monospace`;

        // Ekranda her kolon boyunca yazı kaydırma
        for (let i = 0; i < columns; i++) {
            const char = randomChar();
            const xPos = i * fontSize; // X pozisyonu, her kolon için
            const yPos = drops[i] * fontSize; // Y pozisyonu, kayma miktarı

            ctx.fillText(char, xPos, yPos);

            // Eğer yazı ekranın altına ulaştıysa, tekrar en üstten başlayacak
            if (yPos > canvas.height && Math.random() > 0.975) {
                drops[i] = 0; // Yüksek ihtimalle kolon sıfırlanır
            }

            drops[i]++; // Yüksekliği arttırarak yazı aşağıya kayar
        }
    }

    // Ekran boyutlarını değiştirdiğinde canvas'ı yeniden boyutlandır
    window.addEventListener('resize', resizeCanvas);

    // Başlangıçta canvas boyutunu ayarla ve animasyonu başlat
    resizeCanvas();
    setInterval(draw, 35); // Hızını buradan ayarlayabilirsiniz
});
