import { dataHandler } from "./data/dataHandler.js";
import { contractFactory } from "./htmlFactory/contractFactory.js"
import { groupController } from "./contractGroup.js"

let ContractDataList = [];
let contractData;

function addEventListenerToAddContract() {
    document.querySelector('#add-contract').addEventListener(
        "click",
        function() {
            dataHandler.getContractGroups().then(groupNames => {
                document.querySelector("#contract-modal-dialog").innerHTML = contractFactory.createContractForm(groupNames, true);
                addEventListenerToAddContractFinisher();
            })
        }
    )
}

function addEventListenerToAddContractFinisher() {
    document.querySelector('#add-contract-finisher').addEventListener(
        "click",
        async function() {
            let data = await createData();
            let response = await dataHandler.addContract(data);
            if (response.massage === "ok") {
                data.id = response.id;
                addContract(data);
            }
        }
    );
}

function addEventListenerToAllMoreData() {
    document.querySelectorAll(".more-data").forEach(e => e.addEventListener(
        "click",
        clickToMore
    ));
}

function addEventListenerToEditContract() {
    document.querySelector("#edit-contract").addEventListener(
        "click",
        async function() {
            dataHandler.getContractGroups().then(groupNames => {
                document.querySelector("#contract-modal-dialog").innerHTML = contractFactory.createContractForm(groupNames, false);
                addDataToEditContract(contractData);
                addEventListenerToEditContractFinisher();
            })
        }
    )
}

function addEventListenerToEditContractFinisher() {
    document.querySelector("#edit-contract-finisher").addEventListener(
        "click",
        async function() {
            let data = await createData();
            let id = contractData.id
            data.id = id;
            let response = await dataHandler.updateContract(id, data);
            if (response.massage === "ok") {
                updateContract(id, data);
                loadContractData(contractData.id);
            }
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

async function createData() {
    let name = document.querySelector("#contract-name-input").value;
    let groupName = document.querySelector('#group-select').value;
    let groupId = await dataHandler.getGroupIdByName({name: groupName});
    let type = document.querySelector('#type-select').value;
    let description = document.querySelector('#contract-description-input').value;
    let loophole = document.querySelector('#loophole-input').value;
    let dicePool =  document.querySelector('#dice-pool-input').value;

    return {
        name: name,
        groupName: groupName,
        groupId: groupId,
        type: type,
        description: description,
        loophole: loophole,
        dicePool: dicePool
    };
}

async function clickToMore(e) {
    let id = e.currentTarget.getAttribute("data-id");
    loadContractData(id);
}

async function loadContractData(id) {
    contractData = await dataHandler.getContract(id);
    document.querySelector("#contract-modal-dialog").innerHTML = contractFactory.createContractData(contractData.group_id);
    addDataToMoreDataModal(contractData);
    addEventListenerToEditContract();
    groupController.recolorByGroup();
}

// Contract Manager
function addContract(data) {
    addToContractDataList(CreateDataForContractDataList(data));
    showContract();
}

function deleteContract(id) {
    deleteFromContractDataList(id);
    document.querySelector(`.contract-card[data-id="${id}"]`).remove();
}

function updateContract(id, data) {
    deleteContract(id);
    addContract(data);
}

function showContract() {
    let contractContainer = document.querySelector("#contracts-container");
    contractContainer.innerHTML = "";
    ContractDataList.forEach(data => {
        contractContainer.innerHTML += contractFactory.createContract(data);
    })

    addEventListenerToAllMoreData();
    groupController.recolorByGroup();
}

// ContractDataList Manager
function CreateDataForContractDataList(data) {
    return {
        id: data.id,
        name: data.name,
        group_id: data.groupId,
        group_name: data.groupName,
        type: data.type
    }
}

function addToContractDataList(data) {
    ContractDataList.push(data);
    ContractDataList.sort(sorter(elem => elem.group_name?.toLowerCase(),
                                 elem => elem.name?.toLowerCase()));
}

function deleteFromContractDataList(id) {
    ContractDataList = ContractDataList.filter(elem => elem.id !== id)
}

function updateElemOfContractDataList(id, data) {
    deleteFromContractDataList(id);
    addToContractDataList(data);
}

const sorter = (func1, func2) => (a, b) => {
    if (func1(a) < func1(b)) return -1;
    if (func1(0) > func1(b)) return 1;

    if (func2(a) < func2(b)) return -1;
    if (func2(a) > func2(b)) return 1;

    return 0;
}

// Init
function init() {
    addEventListenerToAddContract();
    addEventListenerToAllMoreData();
    dataHandler.getAllContract().then(result => {
        ContractDataList = result;
    })
    groupController.loadContractGroups();
}

init();
