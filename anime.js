document.addEventListener('DOMContentLoaded', () => {
    anime({
        targets: ".logo .nav-link, .nav-cta",
        translateX: [-15, 0],
        opacity: [0, 1],
        delay: anime.stagger(100),
        duration: 800,
        easing: "easeOutCubic"
    });

    anime({
        targets: ".servicio-card",
        translateX: [40, 0],
        opacity: [0, 1],
        delay: anime.stagger(150),
        duration: 900,
        easing: "easeOutCubic"
    });
});