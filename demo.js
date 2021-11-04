"use strict";
(function () {
  let person = {
    firstName: "Jim",
    lastName: "Cooper",
    age: 29,
  };

  display(Object.getOwnPropertyDescriptor(person, "firstName"));
})();
