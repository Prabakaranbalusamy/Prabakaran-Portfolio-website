const texts = [
    "Frontend Developer",
    "Web Developer",
    "UI Developer",

];

let textIndex = 0;
let charIndex = 0;

function typeText() {
    if (charIndex < texts[textIndex].length) {
        document.getElementById("typing-text").textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(eraseText, 1500);
    }
}

function eraseText() {
    if (charIndex > 0) {
        document.getElementById("typing-text").textContent =
            texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeText, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeText();
});

// navbar list d-none d-block section //
let hamburger = document.getElementById("mobileHamburger");
let navbar = document.getElementById("mobileHeader");
let closeBtn = document.getElementById("closebtn")

console.log(hamburger);

hamburger.onclick = () => {
    navbar.classList.remove("d-none");
    navbar.classList.add("d-block");
}
closeBtn.onclick = () => {
    navbar.classList.add("d-none");
    navbar.classList.remove("d-block");
}