// Mengubah background navbar saat di-scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 2px 15px rgba(0, 0, 0, 0.2)";
    } else {
        navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    }
});

function openLightbox(element) {
    const img = element.querySelector('img');
    const captionText = element.querySelector('span')?.innerText || img.alt;
    
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    lightboxImg.src = img.src;
    lightboxCaption.innerText = captionText;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}
