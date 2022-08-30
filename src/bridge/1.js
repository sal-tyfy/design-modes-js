class A {
  constructor(bridge) {
    this.bridge = bridge;
  }
  go() {
    console.log(`从${this.from()}到${this.bridge.to()}`);
  }
  from() {
    throw new Error("子类实现");
  }
}

class A1 extends A {
  from() {
    return "A1";
  }
}
class A2 extends A {
  from() {
    return "A2";
  }
}

class B {
  to() {
    throw new Error("子类实现");
  }
}

class B1 extends B {
  to() {
    return "B1";
  }
}

class B2 extends B {
  to() {
    return "B2";
  }
}
const b2 = new B2();
const a1 = new A1(b2);
a1.go();
