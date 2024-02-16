/* CHALLENGE 1 */

function sayHowdy() {
  console.log('Howdy');
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log('Partnah');
}
// After thinking it through, uncomment the following line to check your guess!
testMe(); // what order should these log out? Howdy or Partnah first?

// Answer:
// Partnah
// Howdy

/* CHALLENGE 2 */

function delayedGreet() {
  setTimeout(() => console.log('welcome'), 3000);
}
// Uncomment the following line to check your work!
delayedGreet(); // should log (after 3 seconds): welcome

/* CHALLENGE 3 */

function helloGoodbye() {
  console.log('hello');
  setTimeout(() => console.log('good bye'), 3000);
}
// Uncomment the following line to check your work!
helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye

/* CHALLENGE 4 */

function brokenRecord() {
  setTimeout(() => {
    console.log('hi again');
    brokenRecord();
  }, 1000);
}
// Uncomment the following line to check your work!
brokenRecord(); // should log (every second): hi again

/* CHALLENGE 5 */

function limitedRepeat(count = 5) {
  if (count > 0) {
    setTimeout(() => {
      console.log('hi for now');
      limitedRepeat(count - 1);
    }, 1000);
  }
}
// Uncomment the following line to check your work!
limitedRepeat(); // should log (every second, for 5 seconds): hi for now

/* CHALLENGE 6 */

function everyXsecsForYsecs(func, duration = 2, limit = 20) {
  if (limit > 0) {
    if (limit >= duration) {
      setTimeout(() => {
        func();
        everyXsecsForYsecs(func, duration, limit - duration);
      }, duration * 1000);
    } else {
      setTimeout(func, duration * 1000);
    }
  }
}
// Uncomment the following lines to check your work!
function theEnd() {
  console.log('This is the end!');
}
everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!

/* CHALLENGE 7 */

function delayCounter(target, wait) {
  let i = 1;

  function insideFunc() {
    if (target > 0) {
      setTimeout(() => {
        console.log(i);
        i++;
        --target;
        insideFunc();
      }, wait);
    }
  }

  return insideFunc;
}
// UNCOMMENT THESE TO TEST YOUR WORK!
const countLogger = delayCounter(3, 1000);
countLogger();

// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3

/* CHALLENGE 8 */

function promised (val) {
  return new Promise(resolve, reject) => {
    setTimeout(() => {
      resolve(val)
    }, 2000)
}
}
// // UNCOMMENT THESE TO TEST YOUR WORK!
const createPromise = promised('wait for it...');
createPromise.then((val) => console.log(val));
// // will log "wait for it..." to the console after 2 seconds

// // ...
