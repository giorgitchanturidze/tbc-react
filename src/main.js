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

const accordions = document.querySelector('.accordions');

accordions.addEventListener('click', (e) => {
    if (e.target.classList.contains('accordion')) {
        e.target.classList.toggle('active');
    }
    const acoordioItems = accordions.querySelectorAll('.accordion');
    acoordioItems.forEach((item) => {
        if (item !== e.target) {
            item.classList.remove('active');
        }
    });
});

const privacy = document.querySelectorAll('.privacy');
const privacyDetailed = document.querySelector('.privacy-detailed');
// Privacy detailed children
const privacyDetailedChildren = document.querySelector('.privacy-detailed-child');

privacy.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        privacyDetailed.classList.toggle('active');
        // give active class to privacyDetailed children after 0.5s
        setTimeout(() => {
            privacyDetailedChildren.classList.toggle('active');
        }, 300);
    });
});

const closePrivacyButtons = document.querySelectorAll('.close-privacy');

closePrivacyButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        privacyDetailedChildren.classList.toggle('active');
        setTimeout(() => {
            privacyDetailed.classList.toggle('active');
        }, 300);
    });
});

const privacyDetailedChildren2 = document.querySelectorAll('.privacy-detailed-child');


document.addEventListener('click', function (event) {
    // Check if the click is outside privacyDetailedChildren
    let isClickInside = Array.from(privacyDetailedChildren2).some(child => child.contains(event.target));

    if (!isClickInside && privacyDetailedChildren2[0].classList.contains('active')) {
        // Close privacyDetailedChildren
        privacyDetailedChildren2.forEach(child => {
            child.classList.remove('active');
        });

        // Wait 0.5s then close privacyDetailed
        setTimeout(() => {
            privacyDetailed.classList.remove('active');
        }, 300);
    }
});

// Close when user press esc
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && privacyDetailed.classList.contains('active')) {
        privacyDetailedChildren.classList.toggle('active');
        setTimeout(() => {
            privacyDetailed.classList.toggle('active');
        }, 300);
    }
});

// Slider
document.addEventListener("DOMContentLoaded", () => {
    const sliderSection = document.querySelector(".slider-section");
    const slider = document.querySelector(".slider");
    const slides = Array.from(slider.children);
    const dots = document.querySelectorAll(".dot");
    const prevArrow = document.querySelector(".prevArrow");
    const nextArrow = document.querySelector(".nextArrow");
    let currentIndex = 1; // Start from 1, assuming the first slide is a duplicate
    let slideInterval;

    // Duplicate first and last slides
    const firstSlide = slides[0].cloneNode(true);
    const lastSlide = slides[slides.length - 1].cloneNode(true);
    slider.insertBefore(lastSlide, slides[0]);
    slider.appendChild(firstSlide);

    const doubledSlides = Array.from(slider.children);

    // Function to scroll to a specific slide
    function scrollToSlide(index) {
        if (window.innerWidth < 1024) {
            const width = slider.clientWidth;
            slider.scrollTo({
                left: width * index,
                behavior: 'smooth'
            });
            currentIndex = index;
            // Update dots considering the duplicated slides
            updateDots();
        } else {
            const width = slider.clientWidth;
            setTimeout(() => {
                slider.scrollLeft = width * index;
                currentIndex = index;
                updateDots();
            }, 700);
            // remove active class from all slides
            slides.forEach((slide) => {
                slide.classList.remove('active');
            });
            console.log('currentIndex: ' + index);
            console.log(doubledSlides);
            // give active to the slide
            setTimeout(() => {
                if (index == 1) {
                    doubledSlides[1].classList.add('active');
                    doubledSlides[4].classList.add('active');
                } else if (index == 3) {
                    doubledSlides[3].classList.add('active');
                    doubledSlides[0].classList.add('active');
                } else if (index == 2) {
                    doubledSlides[2].classList.add('active');
                } else if (index == 4) {
                    doubledSlides[4].classList.add('active');
                    doubledSlides[1].classList.add('active');
                } else if (index == 0) {
                    doubledSlides[0].classList.add('active');
                    doubledSlides[3].classList.add('active');
                }
            }, 700);


        }
    }

    // Function to update the appearance of the dots
    function updateDots() {
        // Assuming the first and last slides are duplicated
        let adjustedIndex = currentIndex - 1; // Adjust index to map with the actual slides

        // Account for wrapping around due to the infinite loop
        if (adjustedIndex < 0) {
            adjustedIndex = dots.length - 1; // Last dot should be active
        } else if (adjustedIndex >= dots.length) {
            adjustedIndex = 0; // First dot should be active
        }

        // Update the active state of dots
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === adjustedIndex);
        });
    }

    // Function to start the slideshow
    function startSlideShow() {
        slideInterval = setInterval(() => {
            let nextIndex = (currentIndex + 1) % (slides.length + 2);
            scrollToSlide(nextIndex);

            // Jump to the first slide if we're at the end
            if (nextIndex === slides.length + 1) {
                setTimeout(() => {
                    slider.scrollTo({
                        left: slider.clientWidth,
                        behavior: 'auto'
                    });
                    currentIndex = 1;
                }, 500); // Adjust the timeout to match your scroll animation duration
            }
        }, 4000);
    }

    // Add click event listeners to the dots
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            let adjustedIndex = index + 1; // Adjust index to map with the actual slides

            if (index == 0 && dots[2].classList.contains('active')) {
                scrollToSlide(4);
                setTimeout(() => {
                    slider.scrollTo({
                        left: slider.clientWidth,
                        behavior: 'auto'
                    });
                    currentIndex = 1;
                }, 500);
            } else if (index == 2 && dots[0].classList.contains('active')) {
                scrollToSlide(0);
                setTimeout(() => {
                    slider.scrollTo({
                        left: slider.clientWidth * slides.length,
                        behavior: 'auto'
                    });
                    currentIndex = slides.length;
                }, 500);
            } else {
                scrollToSlide(adjustedIndex);
            }
        });
    });

    // Add click event listener to the previous arrow
    prevArrow.addEventListener("click", () => {
        let prevIndex = (currentIndex - 1 + slides.length + 2) % (slides.length + 2);
        scrollToSlide(prevIndex);

        // Jump to the last slide if we're at the start
        if (prevIndex === 0) {
            setTimeout(() => {
                slider.scrollTo({
                    left: slider.clientWidth * slides.length,
                    behavior: 'auto'
                });
                currentIndex = slides.length;
            }, 500);
        }
    });

    // Add click event listener to the next arrow
    nextArrow.addEventListener("click", () => {
        let nextIndex = (currentIndex + 1) % (slides.length + 2);
        scrollToSlide(nextIndex);

        if (nextIndex === slides.length + 1) {
            setTimeout(() => {
                slider.scrollTo({
                    left: slider.clientWidth,
                    behavior: 'auto'
                });
                currentIndex = 1;
            }, 500);
        }
    });

    // Start with the first original slide (not the duplicated one)
    scrollToSlide(1);
    startSlideShow();

    // Pause the slideshow on hover
    sliderSection.addEventListener("mouseenter", () => clearInterval(slideInterval));
    sliderSection.addEventListener("mouseleave", startSlideShow);
});