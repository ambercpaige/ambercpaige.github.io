function whenPanelClicked() {
    alert("you clicked on a panel!")
}
function onPageReady() {
    $(".panel").click(whenPanelClicked)
}

$(document).ready(onPageReady)