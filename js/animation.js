
const section1 = document.querySelector('.intro');
const header = document.querySelector('header');
const options = {
    threshold: 0,
    rootMargin: '-150px 0px -300px 0px'
}
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) { header.classList.add('header-scroll'); }
        else { header.classList.remove('header-scroll'); }
    })
}, options);
observer.observe(section1);
const animation = new IntersectionObserver((entries, animation) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) { return; }
        entry.target.querySelectorAll('.left').forEach(element => { element.classList.add('v'); });
        entry.target.querySelectorAll('.right').forEach(element => { element.classList.add('v'); });
        (entry.target.querySelectorAll('.middle').length) ? entry.target.querySelectorAll('.middle').forEach(element => { element.classList.add('v'); }) : console.log('😢');
        animation.unobserve(entry.target);
    })
}, options);
if (window.innerWidth >= 1067) {
    console.log('😊');
    const containers = document.querySelectorAll('.container');
    containers.forEach(container => { animation.observe(container); });
}
// else{
//     document.querySelectorAll('.left').forEach(element=>{element.classList.remove})
// }

window.onload = load();
window.onresize = load;

function load() {
    if (window.innerWidth <= 500) { document.getElementById('navigation').className = 'nav2'; }
    else { document.getElementById('navigation').className = 'nav1'; }
}
//observer.observe(section4);
const menu = document.querySelector('.menu');
menu.onclick = function (e) {
    if (window.innerWidth <= 500) {
        const banner = document.querySelectorAll('header')[0];
        banner.getElementsByClassName('nav2')[0].classList.toggle('nav-active');
        banner.getElementsByClassName('menu')[0].classList.toggle('svg-active');
    }
    else {
        const silder = document.querySelector('.slider-container');
        silder.classList.add('sc-visible');
        console.log('menu clicked');

    }
}
window.addEventListener('mouseup', (e) => { e.target.classList.remove('sc-visible'); });
const close = document.querySelector('.icon').onclick = e => { document.querySelector('.slider-container').classList.remove('sc-visible') }