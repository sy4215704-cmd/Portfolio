/* typing animation */

const text = ["Software Engineer", "Frontend Developer", "Web Developer"];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === text.length) {
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }

    setTimeout(type, 180);

})();

/* theme */

function toggleTheme() {
    document.body.classList.toggle("light");
}

/* active navbar */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(a => {
        a.classList.remove("active");

        if (a.getAttribute("href") === "#" + current) {
            a.classList.add("active");
        }

    });

});

/* mouse glow */

document.addEventListener("mousemove", (e) => {
    document.body.style.setProperty("--x", e.clientX + "px");
    document.body.style.setProperty("--y", e.clientY + "px");
});

window.addEventListener("load", () => {

    document.querySelector(".html").style.width = "90%";
    document.querySelector(".css").style.width = "85%";
    document.querySelector(".js").style.width = "75%";
    document.querySelector(".ui").style.width = "70%";

});

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    }
    else {
        navbar.classList.remove("scrolled");
    }

});
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

document.addEventListener("mousemove", (e) => {

    for (let i = 0; i < 5; i++) {

        particles.push({
            x: e.clientX,
            y: e.clientY,
            size: Math.random() * 5,
            speedX: (Math.random() - 0.5) * 2,
            speedY: (Math.random() - 0.5) * 2,
            life: 100
        });

    }

});

function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {

        let p = particles[i];

        p.x += p.speedX;
        p.y += p.speedY;
        p.life--;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(56,189,248,0.8)";
        ctx.fill();

        if (p.life <= 0) {
            particles.splice(i, 1);
            i--;
        }

    }

    requestAnimationFrame(animate);

}

animate();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});


const items = document.querySelectorAll(".timeline-item");

window.addEventListener("scroll", () => {
    items.forEach(item => {
        const pos = item.getBoundingClientRect().top;

        if (pos < window.innerHeight - 50) {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }
    });
});
