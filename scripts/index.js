"use strict";

const startTag = document.querySelector(".startTag").textContent;
const endTag = document.querySelector(".endTag").textContent;

import {burgerMenu} from "/scripts/menu.js";
import {fadeInAnimation} from "/scripts/header_animation.js";
import {scrollAnimation} from "/scripts/index_scroll.js";

window.addEventListener("DOMContentLoaded", init);

function init() {
    console.log("init");
    document.querySelector(".startTag").textContent = "";
    document.querySelector(".endTag").textContent = "";

    gsap.registerPlugin(ScrollTrigger);

    fadeInAnimation(startTag, endTag);
    burgerMenu();
    scrollAnimation();
}