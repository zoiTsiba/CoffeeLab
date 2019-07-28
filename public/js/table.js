// Basic example
$(document).ready(function () {
    $('#ordersTable').DataTable({
        "ordering": false // false to disable sorting (or any other option)
    });
    $('.dataTables_length').addClass('bs-select');
});


function AddRowTable() {
    // Table Rows
    var table = document.getElementById("ordersTable");
    // Form data initialize
    let name = document.getElementById("newOrderName").value;
    let lastName = document.getElementById("newOrderLastName").value;
    let iban = document.getElementById("newOrderIBAN").value;
    let time = document.getElementById("inputTime").value;
    let order = document.getElementById("newOrderOrder").value;
    let cost = document.getElementById("newOrderCost").value;
    // Date format now
    Number.prototype.padLeft = function (base, chr) {
        var len = (String(base || 10).length - String(this).length) + 1;
        return len > 0 ? new Array(len).join(chr || '0') + this : this;
    }
    var d = new Date,
        dformat = [d.getHours().padLeft(),
        d.getMinutes().padLeft(),
        d.getSeconds().padLeft()].join(':');

    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    cell1.innerHTML = name;
    cell2.innerHTML = lastName;
    cell3.innerHTML = dformat;
    cell4.innerHTML = time;
    cell5.innerHTML = order;
    cell6.innerHTML = cost;
}