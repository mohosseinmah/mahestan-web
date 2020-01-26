export function updateSideLinks() {
    deactivateSideLinks();
    activateCurrentSideLink();
}

function deactivateSideLinks() {
    const elements = document.getElementsByClassName("waves-effect waves-cyan");
    let element;
    for (let i = 0; i < elements.length; i++) {
        element = elements.item(i) as HTMLElement;
        element.className = element.className.replace(" active", "");
    }
}

function activateCurrentSideLink() {
    const currentPagePath = document.location.pathname;
    const sideLink = document.querySelector(`a.waves-effect.waves-cyan[href='${currentPagePath}']`);
    if (sideLink) {
        sideLink.className += " active";
    }
}