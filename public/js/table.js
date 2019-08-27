
let data = [];

$(document).ready(function () {
    $.ajax({
        url: "/getOrders", type: "GET", success: function (order) {
            // console.log(order);
            $.each(order, function (k, v) {
                data.push({
                    name: v.firstname + ' ' + v.lastname,
                    store: v.store,
                    iban: v.iban,
                    duration: v.duration,
                    cost: v.cost,
                    order: v.order
                });
            });
            $('#ordersTable').bootstrapTable({ data: data });
        }
    });
});


function AddRowTable() {

    // Table Rows
    let table = document.getElementById("ordersTable");
    // Form data initialize
    let firstName = document.getElementById("newOrderName").value;
    let lastName = document.getElementById("newOrderLastName").value;
    let store = document.getElementById("inputStore").value;
    let iban = document.getElementById("newOrderIBAN").value;
    let duration = parseInt(document.getElementById("inputTime").value, 10);
    let order = document.getElementById("newOrderOrder").value;
    let cost = document.getElementById("newOrderCost").value;
    // Error handling if form is empty
    if (firstName === '' || lastName === '' || store === '' || iban === '' || duration === '' || order === '' || cost === '') {
        return 'Empty';
    }

}


function record() {
    let firstName;
    let lastName;
    let store;
    let iban;
    let time;
    let order;
    let cost;

    function getname() { return firstName; }
    function getlastName() { return lastName; }
    function getstore() { return store; }
    function getiban() { return iban; }
    function gettime() { return time; }
    function getorder() { return order; }
    function getcost() { return cost; }
    function setname(name) { this.firstName = firstName; }
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

