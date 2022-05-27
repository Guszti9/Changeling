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
    }
};