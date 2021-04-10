"use strict";

export function burgerMenu() {
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

