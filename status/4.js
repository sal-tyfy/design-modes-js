class Promise {
  constructor(fn) {
    this.state = "initial";
    this.successes = [];
    this.errors = [];
    let resolve = (data) => {
      this.state = "fullfilled";
      this.successes.forEach((item) => item(data));
    };
    let reject = (error) => {
      this.state = "failed";
      this.errors.forEach((item) => item(error));
    };
    fn(resolve, reject);
  }
  then(success, error) {
    this.successes.push(success);
    this.errors.push(error);
  }
}
let p = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let num = Math.random();
    if (num > 0.5) {
      resolve(num);
    } else {
      reject(num);
    }
  }, 500);
});
p.then(
  (data) => {
    console.log("success", data);
  },
  (error) => {
    console.log("error", error);
  }
);
