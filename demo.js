"use strict";
(function () {
  function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isAdult = function () {
      return this.age >= 21;
    };
  }

  let jim = new Person("Jim", "Cooper", 29);
  let sophia = new Person("Sophia", "Cooper", 17);

  display(jim.isAdult());
  display(sophia.isAdult());
})();
