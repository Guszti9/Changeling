import { dataHandler } from "./data/dataHandler.js";


export const groupController = {
    contractGroups: {},

    recolorByGroup: () => {
        document.querySelectorAll(`.group-style`).forEach((e) => {
            let key = e.getAttribute("data-group-id");
            e.style.backgroundColor = groupController.contractGroups[key].backgroundColor;
            e.style.borderColor = groupController.contractGroups[key].mainColor;
        });
        document.querySelectorAll(`.group-main-color`).forEach((e) => {
            let key = e.getAttribute("data-group-id");
            e.style.color = groupController.contractGroups[key].mainColor;
        });
        document.querySelectorAll('.group-secondary-color').forEach((e) => {
            let key = e.getAttribute("data-group-id");
            e.style.color = groupController.contractGroups[key].secondaryColor;
        })
    },

    loadContractGroups: async () => {
        let data = await dataHandler.getAllContractGroup();
        groupController.contractGroups = {};

        for (let group of data) {
            groupController.contractGroups[group.id] = {
                name: group.name,
                description: group.description,
                backgroundColor: group.background_color,
                mainColor: group.main_color,
                secondaryColor: group.secondary_color
            };
        }

        groupController.recolorByGroup();
    }
}