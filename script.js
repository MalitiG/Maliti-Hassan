// Toggle mobile nav (example)
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector("button.md\\:hidden");
    const navLinks = document.querySelector(".md\\:flex");

    menuBtn?.addEventListener("click", function () {
        navLinks.classList.toggle("hidden");
    });
});
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Web Developer", "Creative Writer", "Tech Enthusiast"];
const typingDelay = 100;
const erasingDelay = 60;
const newTextDelay = 1500; // delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 500);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (textArray.length) setTimeout(type, newTextDelay);
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#contact form");

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        const formData = new FormData(form);

        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            form.reset();
            alert("Thank you! Your message has been sent.");
        } else {
            alert("Oops! There was a problem sending your message.");
        }
    });
});
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ScrollReveal animations
document.addEventListener("DOMContentLoaded", function () {
    const sr = ScrollReveal({
        distance: '50px',
        duration: 1500,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        reset: true,
    });

    sr.reveal('.hero-content, .fade-in-title', {
        origin: 'top',
        interval: 200,
    });

    sr.reveal('#about .md\\:flex, #Services .md\\:flex', {
        origin: 'left',
    });

    sr.reveal('.project-card', {
        origin: 'bottom',
        interval: 200,
    });

    sr.reveal('#contact .max-w-xl', {
        origin: 'bottom',
    });
});

