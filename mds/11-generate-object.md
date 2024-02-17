## Solution1. Generate objects using a function

```js
function userCreator (name, score) {
  const newUser = {}
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function () {
    newUser.score++;
  };
  return newUser;
};

const user1 = userCreator("Saidali", 4);
const user2 = userCreator("Ali", 5);
user1.increment();

```


## Better Solution:
```js
function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore); // Set userFunctionStore as prototype
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionStore = {
  increment: function() { this.score++; },
  login: function() { console.log("Logged in"); }
};

const user1 = userCreator("Saidali", 4);
const user2 = userCreator("Ali", 5);
user1.increment(); // Increment user1's score by 1

console.log(user1); 

```
