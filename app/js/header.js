const header = document.querySelector('#header')
let scrollPrev = 0;

function fixedHeader() {
    var scrollTop = window.scrollY;
    var headerClientHeight = header.clientHeight;
    var headerHeight = headerClientHeight;


    (scrollTop > headerHeight && scrollTop > scrollPrev) ? header.classList.add('out') : header.classList.remove('out')

    scrollPrev = scrollTop;
}






window.addEventListener('scroll', () => {
    fixedHeader();
})