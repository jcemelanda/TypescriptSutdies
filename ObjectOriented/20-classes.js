var Invoice = /** @class */ (function () {
    function Invoice(name, city, state) {
        this.name = name;
        this.city = city;
        this.state = state;
        this.companyProfile = name + ' ' + city + ' ' + state;
    }
    return Invoice;
}());
var googleInvoice = new Invoice('Google', 'Mountain View', 'State');
var microsoftInvoice = new Invoice('Microsoft', 'Palo Alto', 'State');
console.log(googleInvoice.companyProfile);
console.log(microsoftInvoice.companyProfile);
//# sourceMappingURL=20-classes.js.map