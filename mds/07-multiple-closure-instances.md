
# Multiple Closure Instances

- functions can be returned from other functions in JavaScript.
```js
function outer() {
  let counter = 0;
  function incrementCounter () {
    counter++;
    console.log(counter);
  }
  return incrementCounter;
}

// -- -- -- -- --

const myNewFunction = outer();
myNewFunction(); // 1
myNewFunction(); // 2

// -- -- -- -- --

const anotherFunction = outer();
anotherFunction(); // 1
anotherFunction(); // 2
```
