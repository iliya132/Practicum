'use strict';
const badResult = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(function () {
      console.log(i);
    }, 10);
  }
};

const iifeSolution = () => {
  for (var i = 0; i < 10; i++) {
    setTimeout((function () {
      console.log(i);
    })(), 10);
  }
};

function es6Solution() {
  for (let i = 0; i < 10; i++) {
    setTimeout(function () {
      console.log(i);
    }, 10);
  }
};

const bindSolution = function () {
  for (var i = 0; i < 10; i++) {
    setTimeout(function () {
      console.log(this.i);
    }.bind({ i: i }), 10);
  }
};

badResult();
iifeSolution();
es6Solution();
bindSolution();