class Customer {
  constructor(type) {
    this.type = type;
  }
  pay(amount) {
    if (this.type == "member") {
      return amount * 0.9;
    } else if (this.type === "vip") {
      return amount * 0.8;
    } else {
      return amount;
    }
  }
}

const customer1 = new Customer("member");
console.log(customer1.pay(100));
const customer2 = new Customer("vip");
console.log(customer2.pay(100));
const customer3 = new Customer("common");
console.log(customer3.pay(100));
