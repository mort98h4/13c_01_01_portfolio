"use strict";

const startTag = document.querySelector(".startTag").textContent;
const endTag = document.querySelector(".endTag").textContent;

let filterBy = "all";
let allProjects;

import {burgerMenu} from "/../scripts/menu.js";
import {fadeInAnimation} from "../scripts/header_animation.js";
import {scrollAnimation} from "../scripts/projects_scroll.js";
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

    document.querySelectorAll(".filterBtn").forEach(button => {
        button.addEventListener("click", selectFilter);
        
    })
}

async function loadJSON() {
    const url = "../assets/projects.json";
    const jsonData = await fetch(url);
    allProjects = await jsonData.json();

    // displayProjects(allProjects);
    setFilter(filterBy);
}

function selectFilter() {
    if (window.innerWidth < 769) {
        document.querySelector('.burgerMenu').classList.toggle("toggle");
        document.querySelector('.linksContainer').classList.toggle("navActive");
    }

    const filter = this.dataset.id;
    setFilter(filter);
}

function setFilter(filter) {
    filterBy = filter;
    buildList();
}

function filterList(filterBy) {
    let filteredList = allProjects.filter(projectsFilter);

    function projectsFilter(project) {
        if (filterBy === "all") {
            return allProjects;
        } else if (project.semester.toString() === filterBy) {
            return true;
        }
    }

    return filteredList;
}

function buildList() {
    const filteredList = filterList(filterBy);

    displayProjects(filteredList);
}

function displayProjects(projects) {
    const temp = document.querySelector("#project_temp");
    const dest3 = document.querySelector("#thirdSemester div");
    const dest2 = document.querySelector("#secondSemester div");
    const dest1 = document.querySelector("#firstSemester div");

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
        clone.querySelector("article").setAttribute("id", `article${project.id}`);

        if (project.semester === 3) {
            dest3.appendChild(clone);
        } else if (project.semester === 2) {
            dest2.appendChild(clone);
        } else {
            dest1.appendChild(clone);
        }
    });

    for (let i = projects.length; i >= 0; i-=2) {
        document.querySelector(`#article${i} .content`).classList.remove("fromRight");
        document.querySelector(`#article${i} .content`).classList.add("fromLeft");
        document.querySelector(`#article${i} .image`).classList.remove("fromLeft");
        document.querySelector(`#article${i} .image`).classList.add("fromRight");
    }

    const thirdHeader = document.querySelector("#thirdSemester h2");
    const secondHeader = document.querySelector("#secondSemester h2");
    const firstHeader = document.querySelector("#firstSemester h2");

    switch (filterBy) {
        case '3':
            thirdHeader.style.display = "block";
            secondHeader.style.display = "none";
            firstHeader.style.display = "none";            
            break;
        case '2':
            thirdHeader.style.display = "none";
            secondHeader.style.display = "block";
            firstHeader.style.display = "none";
            break;
        case '1':
            thirdHeader.style.display = "none";
            secondHeader.style.display = "none";
            firstHeader.style.display = "block";
            break;
        default:
            thirdHeader.style.display = "block";
            secondHeader.style.display = "block";
            firstHeader.style.display = "block";
    }

    scrollAnimation();

}