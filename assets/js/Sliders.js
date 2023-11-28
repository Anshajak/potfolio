let sliderApp1Index = 0;
let sliderApp1isHovered = false;
function showApp1Slide(index) {
    const sliderWrapper = document.querySelector('.App1Slider');
    const slides = document.querySelectorAll('.App1Slide');
    const slideWidth = slides[0].offsetWidth;
    if (index >= slides.length) {
        sliderApp1Index = 0;
    } else if (index < 0) {
        sliderApp1Index = slides.length - 1;
    } else {
        sliderApp1Index = index;
    }
    const newPosition = -sliderApp1Index * slideWidth;
    sliderWrapper.style.transform = `translateX(${newPosition}px)`;
}
function nextApp1Slide() {
    showApp1Slide(sliderApp1Index + 1);
}
function prevApp1Slide() {
    showApp1Slide(sliderApp1Index - 1);
}
document.querySelector('.App1Slider').addEventListener('mouseenter', function () {
    sliderApp1isHovered = true;
});

document.querySelector('.App1Slider').addEventListener('mouseleave', function () {
    sliderApp1isHovered = false;
});

let sliderApp2Index = 0;
let sliderApp2isHovered = false;
function showApp2Slide(index) {
    const sliderWrapper = document.querySelector('.App2Slider');
    const slides = document.querySelectorAll('.App2Slide');
    const slideWidth = slides[0].offsetWidth;
    if (index >= slides.length) {
        sliderApp2Index = 0;
    } else if (index < 0) {
        sliderApp2Index = slides.length - 1;
    } else {
        sliderApp2Index = index;
    }
    const newPosition = -sliderApp2Index * slideWidth;
    sliderWrapper.style.transform = `translateX(${newPosition}px)`;
}
function nextApp2Slide() {
    showApp2Slide(sliderApp2Index + 1);
}
function prevApp2Slide() {
    showApp2Slide(sliderApp2Index - 1);
}
document.querySelector('.App2Slider').addEventListener('mouseenter', function () {
    sliderApp2isHovered = true;
});

document.querySelector('.App2Slider').addEventListener('mouseleave', function () {
    sliderApp2isHovered = false;
});

let sliderApp3Index = 0;
let sliderApp3isHovered = false;
function showApp3Slide(index) {
    const sliderWrapper = document.querySelector('.App3Slider');
    const slides = document.querySelectorAll('.App3Slide');
    const slideWidth = slides[0].offsetWidth;
    if (index >= slides.length) {
        sliderApp3Index = 0;
    } else if (index < 0) {
        sliderApp3Index = slides.length - 1;
    } else {
        sliderApp3Index = index;
    }
    const newPosition = -sliderApp3Index * slideWidth;
    sliderWrapper.style.transform = `translateX(${newPosition}px)`;
}
function prevApp3Slide() {
    showApp3Slide(sliderApp3Index - 1);
}
function nextApp3Slide() {
    showApp3Slide(sliderApp3Index + 1);
}
document.querySelector('.App3Slider').addEventListener('mouseenter', function () {
    sliderApp3isHovered = true;
});

document.querySelector('.App3Slider').addEventListener('mouseleave', function () {
    sliderApp3isHovered = false;
});

let sliderWebsite1Index = 0;
let sliderWebsite1isHovered = false;
function showWebsite1Slide(index) {
    const sliderWrapper = document.querySelector('.Website1Slider');
    const slides = document.querySelectorAll('.Website1Slide');
    const slideWidth = slides[0].offsetWidth;
    if (index >= slides.length) {
        sliderWebsite1Index = 0;
    } else if (index < 0) {
        sliderWebsite1Index = slides.length - 1;
    } else {
        sliderWebsite1Index = index;
    }
    const newPosition = -sliderWebsite1Index * slideWidth;
    sliderWrapper.style.transform = `translateX(${newPosition}px)`;
}
function prevWebsite1Slide() {
    showWebsite1Slide(sliderWebsite1Index - 1);
}
function nextWebsite1Slide() {
    showWebsite1Slide(sliderWebsite1Index + 1);
}
document.querySelector('.Website1Slider').addEventListener('mouseenter', function () {
    sliderWebsite1isHovered = true;
});

document.querySelector('.Website1Slider').addEventListener('mouseleave', function () {
    sliderWebsite1isHovered = false;
});

let sliderWebsite2Index = 0;
let sliderWebsite2isHovered = false;
function showWebsite2Slide(index) {
    const sliderWrapper = document.querySelector('.Website2Slider');
    const slides = document.querySelectorAll('.Website2Slide');
    const slideWidth = slides[0].offsetWidth;
    if (index >= slides.length) {
        sliderWebsite2Index = 0;
    } else if (index < 0) {
        sliderWebsite2Index = slides.length - 1;
    } else {
        sliderWebsite2Index = index;
    }
    const newPosition = -sliderWebsite2Index * slideWidth;
    sliderWrapper.style.transform = `translateX(${newPosition}px)`;
}
function prevWebsite2Slide() {
    showWebsite2Slide(sliderWebsite2Index - 1);
}
function nextWebsite2Slide() {
    showWebsite2Slide(sliderWebsite2Index + 1);
}
document.querySelector('.Website2Slider').addEventListener('mouseenter', function () {
    sliderWebsite2isHovered = true;
});

document.querySelector('.Website2Slider').addEventListener('mouseleave', function () {
    sliderWebsite2isHovered = false;
});


function autoSlide() {
    if (document.getElementById('Projects').classList.contains('active')) {
        if (!sliderApp1isHovered) {
            nextApp1Slide();
        }
        if (!sliderApp2isHovered) {
            nextApp2Slide();
        }
        if (!sliderApp3isHovered) {
            nextApp3Slide();
        }
        if (!sliderWebsite1isHovered) {
            nextWebsite1Slide();
        }
        if (!sliderWebsite2isHovered) {
            nextWebsite2Slide();
        }
    }
}

setInterval(() => autoSlide(), 3000);
