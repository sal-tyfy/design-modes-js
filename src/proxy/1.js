class Google {
  get(url) {
    return "google";
  }
}
class Proxy {
  constructor() {
    this.google = new Google();
  }
  get(url) {
    return this.google.get(url);
  }
}
const proxy = new Proxy();
const result = proxy.get("http://www.google.com");
console.log(result);
