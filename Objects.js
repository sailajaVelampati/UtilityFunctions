// compare two objects

let obj1 = {test:1, answer:2};
let obj2 = {test:1, answer:2};
Boolean(JSON.stringify(obj1)===JSON.stringify(obj2)) // true
