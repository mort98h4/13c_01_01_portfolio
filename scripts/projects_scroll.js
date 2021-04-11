"use strict";

export function scrollAnimation() {
    gsap.utils.toArray(".fromLeft").forEach(elem => {
        // console.log(elem.clientHeight);
        // console.log(elem);
        gsap.to(elem, {
            x: "0px",
            ease: "ease-in",
            scrollTrigger: {
                trigger: elem,
                scrub: true,
                markers: false, 
                start: (0 - window.innerHeight).toString(),
                end: `200px`
            }
        })
    })
    gsap.utils.toArray(".fromRight").forEach(elem => {
        // console.log(elem.clientHeight);
        // console.log(elem);
        gsap.to(elem, {
            x: "0px",
            ease: "ease-in",
            scrollTrigger: {
                trigger: elem,
                scrub: true,
                markers: false, 
                start: (0 - window.innerHeight).toString(),
                end: `200px`
            }
        })
    })
}
