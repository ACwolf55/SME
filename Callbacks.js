// callbacks are invoked functions in the parameters of another funtiontion

/*                       any funciton that 
                           is put here will be           
                         invoked for each loop
                                |
                                V       */
function repeatMe(numTimes, callback) {
  for (let i = 0; i < numTimes; i++) {
    callback();
  }
}

function sayHello() {
  console.log("Hello");
}

repeatMe(3, sayHello);
