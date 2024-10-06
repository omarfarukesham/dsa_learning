// Regular function to create a burger
function createBurger(bun, patty, cheese, toppings) {
    return `Burger with ${bun} bun, ${patty} patty, ${cheese}, and ${toppings}`;
  }
  
  console.log(createBurger('sesame', 'beef', 'cheddar', 'lettuce and tomato'));
  
  // Curried function to create a burger step-by-step
  function curriedCreateBurger(bun) {
    return function(patty) {
      return function(cheese) {
        return function(toppings) {
          return `Burger with ${bun} bun, ${patty} patty, ${cheese}, and ${toppings}`;
        };
      };
    };
  }
  
  console.log(curriedCreateBurger('sesame')('beef')('cheddar')('lettuce and tomato'));
  