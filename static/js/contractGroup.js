import { dataHandler } from "./data/dataHandler.js";

let contractGroups


async function loadContractGroups() {
    let data = await dataHandler.getAllContractGroup();
    contractGroups = {};

    for (let group of data) {
        contractGroups[group.id] = {
            name: group.name,
            description: group.description,
            backgroundColor: group.background_color,
            mainColor: group.main_color,
            secondaryColor: group.secondary_color
        };
    }

    recolorCards();
}

function recolorCards() {
    document.querySelectorAll(`.group-style`).forEach((e) => {
        let key = e.getAttribute("data-group-id");
        e.style.backgroundColor = contractGroups[key].backgroundColor;
        e.style.borderColor = contractGroups[key].mainColor;
    });
    document.querySelectorAll(`.group-main-color`).forEach((e) => {
        let key = e.getAttribute("data-group-id");
        e.style.color = contractGroups[key].mainColor;
    });
    document.querySelectorAll('.group-secondary-color').forEach((e) => {
        let key = e.getAttribute("data-group-id");
        e.style.color = contractGroups[key].secondaryColor;
    })
}

function init() {
    loadContractGroups();
}

init();