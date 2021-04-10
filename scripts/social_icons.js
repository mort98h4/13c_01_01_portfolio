"use strict";

export function changeIconColor() {
    document.querySelectorAll(".socialLink svg").forEach(svg => {
        svg.addEventListener("mouseover", () => {
            svg.querySelector(".socialIcon").style.fill = "var(--highCol)";
        })

        svg.addEventListener("mouseout", () => {
            svg.querySelector(".socialIcon").style.fill = "var(--secoCol)";
        })
    })
}