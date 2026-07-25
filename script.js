// Mobile Menu
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

// Active Navbar on Scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {

            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            document
                .querySelector('header nav a[href*=' + id + ']')
                .classList.add('active');
        }

    });

    // Sticky Header
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Close Menu After Scroll
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

// Typing Animation
const words = [
    "Web Developer",
    "Frontend Developer",
    "B.Tech CSE Student",
    "UI Designer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typingText = document.querySelector(".typing-text");

function typeEffect() {

    if (!typingText) return;

    let currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent = currentWord.substring(0, charIndex++);
    } else {

        typingText.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = deleting ? 70 : 120;

    if (!deleting && charIndex === currentWord.length + 1) {

        deleting = true;
        speed = 1500;

    } else if (deleting && charIndex === 0) {

        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 300;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

// Smooth Fade Animation
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll("section").forEach(section => {
    observer.observe(section);
});
.navbar.active{
    display:block;
}

.header.sticky{
    box-shadow:0 0 20px rgba(56,189,248,.4);
}

section{
    opacity:0;
    transform:translateY(40px);
    transition:all .8s ease;
}

section.show{
    opacity:1;
    transform:translateY(0);
                              }
