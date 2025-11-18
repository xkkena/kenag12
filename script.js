// Mobile Menu
function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

// Smooth Scrolling
document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Light / Dark Mode
const modeBtn = document.getElementById("modeBtn");
modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    // Change button emoji
    modeBtn.textContent = document.body.classList.contains("light") ? "🌙" : "☀";
});

// Typing Effect
const typedText = "Kena Gebeyehu";
let index = 0;

function typeEffect() {
    if (index < typedText.length) {
        document.getElementById("typed").textContent += typedText.charAt(index);
        index++;
        setTimeout(typeEffect, 120);
    }
}
window.onload = typeEffect;
