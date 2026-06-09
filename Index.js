const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const texts = [
   "Junior Web Developer",
   "Front End Developer",
   "UI Developer",
  
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingText = document.getElementById("typing-text");

function typeEffect() {

    const currentText = texts[textIndex];

    if (!isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();