// mathematical operators
/*let x = 5;
let y = 7;
let addition = x+y;
let substraction = x-y;
let multiplication = x*y;
let division = x/y;
let modulo = x%y;
console.log(addition,substraction,multiplication,division,modulo);
//logical operators
//And operator
let number = 17;
let number1 = 22;
console.log(number>number1 && number<number1);
//OR operator
console.log(number>number1|| number<number1);
// NOT operator
console.log(!(number1>number&& number<number1));
//comparision operators
console.log(x<y,x>y,x==y,x<=y,x>=y);
//Ternary operator
let result = (8>9)?"true":"false";
console.log(result);
// Increment and Decrement
console.log(x++);
console.log(++x);
console.log(--x);
console.log(x--);
 console.log(x);


 let numArr = [2,4,5,8,9,12];

const result = numArr.map(key => key*5);
console.log(result);

const result1 = numArr.filter(one => one%2!=0);
console.log(result1);

const result2 = numArr.reduce((before,after)=>before+after,0);
console.log(result2);

//converting Inches to cm
//named function

function inchesTocm(num){
    return num*2.54;
}
console.log(inchesTocm(5));

//arrow or anonymous function

inchesTocm= (num)=>{
    return num*2.54;
}
console.log(inchesTocm(5));

//short hand function

inchesTocm=(num)=>num*2.54;
console.log(inchesTocm(5));

//converting cm to Inches

function cmToinches(num){
    return num*0.393701;
}
console.log(cmToinches(10));

cmToinches= (num)=>{
    return num*0.393701;
}
console.log(cmToinches(10));

cmToinches=(num)=>num*0.393701;
console.log(cmToinches(10));

//converting kilograms to grams

function kgTog(num){
    return num*0.001;
}
console.log(kgTog(17));


kgTog= (num)=>{
    return num*0.001;
}
console.log(kgTog(17));

kgTog=(num)=>num*0.001;
console.log(kgTog(17));


//converting grams to kilograms

function gTokg(num){
    return num*1000;
}
console.log(gTokg(10));

gTokg= (num)=>{
    return num*1000;
}
console.log(gTokg(10));

gTokg=(num)=>num*1000;
console.log(gTokg(10));

//converting to centimeters to millimetres

function cmTomm(num){
    return num*10;
}
console.log(cmTomm(17));
 
cmTomm = (num)=>{
    return num*10;
}
console.log(cmTomm(10));

cmTomm=(num)=>num*10;
console.log(cmTomm(25));

//converting millimeters to centimeters

function mmTocm(num){
    return num*0.1;
}
console.log(mmTocm(20));

mmTocm= (num)=>{
    return num*0.1;
}
console.log(mmTocm(30));

mmTocm=(num)=>num*0.1;
console.log(mmTocm(40));*/

let str = "good developers code";
str.split(" ").forEach(word=>{
    let lowerword=word.toLowerCase();
console.log(lowerword[0].toUpperCase()+lowerword.slice(1));

})