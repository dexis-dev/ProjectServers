document.addEventListener('DOMContentLoaded', () => {
    const burgerButton = document.querySelector('.header_burger');
    const modal = document.querySelector('.modal');
    const closeButton = document.querySelector('.modal_close');

    // Открытие модального окна с анимацией
    burgerButton.addEventListener('click', () => {
        modal.classList.add('show');
    });

    // Закрытие модального окна с анимацией
    closeButton.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    // Закрытие при клике на фон
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
});

const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let currentIndex = 0;

function updateSlider(index) {
    // Перемещаем слайды с использованием transform
    slides.style.transform = `translateX(-${index * 100}%)`;

    // Обновляем активное состояние точек
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function goToNextSlide() {
    currentIndex = (currentIndex + 1) % dots.length; // Зацикливаем
    updateSlider(currentIndex);
}

function goToPrevSlide() {
    currentIndex = (currentIndex - 1 + dots.length) % dots.length; // Зацикливаем
    updateSlider(currentIndex);
}

dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        currentIndex = parseInt(e.target.dataset.index);
        updateSlider(currentIndex);
    });
});

next.addEventListener('click', goToNextSlide);
prev.addEventListener('click', goToPrevSlide);

// Optional: Auto-slide every 5 seconds
setInterval(goToNextSlide, 5000);



