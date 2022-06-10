import { dataHandler } from "./data/dataHandler.js";
import { contractFactory } from "./htmlFactory/contractFactory.js"

let contractData;


function addEventListenerToAddContract() {
    document.querySelector('#add-contract').addEventListener(
        "click",
        function() {
            dataHandler.getContractGroups().then(groupNames => {
                document.querySelector("#contract-add-modal").innerHTML = contractFactory.createContractForm(groupNames);
                addEventListenerToAddContractFinisher();
            })
        }
    )
}

function addEventListenerToAddContractFinisher() {
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
}

function addEventListenerToAllMoreData() {
    document.querySelectorAll(".more-data").forEach(e => e.addEventListener(
        "click",
        async function(e) {
            document.querySelector("#contract-data-modal").innerHTML = contractFactory.createContractData();
            let id = e.currentTarget.getAttribute("data-id");
            contractData = await dataHandler.getContract(id);
            addDataToMoreDataModal(contractData);
            addEventListenerToEditContract();
        }
    ));
}

function addEventListenerToEditContract() {
    document.querySelector("#edit-contract").addEventListener(
        "click",
        async function() {
            dataHandler.getContractGroups().then(groupNames => {
                document.querySelector("#contract-data-modal").innerHTML = contractFactory.createContractForm(groupNames);
                addDataToEditContract(contractData);
                addEventListenerToAddContractFinisher();
            })
        }
    )
}

function addDataToMoreDataModal(data) {
    document.querySelector("#contractTitle").innerText = data.name;
    document.querySelector("#contractGroup").innerText = data.group_name;
    document.querySelector("#contractDescription").innerText = data.description;
    document.querySelector("#contractLoopHole").innerText = data.loophole;
    document.querySelector("#contractCost").innerText = data.cost
    document.querySelector("#contractType").innerText = data.type;
    document.querySelector("#contractDicePool").innerText = data.dice_pool;
    document.querySelector("#contractDicePoolAgainst").innerText = data.dice_pool_against;
}


function addDataToEditContract(data) {
    document.querySelector("#contract-name-input").value = data.name;
    document.querySelector("#group-select").value = data.group_name;
    document.querySelector("#type-select").value = data.type;
    document.querySelector("#contract-description-input").value = data.description;
    document.querySelector("#loophole-input").value = data.loophole;
    document.querySelector("#dice-pool-input").value = data.dice_pool;
    document.querySelector("#dice-pool-against-input").value = data.dice_pool_against;
}


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

function init() {
    addEventListenerToAddContract();
    addEventListenerToAllMoreData();
}

init();
