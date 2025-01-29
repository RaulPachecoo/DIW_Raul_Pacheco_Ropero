// Script para reproducir audio de testimonios
document.addEventListener('DOMContentLoaded', () => {
    const playButtons = document.querySelectorAll('.play-button');
    let currentAudio = null;

    playButtons.forEach(button => {
        button.addEventListener('click', () => {
            const audioSrc = button.getAttribute('data-audio');
            if (currentAudio && !currentAudio.paused) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }
            currentAudio = new Audio(audioSrc);
            currentAudio.play();
        });
    });

    // Script para navegación de testimonios
    const reviewsContainer = document.querySelector(".reviews");
    const reviews = document.querySelectorAll(".review");
    const leftButton = document.querySelector(".nav-button.left");
    const rightButton = document.querySelector(".nav-button.right");
    let currentIndex = 0;

    const updateReviewsPosition = () => {
        const offset = currentIndex * -100;
        reviewsContainer.style.transform = `translateX(${offset}%)`;
    };

    leftButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
        updateReviewsPosition();
    });

    rightButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % reviews.length;
        updateReviewsPosition();
    });

    const header = document.querySelector('.header');
    const menuToggle = document.querySelector('.menu-toggle');

    menuToggle.addEventListener('click', () => {
        header.classList.toggle('active-menu'); // Activa o desactiva el menú
    });

    // Script para adaptar imágenes de testimonios
    const testimonials = document.querySelectorAll(".testimonial picture");

    testimonials.forEach(picture => {
        const sourceAvif = picture.querySelector("source[type='image/avif']");
        const sourceWebp = picture.querySelector("source[type='image/webp']");
        const img = picture.querySelector("img");

        // Definir imágenes disponibles según tamaño
        const imagenes = [
            { ancho: 3820, avif: img.src.replace("180px.jpg", "3820px.avif"), webp: img.src.replace("180px.jpg", "3820px.webp"), jpg: img.src.replace("180px.jpg", "3820px.jpg") },
            { ancho: 2560, avif: img.src.replace("180px.jpg", "2560px.avif"), webp: img.src.replace("180px.jpg", "2560px.webp"), jpg: img.src.replace("180px.jpg", "2560px.jpg") },
            { ancho: 1920, avif: img.src.replace("180px.jpg", "1920px.avif"), webp: img.src.replace("180px.jpg", "1920px.webp"), jpg: img.src.replace("180px.jpg", "1920px.jpg") },
            { ancho: 1200, avif: img.src.replace("180px.jpg", "1200px.avif"), webp: img.src.replace("180px.jpg", "1200px.webp"), jpg: img.src.replace("180px.jpg", "1200px.jpg") },
            { ancho: 768, avif: img.src.replace("180px.jpg", "768px.avif"), webp: img.src.replace("180px.jpg", "768px.webp"), jpg: img.src.replace("180px.jpg", "768px.jpg") },
            { ancho: 480, avif: img.src.replace("180px.jpg", "480px.avif"), webp: img.src.replace("180px.jpg", "480px.webp"), jpg: img.src.replace("180px.jpg", "480px.jpg") },
            { ancho: 0, avif: img.src.replace("180px.jpg", "180px.avif"), webp: img.src.replace("180px.jpg", "180px.webp"), jpg: img.src }
        ];

        // Función para cambiar la imagen según el tamaño del contenedor
        const cambiarImagen = (anchoContenedor) => {
            const imagenSeleccionada = imagenes.find(img => anchoContenedor >= img.ancho);
            if (img.dataset.actual === imagenSeleccionada.jpg) return;
            sourceAvif.srcset = imagenSeleccionada.avif;
            sourceWebp.srcset = imagenSeleccionada.webp;
            img.src = imagenSeleccionada.jpg;
            img.dataset.actual = imagenSeleccionada.jpg;
        };

        // Observar cambios en el tamaño del contenedor
        const resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                cambiarImagen(entry.contentRect.width);
            }
        });

        resizeObserver.observe(picture);
    });
});