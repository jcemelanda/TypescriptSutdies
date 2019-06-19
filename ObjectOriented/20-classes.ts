class Invoice{
  companyProfile: string;

  constructor(public name, public city, public state){
    this.companyProfile = name + ' ' + city + ' ' + state;
  }
}

var googleInvoice = new Invoice('Google', 'Mountain View', 'State')
var microsoftInvoice = new Invoice('Microsoft', 'Palo Alto', 'State')

console.log(googleInvoice.companyProfile);
console.log(microsoftInvoice.companyProfile);
