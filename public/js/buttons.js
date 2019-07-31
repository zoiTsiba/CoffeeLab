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
    if (event.target == nordmodal) {
        nordmodal.style.display = "none";
    } else if (event.target == eordmodal) {
        eordmodal.style.display = "none";
    }
}


function getLinks() {
    var store = document.getElementById("inputStore").value;
    if (store == "Mikel") {
        document.getElementById("link").innerHTML = 'https://www.e-food.gr/delivery/menu/mikel';
        document.getElementById("link").href = 'https://www.e-food.gr/delivery/menu/mikel';
    } else if (store == "Coffee Island") {
        document.getElementById("link").innerHTML = 'https://www.e-food.gr/delivery/menu/coffee-island';
        document.getElementById("link").href = 'https://www.e-food.gr/delivery/menu/coffee-island';
    } else if (store == "Lodge") {
        document.getElementById("link").innerHTML = 'https://www.e-food.gr/delivery/thessaloniki-thermi/lodge';
        document.getElementById("link").href = 'https://www.e-food.gr/delivery/thessaloniki-thermi/lodge';
    }
}

function getOrders() {
    let orders = document.getElementById("ordersTable").rows;
    for (let i = 0; i < orders.length; i++) {
        let td = orders[i].getElementsByTagName("td")[i].name;
        console.log(td);
    }
}