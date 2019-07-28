// Get the modal
var nordmodal = document.getElementById("newOrderModal");
var eordmodal = document.getElementById("existOrderModal");

// Get the button that opens the modal
var nordbtn = document.getElementById("newOrder");
var eordbtn = document.getElementById("existOrder");

// Get the <span> element that closes the modal
var nordspan = document.getElementById("newOrderSpan");
var eordspan = document.getElementById("existOrderSpan");

// When the user clicks the button, open the modal 
nordbtn.onclick = function () {
    nordmodal.style.display = "block";
}
eordbtn.onclick = function () {
    eordmodal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
nordspan.onclick = function () {
    nordmodal.style.display = "none";
}
eordspan.onclick = function () {
    eordmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == nordmodel) {
        nordmodal.style.display = "none";
    } else if (event.target == nordmodel){
        eordmodal.style.display = "none";
    }
}