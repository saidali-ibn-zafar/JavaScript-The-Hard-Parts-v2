# Function can be returned from another functions in JavaScript.

```js
function createFunction() {
  function multiplyBy2(num) {
    return num * 2;
  }
  return multiplyBy2;
}

const generatedFunc = createFunction();
const result = generatedFunc(3) // 6

 ```
