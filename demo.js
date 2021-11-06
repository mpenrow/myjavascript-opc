"use strict";
(function () {
  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  Person.prototype.age = 29;

  let jim = new Person("Jim", "Cooper");
  let sophia = new Person("Sofia", "Cooper");

  jim.age = 18;
  display(jim.hasOwnProperty("age"));
  display(jim.age);
})();
