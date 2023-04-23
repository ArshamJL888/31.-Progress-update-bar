let scrollBar = document.querySelector('.custom-scroll');

window.addEventListener('scroll', function() {
   
    let scrollTop = this.window.scrollY;
    // console.log(scrollTop);
    // console.log(this.document.documentElement.scrollTop);
    let documentHeight = this.document.body.clientHeight;
    let windowHeight = this.window.innerHeight;
    // console.log(windowHeight);

    let scrollPercent = scrollTop / (documentHeight - windowHeight);
    let scrollPercentRounded = Math.round(scrollPercent * 100);
    scrollBar.style.width = scrollPercentRounded + "%"

})