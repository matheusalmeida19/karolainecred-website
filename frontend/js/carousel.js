document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".fraction-slide-carousel", {
        loop: true, // Permite rotação infinita
        autoplay: {
            delay: 5000, // 5 segundos entre os slides
            disableOnInteraction: false, // Continua após interação do usuário
        },
        navigation: {
            nextEl: ".carousel-btn-right",
            prevEl: ".carousel-btn-left",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true, // Permite clicar nos pontos de navegação
        },
        effect: "slide", // Transição suave
        speed: 800, // Velocidade da animação
        grabCursor: true, // Cursor em formato de mão para melhor UX
    });

    // Adicionando evento para pausar e retomar autoplay ao passar o mouse
    const carouselElement = document.querySelector(".fraction-slide-carousel");

    if (carouselElement) {
        carouselElement.addEventListener("mouseenter", function () {
            swiper.autoplay.stop();
        });

        carouselElement.addEventListener("mouseleave", function () {
            swiper.autoplay.start();
        });
    }
});
