
/*
//link java script file with html 
//print data by alert and console.log() 
let js='amazing'; 
console.log(40 + 23 - 50 + 22);

*/

//--------------------------------------//


//variable name should not start with number
//variable name should be camel case for better practice - personName, myVariable,personAgeValue
//variable name can start with _ and $ sign also
//variable name should not be a keyword like- function,switch,if,else,false,true etc
//variable Name should be a name who describe something like PersonName,Personage, gaeGroup, job1,


//primitive data types
//1.Number  //all numbers of type Number in js
//2.String  ' ', "  "
//3.Boolean: true,false

//4.undefined
//5.null
//6.Symbol(ES2015)
//7.BigInt- hold larger Integer 
/*
console.log(typeof true);
console.log(typeof 'true');
console.log(typeof 23);
console.log(typeof 'true');
//we can assign ne value to first declared variable

let myVariable=true;
console.log(typeof myVariable);
myVariable=23;
console.log(typeof myVariable);
myVariable='hello';
console.log(typeof myVariable);

let time;
console.log(time); //undefined
console.log(typeof time);//undefined
//we can reassign this value
    time=10;

console.log(typeof null);  //output is object
*/

//-------------------------------//


/*
//declaring variables in javaScript
//let,const,var

//let  
let age;  //we can just define and later use
age=30;
age='thirty' //we can assign other type value also
//let is block scope

//const
    //some constants define with const like PI,
    //const year;//we cannot just define , we need to give value
    const year =2019;
    //year=2010; //we cannot reassign the value
    console.log(year);

    //var 
        //mostly avoid this way of declaration -its old technique
        //look similar to let
        var month;  
         month=30;
        month='thirty'      //reassign
        console.log(month);
        //var is function scope
*/

//------------------------------------------//


/*
//basic operators + - * / %
const now=2022
const myAge=now-1996
console.log(myAge)

//2**3 is 2 to the power of 3

//to join strings with + operator

const firstName='ajit';
const lastName='jadhav';
console.log(firstName +' '+ lastName);
console.log(firstName ,' ', lastName);//we can join also with comma,
//assignment operators
let x=10+5;//15
x+=10;              
console.log(x);//15+10=25
//similarly we can do with * ,-
//x++
//x--

//comparison operators - gives boolean result
//  >  <  >=  <=  == ===

//operator precidence
//https://community.pega.com/sites/pdn.pega.com/files/help_v718/tools/expressionbuilder/ref_operators.htm
*/

//-----------------------------//


//coding chllange1

        /*
        Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

        1. Store Mark's and John's mass and height in variables
        2. Calculate both their BMIs using the formula (you can even implement both versions)
        3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

        TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
        TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

        GOOD LUCK 😀
        */
    //## answer
    /*
        let markMass=40;
        let markHeight=1.5;
        let johnMass=50;
        let johnHeight=1.7;

        let markBMI=markMass/(markHeight**2)
        let johnBMI=johnMass/(johnHeight**2)

        let marHigherBmi=(markBMI > johnBMI);
        console.log(marHigherBmi);
*/

//------------------------------------------//

 /*
//string and template literals
    const firstName='john';
    const lastName='carter';
    const job='engineer';
    const birthYear=1996;
    const data="i am " + firstName + ' '+ lastName+ ' '+ 'my birthYear is '+ birthYear + ' and i am '+ job;
    console.log(data);

    //using backtics `  `
    const dataInTemplateLiterals=` i am ${firstName} ${lastName} my birthYear is ${birthYear} and i am ${job} `
    console.log(dataInTemplateLiterals);

    //we can make multiple line strings with `  `
    console.log(`hello
     how are you..?
     and where are you..?`); 
   */
  
     //------------------------------------------//



     /*
   //decision making with if-else  
   if(true){
    //do this
   }
  else if( true){
    //do this
  }
  else{
    //do this
  }

  */

  //-----------------------------------------//


  //coding challange2
  









