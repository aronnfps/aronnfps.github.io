window.onload = function() {
    const terminal = document.querySelector('.terminal');
    terminal.style.display = 'block'; // Sayfa yüklendiğinde terminali göster
}
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in-on-scroll');
    elements.forEach(function(element) {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('visible');
        }
    });
});
// Hacker-style yazı eklemek için script
document.addEventListener("DOMContentLoaded", function() {
    const hackerText = document.querySelector(".hacker-text");

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    
    function generateRandomChar() {
        return characters.charAt(Math.floor(Math.random() * characters.length));
    }

    // Yazı sürekli olarak kayacak şekilde yazıları ekle
    function createHackerEffect() {
        const text = generateRandomChar();
        hackerText.innerHTML += text; // Yeni harf ekle

        // Ekranın sol üst köşesinden kayarak sağa doğru ilerlemesini sağla
        if (hackerText.innerHTML.length > 200) {
            hackerText.innerHTML = ''; // Ekran dolarsa temizle
        }

        setTimeout(createHackerEffect, 50); // 50ms sonra yeni harf ekle
    }

    createHackerEffect(); // Efekti başlat
});
