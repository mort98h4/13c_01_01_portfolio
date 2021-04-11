"use strict";

const startTag = document.querySelector(".startTag").textContent;
const endTag = document.querySelector(".endTag").textContent;

import {burgerMenu} from "./menu.js";
import {fadeInAnimation} from "./header_animation.js";
import {scrollAnimation} from "./index_scroll.js";
import {changeIconColor} from "./social_icons.js";

window.addEventListener("DOMContentLoaded", init);

function init() {
    console.log("init");
    document.querySelector(".startTag").textContent = "";
    document.querySelector(".endTag").textContent = "";

    gsap.registerPlugin(ScrollTrigger);

    fadeInAnimation(startTag, endTag);
    burgerMenu();
    scrollAnimation("#contact");
    changeIconColor();
}