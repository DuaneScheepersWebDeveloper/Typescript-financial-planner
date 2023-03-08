"use strict";
// let test = 'new test';
// let age = 30;
// let isBlackBelt = false;
// let test2 ="test2";
// //test =20;
// test = 'new test2';
// //age='test3';
// age=29;
// //isBlackBelt ="yes";
// isBlackBelt= true;
// const circ = (diameter:number)=>{
//     return diameter*Math.PI;
// }
// console.log(circ(30));
// console.log(test2);
// //------------------------------
// //arrays 
// let names = ['bob','guest','guest2'];
// names.push('guest3');
// // names.push(2); can't do this
// let numbers = [1,2,3,4,5];
// numbers.push(42);
// console.log(numbers);
// // names.push('tom'); can't do this
// let mixed =['Tosser',23,'Fred',8,7,true];
// mixed.push('George');
// mixed.push(24);
// mixed[0]=32;
// console.log(mixed);
//objects
// let students ={
//     name:'Natasha',
//     Gender:'Female',
//     age:20,
// };
// students.age=40;
//------------------------------
//explicit types
// let character:string;
// let ageOfPerson:number;
// let isLoggedIn:boolean;
// ageOfPerson= 3;
// isLoggedIn= false;
//arrays
// let students1:string[]=[];
// students1.push("Paddock","Jonathan");
// console.log(students1);
//union types
// let mixed1:(string|number|boolean)[]=[];
// mixed1.push("Paddock",34);
// mixed1.push(false);
// console.log(mixed1);
// let uid:string|number|boolean;
// uid = 123;
// uid='123';
//objects
// let students2:object;
// students2 = {name:"George",age:23, married:false};
//  let students3: {
//     name:string,
//     age:number,
//     married:boolean
//  };
//  students3 = {name:"George Lopez",age:43, married:true};
//------------------------------
// let age:any = 25;
// age= true;
// console.log(age);
// age="Hello";
// console.log(age);
// age = {name:"George Lopez"};
// console.log(age);
// let mixed:any[]=[];
// mixed.push(5,"Hello",true);
// console.log(mixed);
// let mixed2:{name:any,age:number,married:boolean};
// mixed2={name:"George",age:23,married:true};
// console.log(mixed2);
// console.log("test");
// console.log("test2");
// console.log("test3");
// let greet: Function;
// greet=()=>{
//     console.log("Hello!");
// }
// const add = (a:number, b:number ,c:number|string =10):void=>{
//  console.log(a +b);
//  console.log(c);
// }; 
// add(12,8);
// const minus = (a:number, b:number):number=>{
//     return a + b;
// }
// let result = minus(10,7);
//----------------------------------------------------------
//Aliases
// type StringOrNum = string|number;
// type objWithName = {name:string, uid:StringOrNum}
// const logDetails =(uid:StringOrNum,item:string)=>{
//     console.log(`${item} has a uid of ${uid}`);
// }
// logDetails(5,"Matthew");
// const greet = (user:objWithName)=>{
// console.log(`${user.name} says hello`);
// };
// greet({name:"Duane",uid:6});
//----------------------------------------------------------
//Function Signatures
// let greet:Function;
// example 1
// let greet:(a:string, b:string)=>void;
// greet=(name:string, greeting:string)=>{
//     console.log(`${name} says ${greeting}`);
// }
// greet("Jan","Hello");
// //example 2
// let calc:(a:number, b:number, c:string)=>number;
// calc = (numOne:number, numTwo:number, action:string)=>{
//     if(action==='add'){
//         return numOne + numTwo;
//     }if(action==='subtract'){
//         return numOne - numTwo;
//     }else{
//         return numOne && numTwo;
//     }
// };
// //example 3
// let logDetails:(obj:{name:string, age:number})=>void;
// type person= {name:string, age:number};
// logDetails =(students:person)=>{
//     console.log(`${students.name} is ${students.age} years old`);
// };
//----------------------------------------------------------
