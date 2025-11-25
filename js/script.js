// Smooth Scroll para âncoras internas (#)
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Se for link vazio (#), não faz nada
        if (href === "#") return;

        e.preventDefault();
        const id = href.replace("#", "");
        const el = document.getElementById(id);

        if (el) {
            el.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// Botão do WhatsApp — apenas tracking opcional
const whatsappBtn = document.getElementById('whatsappBtn');
if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
        console.log("Abrindo WhatsApp");
    });
}

// Animação de fade-in ao rolar
const fadeSections = document.querySelectorAll('.fade-in-section');

if (fadeSections.length > 0) {
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        },
        { threshold: 0.1 }
    );

    fadeSections.forEach(section => observer.observe(section));
}

// Menu Hambúrguer (mobile)
const hamburger = document.getElementById('hamburger-menu');
const navMenu = document.querySelector('.main-nav');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('open');
    });
}
