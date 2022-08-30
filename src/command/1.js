class Cooker {
  cook() {
    console.log("cook");
  }
}

class Cleaner {
  clean() {
    console.log("clean");
  }
}

class CookCommand {
  constructor(receiver) {
    this.receiver = receiver;
  }
  execute() {
    this.receiver.cook();
  }
}
class CleanCommand {
  constructor(receiver) {
    this.receiver = receiver;
  }
  execute() {
    this.receiver.clean();
  }
}

class Customer {
  constructor(command) {
    this.command = command;
  }
  setCommand(command) {
    this.command = command;
  }
  clean() {
    this.command.execute();
  }
  cook() {
    this.command.execute();
  }
}

const cooker = new Cooker();
const cleaner = new Cleaner();
const cookCommand = new CookCommand(cooker);
const cleanCommand = new CleanCommand(cleaner);
const customer = new Customer(cookCommand);
customer.cook();
customer.setCommand(cleanCommand);
customer.clean();
