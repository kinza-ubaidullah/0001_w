// Preloader
$("#preloader").fadeOut(700);
$(".preloader-bg").delay(600).fadeOut(700);

// Navigation 
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link:not(.dropdown-toggle)'); // Exclude dropdown toggles
    const dropdownItems = document.querySelectorAll('.dropdown-menu .dropdown-item'); // Dropdown items
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

     // Toggle dark background when scrolling
     window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#272727';
        } else {
            navbar.style.backgroundColor = 'transparent';
        }
    });

    // Close navbar for normal nav-links
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click(); // Collapse the menu
            }
        });
    });

    // Close navbar for normal nav-links
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click(); // Collapse the menu
            }
        });
    });

    // Close navbar when clicking on dropdown items
    dropdownItems.forEach(item => {
        item.addEventListener('click', function () {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click(); // Collapse the menu
            }
        });
    });
});
// Scroll to top 
document.addEventListener('DOMContentLoaded', function () {
    const progressWrap = document.querySelector('.progress-wrap');
    const progressPath = document.querySelector('.progress-circle path');
    const pathLength = progressPath.getTotalLength();

    // Initial settings for stroke dash array and offset
    progressPath.style.strokeDasharray = pathLength;
    progressPath.style.strokeDashoffset = pathLength;

    // Update progress based on scroll position
    const updateProgress = () => {
        const scroll = window.scrollY;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const progress = pathLength - (scroll / height) * pathLength;
        progressPath.style.strokeDashoffset = progress;

        // Show/hide the progress circle based on scroll position
        if (scroll > 100) {
            progressWrap.classList.add('active');
        } else {
            progressWrap.classList.remove('active');
        }
    };

    // Scroll to top on click
    progressWrap.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Update on scroll and load
    window.addEventListener('scroll', updateProgress);
    updateProgress();
});



// Initialize Owl Carousel for background and projects
$(document).ready(function () {
    // Initialize Owl Carousel for Background
    $('.bg-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        nav: true,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut'
    });

    // Initialize Owl Carousel for Project carousel
    $('.project-carousel').owlCarousel({
        items: 2,
        loop: true,
        dots: true,
        nav: false,
        margin: 30,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1,
                margin: 10
            },
            600: {
                items: 2,
                margin: 20
            }
        }
    });

    // Initialize other Owl Carousels if needed
    $(".owl-carousel").each(function () {
        const $carousel = $(this);
        const items = $carousel.data("item") || 1;
        const loop = $carousel.data("loop") || true;
        const autoplay = $carousel.data("autoplay") || true;

        $carousel.owlCarousel({
            items: items,
            loop: loop,
            autoplay: autoplay,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            margin: 10,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                1000: {
                    items: items,
                },
            },
        });
    });
});

// Initialize Swiper (for slider/slider sections)
const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    mousewheel: {
        enabled: true,
        sensitivity: 1,
    },
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
    effect: 'slide', // Type of transition effect
});

// Initialize LightGallery for gallery
document.addEventListener('DOMContentLoaded', function () {
    const galleryContainer = document.getElementById('gallery-container');
    if (galleryContainer) {
        lightGallery(galleryContainer, {
            selector: 'a',
            download: true,
            thumbnail: true,
        });
    }
});

// testimonial section
$(document).ready(function () {
    $(".owl-carousel").each(function () {
        const $carousel = $(this);
        const items = $carousel.data("item") || 1;
        const loop = $carousel.data("loop") || true;
        const autoplay = $carousel.data("autoplay") || true;

        $carousel.owlCarousel({
            items: items,
            loop: loop,
            autoplay: autoplay,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            margin: 10,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                1000: {
                    items: items,
                },
            },
        });
    });
});
// client carousel
$(document).ready(function () {
    $(".client-carousel").owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
    });
});



















// Contact Form Validation
function clearErrors() {
    let errors = document.getElementsByClassName('form_error');
    for (let item of errors) {
        item.innerHTML = '';
    }
}

function seterror(id, error) {
    let element = document.getElementById(id);
    element.innerHTML = error;
}

function validateForm() {
    let returnval = true;
    clearErrors();

    // Name validation
    let name = document.forms['myform']['name'].value;
    if (name.length < 5) {
        seterror('name_error', '*Length of name is too short');
        returnval = false;
    }

    // Email validation
    let email = document.forms['myform']['email'].value;
    if (email.length > 30) {
        seterror('email_error', '*Email length is too long');
        returnval = false;
    }

    // Phone validation
    let phone = document.forms['myform']['phone'].value;
    if (phone.length !== 11) {
        seterror('phone_error', '*Phone number should be 11 digits');
        returnval = false;
    }

    // Subject validation
    let subject = document.forms['myform']['subject'].value;
    if (subject.length > 40) {
        seterror('subject_error', '*Subject is too short');
        returnval = false;
    }

    // Message validation
    let message = document.forms['myform']['message'].value;
    if (message.length > 150) {
        seterror('message_error', '*Message is too short');
        returnval = false;
    }

    return returnval;
}
