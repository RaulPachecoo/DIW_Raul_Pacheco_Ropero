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
});

// Script para navegación de testimonios
document.addEventListener("DOMContentLoaded", () => {
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
});

const header = document.querySelector('.header');
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
  header.classList.toggle('active-menu'); // Activa o desactiva el menú
});
