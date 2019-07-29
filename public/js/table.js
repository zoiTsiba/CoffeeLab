// Basic example
$(document).ready(function () {
    $('#ordersTable').DataTable({
        "ordering": false // false to disable sorting (or any other option)
    });
    $('.dataTables_length').addClass('bs-select');
});

var array = [];
function AddRowTable() {
    // Table Rows
    let table = document.getElementById("ordersTable");
    // Form data initialize
    let name = document.getElementById("newOrderName").value;
    let lastName = document.getElementById("newOrderLastName").value;
    let store = document.getElementById("inputStore").value;
    let iban = document.getElementById("newOrderIBAN").value;
    let time = parseInt(document.getElementById("inputTime").value, 10);
    let order = document.getElementById("newOrderOrder").value;
    let cost = document.getElementById("newOrderCost").value;
    // Time 
    let minutes = time - 1;
    let seconds = 60;

    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    cell1.innerHTML = name + ' ' + lastName;
    cell2.innerHTML = store;
    cell3.innerHTML = iban;
    let timer = setInterval(function () {
        cell4.innerHTML = minutes + "m " + seconds + "s ";
        seconds--;
        if (seconds === 0) {
            minutes--;
            seconds = 60;
        }
        if (minutes < 0) {
            clearInterval(timer);
            table.deleteRow(1);
        }
    }, 1000);
    cell5.innerHTML = order;
    cell6.innerHTML = cost;

    let rec = record();
    rec.setcost(cost);
    rec.setiban(iban);
    rec.setlastName(lastName);
    rec.setname(name);
    rec.setorder(order);
    rec.setstore(store);
    rec.settime(time);
    array.push(rec);
    localStorage.setItem("array", array);

}

function record() {
    let name;
    let lastName;
    let store;
    let iban;
    let time;
    let order;
    let cost;

    function getname() { return name; }
    function getlastName() { return lastName; }
    function getstore() { return store; }
    function getiban() { return iban; }
    function gettime() { return time; }
    function getorder() { return order; }
    function getcost() { return cost; }
    function setname(name) { this.name = name; }
    function setlastName(lastName) { this.lastName = lastName; }
    function setstore(store) { this.store = store; }
    function setiban(iban) { this.iban = iban; }
    function settime(time) { this.time = time; }
    function setorder(order) { this.order = order; }
    function setcost(cost) { this.cost = cost; }
    return {
        getname: getname,
        getlastName: getlastName,
        getcost: getcost,
        getiban: getiban,
        getstore: getstore,
        gettime: gettime,
        getorder: getorder,
        setname: setname,
        setlastName: setlastName,
        setcost: setcost,
        setiban: setiban,
        setstore: setstore,
        settime: settime,
        setorder: setorder
    }
}

