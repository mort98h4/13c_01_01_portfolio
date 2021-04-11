"use strict";

const startTag = document.querySelector(".startTag").textContent;
const endTag = document.querySelector(".endTag").textContent;

import {burgerMenu} from "/../scripts/menu.js";
import {fadeInAnimation} from "/scripts/header_animation.js";
import {changeIconColor} from "/../scripts/social_icons.js";

window.addEventListener("DOMContentLoaded", init);

function init() {
    console.log("init");
    document.querySelector(".startTag").textContent = "";
    document.querySelector(".endTag").textContent = "";

    gsap.registerPlugin(ScrollTrigger);

    loadJSON();

    fadeInAnimation(startTag, endTag);
    burgerMenu();
    changeIconColor();
}

async function loadJSON() {
    const url = "../assets/projects.json";
    const jsonData = await fetch(url);
    const projects = await jsonData.json();

    displayProjects(projects);
}

function displayProjects(projects) {
    console.log("displayProjects");
    console.log(projects);

    const temp = document.querySelector("#project_temp");
    const dest3 = document.querySelector("#thirdSemester");
    const dest2 = document.querySelector("#secondSemester");
    const dest1 = document.querySelector("#firstSemester");

    dest3.innerHTML = "";
    dest2.innerHTML = "";
    dest1.innerHTML = "";

    projects.forEach(project => {
        const clone = temp.cloneNode(true).content;

        clone.querySelector("h3").textContent = project.project;
        clone.querySelector("p").textContent = project.shortDesc;
        clone.querySelector("a").href = project.url;
        clone.querySelector("img").src = project.image;
        clone.querySelector("img").alt = project.project;
        //clone.querySelector("article").setAttribute("id", project[this]);

        if (project.semester === 3) {
            dest3.appendChild(clone);
        } else if (project.semester === 2) {
            dest2.appendChild(clone);
        } else {
            dest1.appendChild(clone);
        }
        
    })
}