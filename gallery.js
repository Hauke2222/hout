const displayedImage = document.querySelector('.image');
const figcaption = document.querySelector('.caption');
const thumbBar = document.querySelector('.thumb-bar');
let currentIndex = -1;
let timer;

const images = [
    'IMG_2756.jpg',
    'IMG_2689_1.jpg',
    'IMG_2766_01.jpg',
    'IMG_2765.jpg',
    'IMG_2741.jpg',
    'IMG_7942.jpg',
    'IMG_7938.jpg',
    'IMG_2717.jpg',
    'IMG_2633.JPG',
    'IMG_2662.jpg'
];

const alts = {
    'IMG_2756.jpg': 'houten zon',
    'IMG_2766_01.jpg': 'houten bloem',
    'IMG_2689_1.jpg': 'houten draak',
    'IMG_2765.jpg': 'houten kat',
    'IMG_2741.jpg': 'houten hulst takje',
    'IMG_7942.jpg': 'houten eland',
    'IMG_7938.jpg': 'houten paard',
    'IMG_2717.jpg': 'houten bloem',
    'IMG_2633.JPG': 'houten eekhoorn',
    'IMG_2662.jpg': 'houten judo techniek'
};

function showImage(index) {
    const image = images[index];
    const alt = alts[image];
    displayedImage.src = `static/images/${image}`;
    displayedImage.alt = alt;
    figcaption.textContent = alt;

    // Reset the timer
    resetTimer();

    // Center the thumbnail of the active image
    const thumbnails = thumbBar.getElementsByTagName('img');
    for (const thumbnail of thumbnails) {
        thumbnail.classList.remove('active');
    }
    thumbnails[index].classList.add('active');

    // Scroll the clicked thumbnail to the center of the thumb-bar
    const thumbBarRect = thumbBar.getBoundingClientRect();
    const thumbRect = thumbnails[index].getBoundingClientRect();
    const scrollOffset = thumbRect.left - thumbBarRect.left - (thumbBarRect.width / 2 - thumbRect.width / 2);
    thumbBar.scrollBy({ left: scrollOffset, behavior: 'smooth' });
}

function resetTimer() {
    clearTimeout(timer);
    timer = setTimeout(nextImage, 3000);
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

for (let i = 0; i < images.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `static/images/${images[i]}`);
    newImage.setAttribute('alt', alts[images[i]]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', e => {
        currentIndex = i;
        showImage(currentIndex);
        resetTimer();
    });
}

// Start the automatic image transitioning
nextImage();


