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
