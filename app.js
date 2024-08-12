

// GSAP
document.addEventListener("DOMContentLoaded", function() {
    // GSAP and ScrollTrigger setup for the background overlay
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".bg-overlay", {
        opacity: 1, // Target opacity
        ease: "power1.inOut", // Easing function for smooth transition
        scrollTrigger: {
            trigger: ".header-about-section", // Element that triggers the animation
            start: "top bottom", // Start the animation when the top of header-bottom reaches the bottom of the viewport
            end: "top top", // End the animation when the bottom of header-bottom reaches the top of the viewport
            scrub: true // Smoothly scrub through the animation
        }
    });



    const burger =  document.querySelector(".burger");
    const navlinks = document.querySelector(".navlinks-container")

    burger.addEventListener("click", () => {
        burger.classList.toggle("active")
        navlinks.classList.toggle("active")

    })
});










