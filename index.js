const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');

//buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//initial image width
let imgWidth = images[0].clientWidth;

//change image width when resizing
window.addEventListener('resize', () => {
    slider.scrollLeft = 0;
    imgWidth = images[0].clientWidth;
})

//button listeners
nextBtn.addEventListener('click', () => {
    slider.scrollLeft += imgWidth;
})

prevBtn.addEventListener('click', () => {
    slider.scrollLeft -= imgWidth;
})