"use strict";
(function () {
  let person = {
    firstName: "Michael",
    lastName: "Penrow",
    age: 17,
    isAdult() {
      return this.age >= 18;
    },
  };

  for (let propertyName in person) {
    display(propertyName);
  }
})();
