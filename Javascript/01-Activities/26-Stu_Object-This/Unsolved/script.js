// TODO: What does 'this' refer to?
console.log(this);//window

// TODO: What does 'this' refer to?
function helloThis() {//window object
  console.log(`Inside this function, this is ${this}`);
}

// TODO: What will this log?
const child = {
  age: 10,
  ageTenYears: function () {
    console.log(this.age + 10);//20;
  },
};

// TODO: What will this log?
const investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      console.log(this.initialInvestment * 1.15);//5750
    },
  },
};

// TODO: After commenting, check your results!
helloThis();

// TODO: After commenting, check your results!
child.ageTenYears();
investor.investment.investmentGrowth();
