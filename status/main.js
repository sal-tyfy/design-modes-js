class Battery {
  constructor() {
    this.amount = "high";
  }
  show() {
    if (this.amount === "high") {
      console.log("green");
      this.amount = "middle";
    } else if (this.amount === "middle") {
      console.log("yellow");
      this.amount = "low";
    } else if (this.amount === "low") {
      console.log("red");
    }
  }
}

const battery = new Battery();
battery.show();
battery.show();
battery.show();
