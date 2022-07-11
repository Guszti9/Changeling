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
    for (let key in contractGroups) {
        document.querySelectorAll(`.group-style[data-group-id="${key}"]`).forEach((e) => {
            e.style.backgroundColor = contractGroups[key].backgroundColor;
            e.style.borderColor = contractGroups[key].mainColor;
        });
        document.querySelectorAll(`.group-main-color[data-group-id="${key}"]`).forEach((e) => {
            e.style.color = contractGroups[key].mainColor;
        });
    }

}

function init() {
    loadContractGroups();
}

init();