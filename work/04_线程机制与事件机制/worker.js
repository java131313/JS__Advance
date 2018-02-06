function fibonacci(num) {
  return num >= 2? fibonacci(num - 1) + fibonacci(num -2): 1
}

var onmessage = function (event) {
  console.log(event.data);
  var result = fibonacci(event.data);
  postMessage(result);
}