"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
    console.log("init");

    startAnimation();

    // JavaScript der styrer burgermenu
    const burger = document.querySelector('.burgerMenu');
    const nav = document.querySelector('.linksContainer');

    burger.addEventListener("mouseover", () => {
        document.querySelectorAll(".burger").forEach(element => {
            element.style.setProperty("background-color", "var(--highCol)");
        });
    });

    burger.addEventListener("mouseout", () => {
        document.querySelectorAll(".burger").forEach(element => {
            element.style.setProperty("background-color", "var(--textCol)");
        });
    });

    // Lyt efter click på burgermenu
    burger.addEventListener("click", () => {
        // Vis/skjul menu
        nav.classList.toggle("navActive");
        // Tilføjer/fjerner "animation" på burgermenu
        burger.classList.toggle("toggle");
    });
}

function startAnimation() {
    const blackOut = document.querySelector(".blackOut");

    const blackProp = {
        duration: 1000,
        iterations: 1,
        ease: "linear",
        fill: "both"
    }

    const blackKF = {
        opacity: [
            "1",
            "0"
        ]
    }

    const blackAnimation = blackOut.animate(blackKF, blackProp);
    blackAnimation.onfinish = function() {
        blackOut.style.display = "none";
    };
}