document.addEventListener("DOMContentLoaded", (event) => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Hero Image Animation
    gsap.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out"
    });

    gsap.from(".hero-subtitle", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out"
    });

    // Marquee Animation
    gsap.to(".marquee-inner", {
        xPercent: -50,
        ease: "none",
        scrollTrigger: {
            trigger: ".brand-story",
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        }
    });

    // Reveal elements on scroll
    const revealElements = document.querySelectorAll(".reveal");

    revealElements.forEach((elem) => {
        gsap.from(elem, {
            scrollTrigger: {
                trigger: elem,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });
    });

    // Parallax Images
    const parallaxElements = document.querySelectorAll(".parallax");

    parallaxElements.forEach((elem) => {
        gsap.to(elem, {
            y: -50,
            ease: "none",
            scrollTrigger: {
                trigger: elem,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    });
});
