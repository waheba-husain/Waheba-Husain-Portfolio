// NAVBAR SCROLL EFFECT
console.log("JavaScript is running!");
const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

// CUSTOM CURSOR
const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    follower.style.left = e.clientX + "px";
    follower.style.top = e.clientY + "px";
});

// HOVER EFFECT FOR LINKS & BUTTONS
const hoverElements = document.querySelectorAll(
    "a, button, .project-card, .tag, .contact-link"
);

hoverElements.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        document.body.classList.add("cursor-hover");
    });

    item.addEventListener("mouseleave", () => {
        document.body.classList.remove("cursor-hover");
    });
});

// MOBILE MENU
const menuBtn = document.querySelector(".nav-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("open");
    });

    document.querySelectorAll(".mobile-link").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("open");
        });
    });
}

// REVEAL ANIMATION
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
            }
        });
    },
    {
        threshold: 0.15
    }
);

reveals.forEach(el => observer.observe(el));

// PROJECT CARD GLOW EFFECT
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mx", `${x}px`);
        card.style.setProperty("--my", `${y}px`);
    });
});

// COUNTER ANIMATION
const counters = document.querySelectorAll(".stat-num, .fc-value");

const countObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const el = entry.target;
            const target = parseInt(el.textContent);

            if (isNaN(target)) return;

            let count = 0;
            const speed = target / 50;

            const update = () => {
                count += speed;

                if (count < target) {
                    el.textContent = Math.floor(count);
                    requestAnimationFrame(update);
                } else {
                    el.textContent = target;
                }
            };

            update();
            countObserver.unobserve(el);
        });
    },
    { threshold: 0.5 }
);

counters.forEach(counter => countObserver.observe(counter));

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

console.log("Waheba's Portfolio Loaded ");