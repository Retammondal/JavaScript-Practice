const employees = [
  { id: 1, name: "Rahul", salary: 20000 },
  { id: 2, name: "Priya", salary: 30000 },
  { id: 3, name: "Amit", salary: 25000 }
];

function increaseSalary(employeesList, percentage) {
  const updatedSalary = employeesList.map((v)=>({...v, salary : v.salary*(100+percentage)/100}));
  return updatedSalary
}

const updated = increaseSalary(employees, 10);

console.log(updated);
console.log(employees);