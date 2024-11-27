function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('¡Gracias por contactarnos! Te responderemos pronto.');
});
