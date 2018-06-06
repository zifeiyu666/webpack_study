const greeter = require('./greet.js');
document.querySelector("#root").appendChild(greeter());
console.log(...[1,2,3])
import tst from './test.js'
tst.aa()
tst.promise().then((value) => {
  console.log(value)
  console.log('promise')
})