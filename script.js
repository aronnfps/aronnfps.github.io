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
