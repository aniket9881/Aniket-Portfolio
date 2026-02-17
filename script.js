
// Dark Mode
document.getElementById("darkToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark");
});

// Scroll Animation
function reveal() {
    const elements = document.querySelectorAll(".reveal");
    elements.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
reveal();