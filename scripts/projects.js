"use strict";

import {burgerMenu} from "/../scripts/menu.js";
import {changeIconColor} from "/../scripts/social_icons.js";

window.addEventListener("DOMContentLoaded", init);

function init() {
    console.log("init");

    gsap.registerPlugin(ScrollTrigger);

    burgerMenu();
    changeIconColor();
}