"use strict";

export function scrollAnimation() {
    gsap.to(".content", {
        y: "0px",
        opacity: "1",
        ease: "ease-in",
        scrollTrigger: {
            trigger: "#aboutShort",
            scrub: true,
            end: "top"
        }
    });
    gsap.to(".image", {
        x: "0px",
        opacity: "1",
        ease: "ease-in",
        scrollTrigger: {
            trigger: "#aboutShort",
            scrub: true,
            end: "top"
        }
    });
}