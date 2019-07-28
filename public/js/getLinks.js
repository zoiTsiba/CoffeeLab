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