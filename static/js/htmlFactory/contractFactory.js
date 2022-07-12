export let contractFactory = {
    createContract: function createContract(data) {
        return `
            <div class="card contract-card group-style" data-id="${data.id}" data-group-id="${data.group_id}">
                <div class="card-body">
                    <h5 class="card-title group-main-color" data-group-id="${data.group_id}">
                        ${data.name}
                    </h5>
                    <h6 class="card-subtitle mb-2 group-secondary-color" data-group-id="${data.group_id}">
                        ${data.group_name}
                    </h6>
                    <div class="d-flex flex-row card-bottom">
                        <div class="card-bottom-part">
                            <p class="group-main-color" data-group-id="${data.group_id}">${data.type}</p>
                        </div>
                        <div class="card-bottom-part">
                            <p class="more-data group-main-color" data-group-id="${data.group_id}"
                               data-bs-toggle="modal" data-bs-target="#contract-modal" data-id="${data.id}">
                                more
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    createContractData: function createContractData(group_id) {
        return `
            <div class="modal-content group-style" data-group-id="${group_id}">
                <div class="modal-header">
                    <div>
                        <h3 class="contract-title group-main-color" data-group-id="${group_id}" id="contractTitle"></h3>
                        <h4 class="contract-title group-secondary-color" data-group-id="${group_id}" id="contractGroup"></h4>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body container">
                    <div>
                        <div class="row">
                            <div class="col">
                                <h5 class="group-main-color" data-group-id="${group_id}">Description</h5>
                                <p id="contractDescription" class="group-secondary-color" data-group-id="${group_id}"></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <h5 class="group-main-color" data-group-id="${group_id}">Loop Hole</h5>
                                <p id="contractLoopHole" class="group-secondary-color" data-group-id="${group_id}"></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <h5 class="group-main-color" data-group-id="${group_id}">Type</h5>
                                <p id="contractType" class="group-secondary-color" data-group-id="${group_id}"></p>
                            </div>
                            <div class="col">
                                <h5 class="group-main-color" data-group-id="${group_id}">Cost</h5>
                                <p id="contractCost" class="group-secondary-color" data-group-id="${group_id}"></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <h5 class="group-main-color" data-group-id="${group_id}">Contract Dice Pool</h5>
                                <p id="contractDicePool" class="group-secondary-color" data-group-id="${group_id}"></p>
                            </div>
                            <div class="col">
                                <h5 class="group-main-color" data-group-id="${group_id}">Dice Pool Against</h5>
                                <p id="contractDicePoolAgainst" class="group-secondary-color" data-group-id="${group_id}"></p>
                            </div>
                        </div>
                    </div>
                    <p id="contractCost" class="group-secondary-color" data-group-id="${group_id}"></p>
                    <p id="contractType" class="group-main-color" data-group-id="${group_id}"></p>
                    <p id="contractDicePool" class="group-secondary-color" data-group-id="${group_id}"></p>
                    <p id="contractDicePoolAgainst" class="group-secondary-color" data-group-id="${group_id}"></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" id="edit-contract">Edit Contract</button>
                </div>
            </div>
        `
    },

    createContractForm: function createContractForm(groupNames, isAdd) {
        let options = "";
        for (let name of groupNames) {
            options += `<option> ${name} </option>`;
        }

        return `
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel"> ${isAdd ? "Add contract" : "Edit contract"}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="contract-name-input">Name</label>
                            <input class="form-control" type="text" id="contract-name-input">
                        </div>
                        <div class="form-group d-flex justify-content-between">
                            <div class="inline-form-element">
                                <label for="group-select">Group</label>
                                <select class="form-control" id="group-select">
                                    ${options}
                                </select>
                            </div>
                            <div class="inline-form-element">
                                <label for="type-select">type</label>
                                <select class="form-control" id="type-select">
                                    <option>Common</option>
                                    <option>Royal</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="contract-description-input">Description</label>
                            <textarea class="form-control" id="contract-description-input" rows="5"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="loophole-input">Loophole</label>
                            <textarea class="form-control" id="loophole-input" rows="3"></textarea>
                        </div>
                        <div class="form-group d-flex justify-content-between">
                            <div class="inline-form-element">
                                <label for="dice-pool-input">Dice Pool</label>
                                <input class="form-control" type="text" id="dice-pool-input">
                            </div>
                            <div class="inline-form-element">
                                <label for="dice-pool-against-input">Dice Pool Against</label>
                                <input class="form-control" type="text" id="dice-pool-against-input">
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary"
                            id="${isAdd ? "add-contract-finisher" : "edit-contract-finisher"}">
                        Update
                    </button>
                </div>
            </div>
        `
    }
};