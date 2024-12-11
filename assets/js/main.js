// Preloader
$("#preloader").fadeOut(700);
$(".preloader-bg").delay(600).fadeOut(700);

var wind = $(window);
// scroll to top 
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



//Navigation 
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section'); // Ensure your sections have IDs
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollThreshold = 50; // Adjust scroll value for navbar effect if needed
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbar');

    // Scroll effect for Navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            navbar.classList.add('nav-scroll');
        } else {
            navbar.classList.remove('nav-scroll');
        }

        // Section-based navigation link activation
        let currentSection = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - navbar.offsetHeight;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute('id');
            }
        });

        // Activate corresponding nav link or default to "Home"
        navLinks.forEach((link) => {
            link.classList.remove('active');
            if (
                link.getAttribute('href').includes(currentSection) ||
                (!currentSection && link.getAttribute('href') === '#home')
            ) {
                link.classList.add('active');
            }
        });
    });

    // Smooth scroll on nav link click
    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').replace('#', '');
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - navbar.offsetHeight,
                    behavior: 'smooth'
                });
            }
            if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });

    // Close navbar when clicking outside in responsive views
    document.addEventListener('click', (e) => {
        if (
            window.innerWidth < 992 &&
            navbarCollapse.classList.contains('show') &&
            !navbar.contains(e.target)
        ) {
            navbarToggler.click();
        }
    });
});





// carousel for bg
$(document).ready(function () {
    // Initialize Owl Carousel
    $('.bg-carousel').owlCarousel({
        items: 1,
        loop: true,
        // dots: true,
        autoplay: true,
        nav: true,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut'
    });

    // carousel for projects
    //initialize proj carousel

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
    console.log("Owl Carousel initialized.");
    $('.project-carousel').on('changed.owl.carousel', function (event) {
        console.log('Current Active Dot Index:', event.page.index);
    });
});


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
                items: 2,
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
// Contact Form
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


// MagnificPopup

$(document).ready(function () {
    $(".img-zoom").magnificPopup({
        type: "image",
        closeOnContentClick: true,
        mainClass: "mfp-fade",
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1],
        },
    });

    $('.magnific-youtube, .magnific-vimeo, .magnific-custom').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 300,
        preloader: false,
        fixedContentPos: false,
    });
});


