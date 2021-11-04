"use strict";
(function () {
  let person = {
    firstName: "Jim",
    lastName: "Cooper",
    age: 29,
  };

  for (let propertyName in person) {
    display(propertyName + ": " + person[propertyName]);
  }
})();
