# Functions can be returned from other functions in JavaScript

```js
function createFunction(){
  function multiplyBy2(num) {
    return num * 2;
  }
  return multiplyBy2;
}

const generateFunc = createFunction();
const result = generateFunc(3);
```

- - - - - 

# Calling a function in the same function call as it was defined

```js
function outer() {
  let counter = 0;
  function incrementCounter(){
    counter++;
  }
incrementCounter();
}
outer();
```

