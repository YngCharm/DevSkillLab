const prevBtns = document.querySelectorAll('.prevBtn');
const nextBtns = document.querySelectorAll('.nextBtn');
const galleryItems = document.querySelectorAll('.gallery_item');
let currentIndex = 0;

function showItem(index) {
    galleryItems.forEach((item, i) => {
        if (i === index) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function showNextItem(index) {
    currentIndex = (index + 1) % galleryItems.length;
    showItem(currentIndex);
}

function showPrevItem(index) {
    currentIndex = (index - 1 + galleryItems.length) % galleryItems.length;
    showItem(currentIndex);
}

prevBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => showPrevItem(index));
});

nextBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => showNextItem(index));
});

// Показать первый элемент при загрузке страницы
showItem(currentIndex);
