// pure functions
function pureFunc(){
// some thing
}

//HOC function
function twice(f, v) {
  return f(f(v));
}
function add3(v) {
  return v + 3;
}
const result = twice(add3, 1);
console.log("Result is ", result);

//Expression Function
let expressionVariableFunction = function y(){};
let expressionObjectFun =  {something: function(){}};
let expressionarrayFuntion = someArrayVariable.push(function doSomething(){});

