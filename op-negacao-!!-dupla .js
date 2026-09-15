//valores falsy
console.log(!!0);  //false
console.log(!!"");  //false
console.log(!!null);  //false

//valores truthy
console.log(!!1)  //true
console.log(!!"texto")//true     
console.log(!![]) //array vazios são objetos, logo são truthy)
console.log(!!{})//true (objeto vazios são true

