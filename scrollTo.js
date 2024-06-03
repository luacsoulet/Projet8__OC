function smoothScroll(target) {
    const navHeight = document.querySelector('nav').offsetHeight;
    const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - navHeight;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            smoothScroll(target);
        }
    });
});


document.addEventListener('DOMContentLoaded', function(e) {
    const urlParams = new URLSearchParams(window.location.search);
    const scrollTo = urlParams.get('scrollTo');
    
    if (scrollTo) {
        setTimeout(function() {
            const targetElement = document.getElementById(scrollTo);
            if (targetElement) {
                smoothScroll(targetElement);
            }
        }, 100);
    }
});