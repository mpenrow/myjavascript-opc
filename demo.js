"use strict";
(function () {
  let person1 = {
    firstName: "Michael",
    lastName: "Penrow",
    age: 29,
    isAdult() {
      return this.age >= 18;
    },
  };

  let healthStats = {
    height: 68,
    weight: 150,
  };

  function mergeHealthStats(person, healthStats) {
    return Object.assign({}, person, healthStats);
  }

  let mergedPerson = mergeHealthStats(person1, healthStats);

  display(mergedPerson);

  display(person1);
})();
