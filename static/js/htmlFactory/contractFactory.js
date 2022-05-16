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
    } 
};