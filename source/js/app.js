let scrollBar = document.querySelector('.custom-scroll');
let totalHeight;
let currentHeight;
let percent;

window.addEventListener('scroll', () => {

    totalHeight = document.body.clientHeight - window.innerHeight;
    currentHeight = document.documentElement.scrollTop;
    percent = (currentHeight / totalHeight) * 100;
    console.log(percent);

    scrollBar.style.width = percent + '%'
})