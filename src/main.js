const hamMenu = document.querySelector('.ham-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    hamMenu.classList.toggle('-rotate-45');
    hamMenu.classList.toggle('h-[33px]');
    hamMenu.classList.toggle('w-[33px]');

});

// Add event listener to the nav links and add active class
const navigation = document.querySelector('nav');

navigation.addEventListener('click', (e) => {
    if (e.target.nodeName === 'A') {
        navigation.querySelector('.active').classList.remove('active');
        // give parent active class
        e.target.parentElement.classList.add('active');
    }
});

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        // data position top
        header.dataset.position = 'center';
    } else {
        header.dataset.position = 'top';
    }
});