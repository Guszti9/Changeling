import { dataHandler } from "./data/dataHandler.js";

function addEventListenerToAttribute() {
    const attributeFavicon = [...document.querySelectorAll(".attribute-favicon")];
    for (let favicon of attributeFavicon) {
        favicon.addEventListener("click", function (e) {
            let data = clickOnIcon(e);
            dataHandler.updateAttr(data);
            
        })
    }
}

function addEventListenerToSkill() {
    const attributeFavicon = [...document.querySelectorAll(".skill-favicon")];
    for (let favicon of attributeFavicon) {
        favicon.addEventListener("click", function(e) {
            let data = clickOnIcon(e);
            dataHandler.updateSkill(data);
        })
    }
}

function clickOnIcon(e) {
    let target = e.currentTarget;
    let clickValue = target.getAttribute("data-ind");
    let name = target.parentElement.getAttribute("data-name");
    let icons = target.parentElement.children;

    let value
    let id = document.querySelector("#char-sheet").getAttribute("data-id");

    if (target.classList.contains("fa-circle")) {
        value = clickValue;
        for (let i = 0; i < clickValue; i++) {
            icons[i].classList.add("fa-times-circle");
            icons[i].classList.remove("fa-circle");
        }
    } else {
        value = clickValue - 1;
        for (let i = clickValue - 1; i < 5; i++) {
            icons[i].classList.add("fa-circle");
            icons[i].classList.remove("fa-times-circle");
        }
    }

    return {value: value, name: name, id: id};
}

function init() {
    addEventListenerToAttribute();
    addEventListenerToSkill();
}

init();
