export let contractFactory = {
    createContract: function createContract(data) {
        return `
            <div class="card contract-card">
                <div class="card-body">
                    <h5 class="card-title">${data.name}</h5>
                    <h6 class="card-subtitle mb-2">${data.groupName}</h6>
                    <div class="d-flex flex-row card-bottom">
                        <div class="card-bottom-part">
                            <p>${data.type}</p>
                        </div>
                        <div class="card-bottom-part">
                            <p class="more-data"> more </p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    createContractData: function createContractData() {
        return `
            <div class="modal-content">
                <div class="modal-header">
                    <div>
                        <h3 class="contract-title" id="contractTitle"></h3>
                        <h4 class="contract-title" id="contractGroup"></h4>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p id="contractDescription"></p>
                    <p id="contractLoopHole"></p>
                    <p id="contractCost"></p>
                    <p id="contractType"></p>
                    <p id="contractDicePool"></p>
                    <p id="contractDicePoolAgainst"></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        `
    },

    createContractForm: function createContractForm(groupNames) {
        let options = "";
        console.log(groupNames);
        for (let name of groupNames) {
            options += `<option> ${name} </option>`;
        }

        return `
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Add contract</h5>
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
                    <button type="button" class="btn btn-primary" id="add-contract-finisher">Understood</button>
                </div>
            </div>
        `
    }
};