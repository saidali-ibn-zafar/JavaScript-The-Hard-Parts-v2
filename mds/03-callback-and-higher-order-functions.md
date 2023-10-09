Functions in JavaScript = `first class objects`. That is to say that they have all the features of objects. First class means, they have everything that objects have, they have too.

```js
function copyArrayAndManipulate(array, instruction) {
  const output = [];
  for(let i = 0; i < array.length; i++){
    output.push(instruction(array[i]));
  }
  return output;
}

function multiplyBy2(input){return input * 2;}
const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);
```

HIGHER ORDER FUNCTION is `copyArrayAndManipulate()`
CALLBACK FUNCTION is `multiplyBy2()` 

- - - - - 

- Which is our Higher Order Function?
  - The outer function that takes in a function is our higher-order function.


- Which is our Callback Function?
  - The function we insert is our callback function.

- - - - - 

Any function that takes in a function or one out `automatically is a HIGHER ORDER FUNCTION.
