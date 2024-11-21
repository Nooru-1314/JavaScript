// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

var createCounter = function(init){
    let current = init;
    return {
        increment :()=>{
                        current += 1;
                        return current;
                    },
        decrement :()=>{
                        current -= 1;
                        return current;
                    },
        reset :()=>{
            current = init;
            return current;

        }
    };
};
console.log(createCounter(5).increment());
console.log(createCounter(5).decrement());
console.log(createCounter(5).reset());