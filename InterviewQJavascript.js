/*
data types

first class object in javascript?
In computer science, a programming language is said to support first-class functions (or function literal) if it treats functions as 
first-class objects. Specifically, this means that the language supports constructing new functions during the execution of a program, 
storing them in data structures, passing them as arguments to other functions, and returning them as the values of other functions.
>A function is an instance of the Object type
>A function can have properties and has a link back to its constructor method
>You can store the function in a variable
>You can pass the function as a parameter to another function
>You can return the function from a function

oops in javascript?
Class
Object
Inheritance
Encapsulation – The process of wrapping property and function within a single unit is known as encapsulation.

bind, call, apply?
bind() -bind attaches this into function and it needs to be invoked separately:
call() - call attaches this into function and executes the function immediately:
apply() - apply is similar to call except that it takes an array-like object instead of listing the arguments out one at a time.


ways to create an object
{}, new Object, Object.create()

ways to copy data from on object to other?
>Object.assign() - the assignment operator doesn't create a copy of an object, it only assigns a reference to it.
>Object.assign({}, obj) - child nodes are still mutable,
>JSON.parse(JSON.stringify(obj)) - it will deep copy the object even chid node are immutable with respect to parent.
Array [...array] - this will deep copy.

Circular objects are objects that have properties referencing themselves. [JSON.parse(JSON.stringify(obj)) this does not work for copying it will throug an error]


forEach, map, reduce, filter - higher order functions.
Map:
The map() method is used for creating a new array from an existing one, applying a function to each one of the elements of the  array.
Filter:
The filter() method takes each element in an array and it applies a conditional statement against it.  
If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array. 
(parent array is not modified)
Reduce:
The reduce() method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each element of the array.
forEach :
will not create a new arrray, applys a function to each one of the elements of the  array. 
*/
https://medium.com/jspoint/how-javascript-works-in-browser-and-node-ab7d0d09ac2f
http://latentflip.com/loupe/?code=ZnVuY3Rpb24gcHJpbnRIZWxsbygpIHsNCiAgICBjb25zb2xlLmxvZygnSGVsbG8gZnJvbSBiYXonKTsNCn0NCg0KZnVuY3Rpb24gYmF6KCkgew0KICAgIHNldFRpbWVvdXQocHJpbnRIZWxsbywgMzAwMCk7DQp9DQoNCmZ1bmN0aW9uIGJhcigpIHsNCiAgICBiYXooKTsNCn0NCg0KZnVuY3Rpb24gZm9vKCkgew0KICAgIGJhcigpOw0KfQ0KDQpmb28oKTs%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
What is a call stack?
 It is the indication of the current exectable position we are in 
 Whenever a function is called, the JavaScript engine creates a Function Execution Context for the function, pushes it on top of the Call Stack, 
 and starts executing the function.
> it can have 16000 entires at a time.

when to use server side rendering?
how does callback chain ?
What is difference between promise and async?
promise - If the function “fxn1” is to executed after the promise, then promise.then(fxn1) continues execution of the current function after adding the fxn1 call to the callback chain.	
async - If the function “fxn1” is to executed after await, then await X() suspends execution of the current function and then fxn1 is executed.                                
https://www.geeksforgeeks.org/difference-between-promise-and-async-await-in-node-js/
