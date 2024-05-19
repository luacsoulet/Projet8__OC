let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.workPage_carousel-images img');
    const totalSlides = slides.length;

    // Assurez-vous que l'index est dans les limites
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    slides.forEach(slide => slide.classList.remove('active'));

    // Afficher l'image active
    slides[currentIndex].classList.add('active');
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Initialiser le carrousel pour afficher la première image
showSlide(currentIndex);