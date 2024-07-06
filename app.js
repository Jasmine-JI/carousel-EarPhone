let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let backButton = document.getElementById('back');
let seeMoreButton = document.querySelectorAll('.seeMore');
let carousel = document.querySelector('.carousel');
let listHtml = document.querySelector('.carousel .list');

nextButton.onclick = function() {
    showSlider('next');
} 
prevButton.onclick = function() {
    showSlider('prev');
}
const showSlider = (type) => {
    carousel.classList.remove('prev','next');
    let items = document.querySelectorAll('.carousel .list .item')
    if(type === 'next'){
        listHtml.appendChild(items[0])
        carousel.classList.add('next')
    }else{
        let positionLast = items.length - 1;
        listHtml.prepend(items[positionLast]);
        carousel.classList.add('prev')
    }
}
