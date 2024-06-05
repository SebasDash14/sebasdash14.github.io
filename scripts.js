document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Mensaje enviado con éxito.');
        contactForm.reset();
    });
});
