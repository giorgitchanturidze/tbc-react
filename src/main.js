// Toggle menu when hamMenu is clicked
const hamMenu = document.querySelector('.ham-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    hamMenu.classList.toggle('-rotate-45');
    hamMenu.classList.toggle('h-[33px]');
    hamMenu.classList.toggle('w-[33px]');
    // Toggle body overflow hidden
    document.body.classList.toggle('overflow-hidden');
});

// If user clicks outside the menu, close it
window.addEventListener('click', (e) => {
    if (e.target !== hamMenu && !hamMenu.contains(e.target) && hamMenu.classList.contains('active')) {
        hamMenu.classList.toggle('active');
        hamMenu.classList.toggle('-rotate-45');
        hamMenu.classList.toggle('h-[33px]');
        hamMenu.classList.toggle('w-[33px]');
        // Toggle body overflow hidden
        document.body.classList.toggle('overflow-hidden');
    }
});

// Add event listener to the nav links and add active class
const navigation = document.querySelector('nav');

// Add event listener to the nav links and add active class
navigation.addEventListener('click', (e) => {
    if (e.target.nodeName === 'A') {
        navigation.querySelector('.active').classList.remove('active');
        // Give parent active class
        e.target.parentElement.classList.add('active');
    }
});

// window on load event listener to check scroll position
const header = document.querySelector('header');
let oldScroll = 0; // Initialize oldScroll variable

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


// ==================================

// document.addEventListener("DOMContentLoaded", () => {
//     const slider = document.querySelector(".flex");
//     const slides = slider.children;
//     const dots = document.querySelectorAll(".rounded-full");
//     const prevArrow = document.querySelector(".fill-white");
//     const nextArrow = document.querySelector(".rotate-180");
//     let currentIndex = 0;
//     let slideInterval;

//     function scrollToSlide(index) {
//         const width = slider.clientWidth;
//         slider.scrollLeft = width * index;
//         currentIndex = index;
//         updateDots();
//     }

//     function updateDots() {
//         dots.forEach((dot, index) => {
//             dot.classList.toggle("bg-gray-500", index === currentIndex); // Change the color to indicate active dot
//         });
//     }

//     function startSlideShow() {
//         slideInterval = setInterval(() => {
//             let nextIndex = (currentIndex + 1) % slides.length;
//             scrollToSlide(nextIndex);
//         }, 3000); // Change slide every 3 seconds
//     }

//     dots.forEach((dot, index) => {
//         dot.addEventListener("click", () => scrollToSlide(index));
//     });

//     prevArrow.addEventListener("click", () => {
//         let prevIndex = (currentIndex - 1 + slides.length) % slides.length;
//         scrollToSlide(prevIndex);
//     });

//     nextArrow.addEventListener("click", () => {
//         let nextIndex = (currentIndex + 1) % slides.length;
//         scrollToSlide(nextIndex);
//     });

//     startSlideShow();

//     // Pause the slideshow on hover
//     slider.addEventListener("mouseenter", () => clearInterval(slideInterval));
//     slider.addEventListener("mouseleave", startSlideShow);
// });


/*
In this script:

scrollToSlide function scrolls the slider to the specified index.
updateDots function updates the appearance of the dots based on the current index.
startSlideShow function sets up an interval to automatically move to the next slide.
Event listeners are added to the dots, arrows, and the slider itself for interaction and auto-slide functionality.
Please note:

Adjust the bg-gray-500 class in updateDots function to match your active dot styling.
Ensure the scroll behavior is smooth. You might need to adjust your CSS or add scroll-behavior: smooth; to the slider.
This script assumes the structure and class names provided in your HTML. If there are any changes in your HTML structure, you'll need to update the selectors in the JavaScript accordingly.
The script uses modulo arithmetic to loop through the slides infinitely in both directions.
The auto-slide pauses when hovering over the slider and resumes on mouse leave.

*/