class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
Person.prototype.getName = function () {
  return this.name;
};
Person.prototype.getAge = function () {
  return this.age;
};
const p1 = new Person();
const p2 = new Person();
