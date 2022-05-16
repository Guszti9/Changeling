import { dataHandler } from "./data/dataHandler.js";
import { contractFactory } from "./htmlFactory/contractFactory.js"

document.querySelector('#add-contract-finisher').addEventListener(
    "click",
    async function() {
        let data = createData();
        let response = await dataHandler.addContract(data);
        if (response.massage === "ok") {
            addContract(data)
        }
    }
);

function addContract(data) {
    document.querySelector("#contracts-container").innerHTML += contractFactory.createContract(data);
}

function createData() {
    let name = document.querySelector("#contract-name-input").value;
    let groupName = document.querySelector('#group-select').value;
    let type = document.querySelector('#type-select').value;
    let description = document.querySelector('#contract-description-input').value;
    let loophole = document.querySelector('#loophole-input').value;
    let dicePool =  document.querySelector('#dice-pool-input').value;

    return {
        name: name,
        groupName: groupName,
        type: type,
        description: description,
        loophole: loophole,
        dicePool: dicePool
    };
}
