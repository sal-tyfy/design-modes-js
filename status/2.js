class SuccessState {
  show() {
    console.log("green");
  }
}
class WarningState {
  show() {
    console.log("yellow");
  }
}
class ErrorState {
  show() {
    console.log("red");
  }
}

class Battery {
  constructor() {
    this.amount = "high";
    this.state = new SuccessState();
  }
  show() {
    this.state.show();
    if (this.amount === "high") {
      this.amount = "middle";
      this.state = new WarningState();
    } else if (this.amount === "middle") {
      this.amount = "low";
      this.state = new ErrorState();
    }
  }
}

const battery = new Battery();
battery.show();
battery.show();
battery.show();
