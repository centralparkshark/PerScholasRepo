let shareButton = document.getElementById("shareIcon");
shareButton.addEventListener("click", displayPopup)
let shareBlock = document.getElementById("shareBlock")
let shareSVG = document.getElementById("shareSVG")

function displayPopup() {
    if (shareBlock.style.display == "none") {
        shareBlock.style.display = "flex"; 
        shareButton.style.backgroundColor = "var(--DesaturatedDarkBlue)"
        shareSVG.style.filter = "var(--svgWhite)"
    } else {
        shareBlock.style.display = "none";
        shareButton.style.backgroundColor = "var(--LightGrayishBlue)"
        shareSVG.style.filter = "none"
    }
    
    
}
