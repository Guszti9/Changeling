import { dataHandler } from "./data/dataHandler.js";

document.querySelector('#add-contract-finisher').addEventListener(
    "click",
    function() {
        let name = document.querySelector("#contract-name-input").value;
        let groupName = document.querySelector('#group-select').value;
        let type = document.querySelector('#type-select').value;
        let description = document.querySelector('#contract-description-input').value;
        let loophole = document.querySelector('#loophole-input').value;
        let dicePool =  document.querySelector('#dice-pool-input').value;

        const data = {
            name: name,
            groupName: groupName,
            type: type,
            description: description,
            loophole: loophole,
            dicePool: dicePool
        };
        dataHandler.addContract(data);
    }
);

console.log("yay");