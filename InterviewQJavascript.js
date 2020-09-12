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
call()

ways to create an object
{}, new Object, Object.create()

ways to copy data from on object to other?
>Object.assign() - the assignment operator doesn't create a copy of an object, it only assigns a reference to it.
>Object.assign({}, obj) - chaid nodes are still mutable,
>JSON.parse(JSON.stringify(obj)) - it will deep copy the object even chid node are immutable with respect to parent.
Array [...array] - this will deep copy.

Circular objects are objects that have properties referencing themselves. [SON.parse(JSON.stringify(obj)) this soes not work for copying it will throug an error]

forEach, map, reduce, filter
Map:
The map() method is used for creating a new array from an existing one, applying a function to each one of the elements of the  array.
Filter:
The filter() method takes each element in an array and it applies a conditional statement against it. 
If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array.
Reduce:
The reduce() method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each element of the array.
forEach :
will not create a new arrray, applys a function to each one of the elements of the  array. 
*/
