"use strict";

const startTag = document.querySelector(".startTag").textContent;
const endTag = document.querySelector(".endTag").textContent;
const tagContent = document.querySelector(".tagContent").textContent;
let n1 = 0;
let n2 = 0;

window.addEventListener("DOMContentLoaded", init);

function init() {
    console.log("init");
    document.querySelector(".startTag").textContent = "";
    document.querySelector(".endTag").textContent = "";
    document.querySelector(".tagContent").textContent = "";

    fadeInAnimation();

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

function fadeInAnimation() {
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
        startTagAnimation();
    };
}

function startTagAnimation() {
    document.querySelector(".startTag").textContent = startTag.substring(0,n1);
    n1++;

    if (n1 <= startTag.length) {
        let randomTimer = randomNumber();
        setTimeout(startTagAnimation, randomTimer * 100);
    } else {
        endTagAnimation();
    }
}

function endTagAnimation() {
    document.querySelector(".endTag").textContent = endTag.substring(0,n2);
    n2++;

    if (n2 <= endTag.length) {
        let randomTimer = randomNumber();
        setTimeout(endTagAnimation, randomTimer * 100);
    } else {
        tagContentAnimation();
    }
}

function tagContentAnimation() {
    const header = document.querySelector(".tagContent");
    header.textContent = tagContent;

    const headerProp = {
        duration: 1000,
        iterations: 1,
        ease: "ease-in",
        fill: "both"
    }

    const headerKF = {
        offset: [0, 0.35, 0.51, 0.65, 0.75, 0.86, 0.92, 1],
        opacity: ["0", "1", "0", "1", "0", "1", "0", "1"],
        easing: ["ease-out", "ease-in"]
    }

    header.animate(headerKF, headerProp);

}

function randomNumber() {
    return Math.floor(Math.random() * (4 - 1) + 1);
}