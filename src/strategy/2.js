class Customer {
  constructor(kind) {
    this.kind = kind;
  }
  pay(amount) {
    return this.kind.pay(amount);
  }
}
class Common {
  pay(amount) {
    return amount;
  }
}
class Member {
  pay(amount) {
    return amount * 0.9;
  }
}
class Vip {
  pay(amount) {
    return amount * 0.8;
  }
}
const customer1 = new Customer(new Member());
console.log(customer1.pay(100));
const customer2 = new Customer(new Vip());
console.log(customer2.pay(100));
const customer3 = new Customer(new Common());
console.log(customer3.pay(100));
