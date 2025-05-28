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