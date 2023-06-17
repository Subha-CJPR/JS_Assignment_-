// PrintDeveloperbyMap()
function PrintDeveloperbyMap() {
    const employees = [
      { id: 1, name: "john", age: "18", profession: "developer" },
      { id: 2, name: "jack", age: "20", profession: "developer" },
      { id: 3, name: "karen", age: "19", profession: "admin" }
    ];
  
    const developers = employees
      .filter(employee => employee.profession === "developer")
      .map(employee => {
        console.log(employee);
        return employee;
      });
  }
  
  // PrintDeveloperbyForEach()
  function PrintDeveloperbyForEach() {
    const employees = [
      { id: 1, name: "john", age: "18", profession: "developer" },
      { id: 2, name: "jack", age: "20", profession: "developer" },
      { id: 3, name: "karen", age: "19", profession: "admin" }
    ];
  
    employees.forEach(employee => {
      if (employee.profession === "developer") {
        console.log(employee);
      }
    });
  }
  
  // addData()
  function addData() {
    const employees = [
      { id: 1, name: "john", age: "18", profession: "developer" },
      { id: 2, name: "jack", age: "20", profession: "developer" },
      { id: 3, name: "karen", age: "19", profession: "admin" }
    ];
  
    const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    employees.push(newEmployee);
  
    console.log(newEmployee);
  }
  
  // removeAdmin()
  function removeAdmin() {
    const employees = [
      { id: 1, name: "john", age: "18", profession: "developer" },
      { id: 2, name: "jack", age: "20", profession: "developer" },
      { id: 3, name: "karen", age: "19", profession: "admin" }
    ];
  
    const filteredEmployees = employees.filter(employee => employee.profession !== "admin");
    console.log(filteredEmployees);
  }
  
  // ConcatinateArray()
  function concatenateArray() {
    const employees = [
      { id: 1, name: "john", age: "18", profession: "developer" },
      { id: 2, name: "jack", age: "20", profession: "developer" },
      { id: 3, name: "karen", age: "19", profession: "admin" }
    ];
  
    const additionalEmployees = [
      { id: 4, name: "alice", age: "22", profession: "designer" },
      { id: 5, name: "bob", age: "21", profession: "manager" },
      { id: 6, name: "michael", age: "25", profession: "analyst" }
    ];
  
    const concatenatedArray = employees.concat(additionalEmployees);
    console.log(concatenatedArray);
  }
  
