window.onload = function () {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.array) {
            document.getElementById("ordersTable").tBodies = localStorage.getItem("array");
        }
    }
};