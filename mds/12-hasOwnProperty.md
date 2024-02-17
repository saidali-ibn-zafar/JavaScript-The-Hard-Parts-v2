## hasOwnProperty 

The hasOwnProperty method is used to check if an object has a property with a specified key. It returns a boolean value indicating whether the object has the specified property as a direct property of that object and not inherited through the prototype chain.

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
console.log(user1.hasOwnProperty('user'));

```
