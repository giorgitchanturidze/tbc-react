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
let oldScroll = 0; // Initialize oldScroll variable

// window on load
window.addEventListener('load', () => {
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY; // Get current scroll position

        // Set data position based on scroll
        if (currentScroll > 0) {
            header.dataset.position = 'center';
        } else {
            header.dataset.position = 'top';
        }

        // Check if user is scrolling up or down
        if (window.innerWidth < 1024) {
            if (oldScroll > currentScroll && currentScroll > 0) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            oldScroll = currentScroll; // Update oldScroll for the next scroll event
        }
    });

});