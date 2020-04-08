import Developer from "./dev";
import Tester from "./tester";

function EmployeeFactory() {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new Developer(name);
      case 2:
        return new Tester(name);
    }
  };
}

const employeeFactory = new EmployeeFactory();

const employees = [];

employees.push(employeeFactory.create("Guilherme", 1));
employees.push(employeeFactory.create("João", 2));
employees.push(employeeFactory.create("Hector", 2));
employees.push(employeeFactory.create("Anna", 1));

employees.forEach((emp) => {
  console.log("Hi, I am " + emp.name + " and i am a " + emp.type);
});
