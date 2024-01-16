let offset = 0;
const sliderLine = document.querySelector('.slider-line');
const paginations = document.querySelector(".paginations");
const slides = document.querySelector(".card");

const paginationCircle = [];


document.querySelector('.btn-right').addEventListener('click', function nextSlide() {
    offset = offset + 400;
    if (offset > 800) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.btn-left').addEventListener('click', function () {
    offset = offset - 400;
    if (offset < 0) {
        offset = 800;
    }
    sliderLine.style.left = -offset + 'px';

});

//  

setInterval(() => {
    (nextSlide)
}, 3000);

// 

function createPaginationCircle() {
    const div = document.createElement("div");
    div.className = "pagination-circle";
    paginations.appenChild(div);
    paginationCircle.push(div);
};

function addPagination() {
    slides.forEach(createPaginationCircle);
    paginationCircle[0].classList.add("active");

};

addPagination();

// 

function initMAp() {
    let opt = {
        center: { lat: 49.496675, lng: -102.65625 },
        zoom: 4,
    }

    let map = new google.maps.Map(document.getElementById("map"), opt);
};

