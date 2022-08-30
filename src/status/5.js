// const StateMachine = require("javascript-state-machine");

class StateMachine {
  constructor(options) {
    let { init = "", transitions = [], methods = {} } = options;
    this.state = init;
    transitions.forEach((transition) => {
      const { from, to, name } = transition;
      this[name] = function () {
        if (this.state === from) {
          this.state = to;
          const onMethod =
            "on" + name.slice(0, 1).toUpperCase() + name.slice(1);
          methods[onMethod] && methods[onMethod]();
        }
      };
    });
  }
}
const fsm = new StateMachine({
  init: "solid",
  transitions: [
    {
      from: "solid",
      to: "liquid",
      name: "melt",
    },
    {
      from: "liquid",
      to: "solid",
      name: "freeze",
    },
    {
      from: "liquid",
      to: "gas",
      name: "vaporize",
    },
    {
      from: "gas",
      to: "liquid",
      name: "condense",
    },
  ],
  methods: {
    onMelt: function () {
      console.log("melt");
    },
    onFreeze: function () {
      console.log("freeze");
    },
    onVaporize: function () {
      console.log("vaporize");
    },
    onCondense: function () {
      console.log("condense");
    },
  },
});

fsm.melt();
fsm.freeze();
