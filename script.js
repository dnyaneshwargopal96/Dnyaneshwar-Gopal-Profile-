// ============================
// Typing Animation
// ============================

const roles = [
    "Computer Engineering Student",
    "Frontend Developer",
    "Python Developer",
    "Full Stack Web Developer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.querySelector(".hero-text h2");

function type() {

    if (!typing) return;

    const current = roles[roleIndex];

    if (!deleting) {
        typing.textContent = current.substring(0, charIndex++);
    } else {
        typing.textContent = current.substring(0, charIndex--);
    }

    let speed = deleting ? 60 : 100;

    if (!deleting && charIndex > current.length) {
        deleting = true;
        speed = 1500;
    }

    if (deleting && charIndex < 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(type, speed);
}

type();


// ============================
// Navbar Active
// ============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ============================
// Scroll Reveal
// ============================

const revealElements = document.querySelectorAll(
"section,.card,.about-image,.about-content"
);

function reveal() {

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(60px)";
    el.style.transition = "0.8s";

});

window.addEventListener("scroll", reveal);

reveal();


// ============================
// Scroll To Top
// ============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "25px";
topBtn.style.right = "25px";
topBtn.style.width = "55px";
topBtn.style.height = "55px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.background = "#00aaff";
topBtn.style.color = "#fff";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.fontSize = "22px";
topBtn.style.boxShadow = "0 0 20px #00aaff";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

};


// ============================
// Navbar Background
// ============================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (scrollY > 80) {

        header.style.background = "#0b1018";
        header.style.boxShadow = "0 5px 20px rgba(0,170,255,.3)";

    } else {

        header.style.background = "rgba(0,0,0,.65)";
        header.style.boxShadow = "none";

    }

});


// ============================
// About Image Hover
// ============================

const profile = document.querySelector(".about-image img");

if(profile){

profile.addEventListener("mouseenter",()=>{

profile.style.transform="scale(1.05) rotate(2deg)";

});

profile.addEventListener("mouseleave",()=>{

profile.style.transform="scale(1) rotate(0deg)";

});

}