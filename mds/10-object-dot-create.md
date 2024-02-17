## Creating user3 user dot notation
Object .create is going to give us fine-grained control over our object later on

```js
const user3 = Object.create(null);

user3.name = "Ali";
user3.score = 7;
user3.increment = function () {
  user3.score++;
};

```

