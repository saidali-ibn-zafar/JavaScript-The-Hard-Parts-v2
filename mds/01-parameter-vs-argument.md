WHAT IS THE DIFFERENCE BETWEEN PARAMETER AND ARGUMENT?  

- A parameter is a named variable in a function's declaration that represents a value or data that the function expects to receive as input when it is called. 

- An argument is an actual value or expression that is supplied to a function when it is called. 

```js
function addTwo(number){
  return number + 2;
}

const num = 7;

// num is parameter in this case below:
addTwo(num); // 9

// 3 is an argument in this case below:
addTwo(3); // 5
```
