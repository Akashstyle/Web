function printMessage(message){
    console.log(message);
}


function add(x,y){
    return (x+y);
}
let result = add(5,3);
printMessage(result);

function greet(name1,name2){
    return `hi ${name1} ${name2}`
}
 let user =greet("akash","darsigunta");
printMessage(user);

function sub(x,y){
    return (x-y);
}
let answer = sub(17,10);
printMessage(answer);

function division(x,y){
    return (x/y);
}
let div = division(10,2);
printMessage(div);

function multiplication(x,y){
    return (x*y);
}
let mul = multiplication(10,7);
printMessage(mul);

function modulo(x,y){
    return (x%y);
}
let remainder = modulo(2,10);
printMessage(remainder);
