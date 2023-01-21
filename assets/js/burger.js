const burgerBtn = document.querySelector('.burger-btn');
const firstBurgerLine = burgerBtn.firstElementChild;
const secondBurgerLine = burgerBtn.querySelector('.second-line')
const thirdBurgerLine = burgerBtn.querySelector('.third-line')
const lastBurgerLine = burgerBtn.lastElementChild;
const navMenu = document.querySelector('.nav-list');

burgerBtn.addEventListener('click', function burgerClick() {
    firstBurgerLine.classList.toggle('hidden');
    lastBurgerLine.classList.toggle('hidden');

    secondBurgerLine.classList.toggle('line-rotate-pos');
    thirdBurgerLine.classList.toggle('line-rotate-neg');

    navMenu.classList.toggle('active');
    document.querySelector('body').classList.toggle('no-scroll');

    navMenu.querySelectorAll('.nav-item').forEach((element, i) => {

        setTimeout(function () {
            element.classList.toggle('active');
        }, i * 100);
    })

    navMenu.addEventListener('click', () => {
        burgerClick();
    })
})


