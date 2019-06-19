var dbQuery = function () {
    setTimeout(function () {
        console.log('Query results');
    }, 3000);
};
function loadPage(q) {
    console.log("Header");
    q();
    console.log("Sidebar");
    console.log("footer");
}
loadPage(dbQuery);
//# sourceMappingURL=028_higher_order_functions.js.map