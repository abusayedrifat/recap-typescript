"use strict";
{
    // by inheritence we get property initializer from parent
    class Parent {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numOfHours) {
            console.log(`${this.name} get sleep 8 hours a day`);
        }
    }
    class Child1 extends Parent {
        constructor(name, age, address, income) {
            super(name, age, address);
            this.income = income;
        }
        infoAboutChild() {
            console.log(`The child of ${this.name} already earning news is ${this.income}`);
        }
    }
    const checkInheritence = new Child1("sayed ahmed", 24, "b-baria", true);
    checkInheritence.infoAboutChild();
}
