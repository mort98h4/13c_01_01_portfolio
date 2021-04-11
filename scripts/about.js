"use strict";

const startTag = document.querySelector(".startTag").textContent;
const endTag = document.querySelector(".endTag").textContent;

import { fadeInAnimation } from "/../scripts/header_animation.js";
import {burgerMenu} from "/../scripts/menu.js";
import {changeIconColor} from "/../scripts/social_icons.js";

window.addEventListener("DOMContentLoaded", init);

function init() {
    console.log("init");

    document.querySelector(".startTag").textContent = "";
    document.querySelector(".endTag").textContent = "";

    gsap.registerPlugin(ScrollTrigger);

    fadeInAnimation(startTag, endTag);
    burgerMenu();
    changeIconColor();
}