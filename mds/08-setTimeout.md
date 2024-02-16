![img](https://github.com/saidali-ibn-zafar/JavaScript-The-Hard-Parts-v2/assets/120341849/0a6e0e6e-40c5-420b-9dbb-fa46c9a5d655)

`console.log("I am first!")` is executed, logging `"I am first!"` to the console.
The execution of printHello2 is scheduled to happen after 0 milliseconds (almost immediately) due to setTimeout.
Since JavaScript is single-threaded and `setTimeout` schedules a task to be executed asynchronously, `"Hello"` will be logged to the `console`after `"I am first!"`.

Even though `printHello2` is scheduled with a timeout of `0` milliseconds, it doesn't mean it will execute `immediately`. It will be placed in the event queue and executed once the `call stack` is `empty`.
