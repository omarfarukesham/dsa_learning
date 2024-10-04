const person = {
    name: 'omar',
    city: 'Dhaka',
    localAddress: {
        village: 'Jangai',
        post: 'hilli',
    }
}


// const shallowCopy = {...person}

// shallowCopy.city = 'Dinajpur'

// console.log(person.city)

const original = {
    name: 'Omar',
    age: 28,
    address: {
      city: 'Dhaka',
      country: 'Bangladesh'
    }
  };
  
  // Create a shallow copy using Object.assign or spread operator
  const shallowCopy = { ...original };
  
  // Modifying the nested 'address' object in the shallow copy
  shallowCopy.age = 38;
  
  console.log(original.age); // Output: 'Chittagong'
  