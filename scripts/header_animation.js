"use strict"; 

export function fadeInAnimation(startTag, endTag, tagContent) {
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


    let n = 0;

    function startTagAnimation() {
        document.querySelector(".startTag").textContent = startTag.substring(0,n);
        n++;
    
        if (n <= startTag.length) {
            let randomTimer = randomNumber();
            setTimeout(startTagAnimation, randomTimer * 100);
        } else {
            n = 0;
            endTagAnimation();
        }
    }

    function endTagAnimation() {
        document.querySelector(".endTag").textContent = endTag.substring(0,n);
        n++;
    
        if (n <= endTag.length) {
            let randomTimer = randomNumber();
            setTimeout(endTagAnimation, randomTimer * 100);
        } else {
            tagContentAnimation();
        }
    }

    function tagContentAnimation() {
        const header = document.querySelector(".tagContent");
    
        const headerProp = {
            duration: 1000,
            iterations: 1,
            delay: 500,
            fill: "both"
        }
    
        const headerKF = {
            offset: [0, 0.08, 0.14, 0.25, 0.35, 0.49, 0.65, 1],
            opacity: ["0", "1", "0", "1", "0", "1", "0", "1"],
            easing: ["ease-in", "ease-out"]
        }
    
        header.animate(headerKF, headerProp);
    }
}

function randomNumber() {
    return Math.floor(Math.random() * (4 - 1) + 1);
}