"use strict";
(function () {
  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  Person.prototype.age = 29;

  display(Person.prototype);

  let jim = new Person("Jim", "Cooper");
  let sophia = new Person("Sofia", "Cooper");
  sophia.__proto__.age = 19;

  display(jim.__proto__);
  display(sophia.__proto__);

  display(Person.prototype === jim.__proto__);
})();
