// function multi(n) {
//   if (n <= 1) {
//     return 1;
//   } else {
//     return n * multi(n - 1);
//   }
// }

// const sum = function (n) {
//   let result = 0;
//   for (let i = 1; i <= n; i++) {
//     result += multi(i);
//   }
//   return result;
// };
const sum = (function () {
  const cache = {};
  function multi(n) {
    if (n <= 1) {
      return 1;
    } else {
      return n * (cache[n - 1] || multi(n - 1));
    }
  }
  return function (n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
      const ret = multi(i);
      cache[i] = ret;
      result += ret;
    }
    return result;
  };
})();
console.time("cost");
console.log(sum(10000));
console.timeEnd("cost");
