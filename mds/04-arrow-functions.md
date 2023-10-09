# Introduction arrow functions - a shorthand way to save functions

```js
function multiplyBy2(input) {return input * 2;}
// ->
const multiplyBy2 = (input) => {return input * 2;}
// ->
const multiplyBy2 = (input) => input * 2;
// ->
const multiplyBy2 = input => input * 2;


const output = multiplyBy2(3) // 6
```

TAKE A LOOK AT THIS BELOW: 

```js
function copyArrayAndManipulate(array, instruction) {
  const output = [];
  for(let i = 0; i < array.length; i++){
    output.push(instruction(array[i]));
  }
  return output;
}

function multiplyBy2(input){return input * 2;} // LOOK HERE
const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2); // LOOK HERE
```

THEN -> 
```js

// ... 

const multiplyBy2 = input => input * 2; // LOOK HERE
const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2); // LOOK HERE
```

OR THEN ->

```js

// ... 

// const multiplyBy2 = input => input * 2; // LOOK HERE. NO NEED ANYMORE!
const result = copyArrayAndManipulate([1, 2, 3], input => input * 2); // LOOK HERE!
```

DID YOU GET IT? if not review! 

