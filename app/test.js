export default {
  aa() {
    console.log(33333222233)
  },
  promise() {
    return new Promise(function(resolve, reject) {
    var a = 1;
    if (a) {
      resolve(123)
    } else {
      reject('err')
    }
  })}
}