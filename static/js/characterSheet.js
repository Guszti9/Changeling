function addEventListenerToAttribute() {
    const attributeFavicon = [...document.querySelectorAll(".attribute-favicon")];
    for (let favicon of attributeFavicon) {
        favicon.addEventListener("click", (e) => {
            let target = e.currentTarget
            target.classList.toggle("fa-circle");
            target.classList.toggle("fa-times-circle");
        })
    }
}

function init() {
    addEventListenerToAttribute();
}

init();
