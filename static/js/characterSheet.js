function addEventListenerToAttribute() {
    const attributeFavicon = [...document.querySelectorAll(".attribute-favicon")];
    for (let favicon of attributeFavicon) {
        favicon.addEventListener("click", clickOnIcon)
    }
}

function addEventListenerToSkill() {
    const attributeFavicon = [...document.querySelectorAll(".skill-favicon")];
    for (let favicon of attributeFavicon) {
        favicon.addEventListener("click", clickOnIcon)
    }
}

function clickOnIcon(e) {
    let target = e.currentTarget;
    let clickValue = target.getAttribute("data-ind");
    let attrName = target.parentElement.getAttribute("data-name");
    let attrIcons = target.parentElement.children;

    let attrValue;

    if (target.classList.contains("fa-circle")) {
        attrValue = clickValue;
        for (let i = 0; i < clickValue; i++) {
            attrIcons[i].classList.add("fa-times-circle");
            attrIcons[i].classList.remove("fa-circle");
        }
    } else {
        attrValue = clickValue - 1;
        for (let i = clickValue - 1; i < 5; i++) {
            attrIcons[i].classList.add("fa-circle");
            attrIcons[i].classList.remove("fa-times-circle");
        }
    }
}

function init() {
    addEventListenerToAttribute();
    addEventListenerToSkill();
}

init();
