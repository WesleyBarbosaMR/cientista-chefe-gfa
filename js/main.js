const swiper = new Swiper('.swiper-container', {
        // Opções do Swiper
        loop: true, // Habilita o loop infinito
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 5000, // 5 segundos entre as transições
        },
    });
