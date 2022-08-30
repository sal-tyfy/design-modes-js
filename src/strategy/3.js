class Customer {
  constructor(kind) {
    this.kind = kind;
    this.kinds = {
      common: (amount) => {
        return amount;
      },
      member: (amount) => {
        return amount * 0.9;
      },
      vip: (amount) => {
        return amount * 0.8;
      },
    };
  }
  pay(amount) {
    return this.kinds[this.kind](amount);
  }
}

const customer1 = new Customer("member");
console.log(customer1.pay(100));
const customer2 = new Customer("vip");
console.log(customer2.pay(100));
const customer3 = new Customer("common");
console.log(customer3.pay(100));
