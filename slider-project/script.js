const images = [
    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1200&auto=format&fit=crop", // Кот
    "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1200&auto=format&fit=crop", // Собака
    "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=1200&auto=format&fit=crop", // Панда
    "https://images.unsplash.com/photo-1474511320723-9a56873867b5?q=80&w=1200&auto=format&fit=crop", // Лиса
    "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?q=80&w=1200&auto=format&fit=crop"  // Кролик
];

let currentIndex = 0;

// Получаем элементы со страницы по их ID
const imgElement = document.getElementById('slider-img');
const counterElement = document.getElementById('counter');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

// Функция, которая обновляет картинку и текст счетчика
function updateSlider() {
    imgElement.src = images[currentIndex];
    counterElement.textContent = `Изображение ${currentIndex + 1} из ${images.length}`;
}

// Клик вперёд
btnNext.addEventListener('click', () => {
    currentIndex++;
    
    // Цикл
    if (currentIndex >= images.length) {
        currentIndex = 0; 
    }
    updateSlider();
});

// Клик назад
btnPrev.addEventListener('click', () => {
    currentIndex--;
    
    // Клик с нуля назад
    if (currentIndex < 0) {
        currentIndex = images.length - 1; 
    }
    updateSlider();
});

// Фоточка сразу
updateSlider();