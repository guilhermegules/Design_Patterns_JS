function Fedex() {
  this.calculate = (package) => {
    package = 10;
    fedexShipping = 2.5;
    return package + fedexShipping;
  };
}

function USPS() {
  this.calculate = (package) => {
    package = 10;
    uspsShipping = 5;
    return uspsShipping + package;
  };
}

function Correios() {
  this.calculate = (package) => {
    package = 10;
    correiosShipping = 15;
    return correiosShipping + package;
  };
}

function Shipping() {
  this.company = "";
  this.setStrategy = (company) => {
    this.company = company;
  };
  this.calculate = (package) => {
    return this.company.calculate(package);
  };
}

const fedex = new Fedex();
const usps = new USPS();
const correios = new Correios();

const package = { from: "Alabama", to: "Georgia", weight: 1.56 };

const shipping = new Shipping();

shipping.setStrategy(fedex);

console.log("Fedex: " + shipping.calculate(package));

shipping.setStrategy(usps);
console.log("USPS: " + shipping.calculate(package));

shipping.setStrategy(correios);
console.log("Correios: " + shipping.calculate(package));
