const company = {
    name: "TechCorp",
    location: "New York",
    departments: {
      engineering: {
        employees: [
          { id: 1, name: "Alice", role: "Software Engineer" },
          { id: 2, name: "Bob", role: "DevOps Engineer" },
        ],
        teamLead: "Charlie",
      },
      marketing: {
        employees: [
          { id: 3, name: "Diana", role: "Marketing Specialist" },
          { id: 4, name: "Eve", role: "Content Creator" },
        ],
        teamLead: "Frank",
      },
    },
  };

  
  for(let key in company){
    console.log(company[key], company[key].departments)
    
  }

 Object.keys(company).forEach(key => console.log(key))
 Object.values(company).forEach(value => console.log(value))
 Object.entries(company).forEach(value => console.log(value))

for(const dept in company.departments){
    console.log(dept)
        const employes  = company.departments[dept].employees
        employes.forEach((employee)=> console.log(employee.name))
}

for(const dept in company.departments){
  const employees = company.departments[dept].employees;
  employees.forEach((em)=> console.log(em.name))
}


// for(let dept in company.departments){
//     let employees = company.departments[dept].employees
//     employees.forEach((employee)=> console.log(employee.name))
// }
 

const obj1 = { a: 1, b: 2}
const obj2 = {c: 3}

const newObj = Object.assign(obj1, obj2)
console.log(newObj)

console.log(Object.hasOwn(obj1, "b"))