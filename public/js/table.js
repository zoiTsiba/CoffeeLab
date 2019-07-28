// Basic example
$(document).ready(function () {
    $('#ordersTable').DataTable({
        "ordering": false // false to disable sorting (or any other option)
    });
    $('.dataTables_length').addClass('bs-select');
});