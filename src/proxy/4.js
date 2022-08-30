const wangy = {
  name: "王燕",
  age: 31,
  height: 165,
};

const wangMom = new Proxy(wangy, {
  get(target, key) {
    if (key === "age") {
      return target.age - 2;
    } else if (key === "height") {
      return target.height + 3;
    } else {
      return target[key];
    }
  },
  set(target, key, val) {
    if (key === "boyfriend") {
      const boyfriend = val;
      if (boyfriend.age > 40) {
        throw new Error("too old");
      } else if (boyfriend.salary < 2000) {
        throw new Error("too poor");
      } else {
        target[key] = val;
      }
    }
  },
});
console.log(wangMom.age);
console.log(wangMom.height);
console.log(wangMom.name);
wangMom.boyfriend = {
  age: 39,
  salary: 10000,
};
