/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
------------------------------------------------------------------------------------*/

// function tellFortune(jobTitle, geographicLocation, partnerName, numberOfChildren) {
//     x= "You will be a " + jobTitle + " in " + geographicLocation + ", and married to " + partnerName + " with " + numberOfChildren + " kids.";
//    return x;
// }
// console.log(tellFortune('ali','jordan','Alice','4'));


/*------------------------------------------------------------------------------------------------
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
---------------------------------------------------------------------------------------*/
// function calculateDogAge( numberOfChildren=prompt('enter age of dog')) {
//     y= 'Your doggie is '+numberOfChildren*7 + ' years old in dog years!';
//    return y;
// }
// console.log(calculateDogAge());




/*--------------------------------------------------------------------------------------
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
------------------------------------------------------------------------------------------*/

// function calculateSupply(NumOfCup, age) {
//     var x = age * 365;
//     var y = x * NumOfCup;
//     var z = 'You will need ' + y + ' cups of tea to last you until the ripe old age of ' + (x / 365);
//     return z;
// }

// var cups = prompt('Enter how many cups of tea you drink daily:');
// var age = prompt('Enter your age:');
// console.log(calculateSupply(cups, age));

/*------------------------------------------------------------------------------------------
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
----------------------------------------------------------------------------------------------*/
// function HelloName(name=prompt('enter your name')){
// y= 'hello '+ name;
// return y;
// }
// console.log(HelloName());

/*--------------------------------------------------------------------------------------------
5
what is the error:
function double(cat) {
  return 2 * x;
}
// the error: x
*/

function double(cat) {
    return 2 * cat;
}

// function double(7) {
//   return 2 * 7;
// }
// the error: 7

function double() {
  return 2 * 7;
}

// function double('7') {
//   return 2 * 'x';
// }
// the error: 7 ,x

function double(x) {
    return 2 * 7;
  }


/*--------------------------------------------------------------------------------------
6
fix these functions:
func double1(x {
  return 2 * x ;
}


functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/

function double1(x) {
    return 2 * x ;
}

function double2 (x){
return 2 * x;
}

function  double3 (x){
    return 2 * x;
}

/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
------------------------------------------------------------------------------------*/
// function cubeNumber(num=prompt('enter a number')){
//     y= `cub (${num}) =>`+ num*num*num;
//     return y;
//     }
//     console.log(cubeNumber());

/*--------------------------------------------------------------------------------------
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
-----------------------------------------------------------------------------------*/
// function multiply(num1=prompt('enter a first number'),num2=prompt('enter a second number')){
//     y= `multiply (${num1} , ${num2}) => ` + (num1*num2) ;
//     return y;
//     }
//     console.log(multiply());

/*-------------------------------------------------------------------------------------
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

--------------------------------------------------------------------------------------*/
// function canIGetADrivingLicense(num=prompt('enter your age :')){
//     x=20-num;

//     y= `canIGetADrivingLicense(${num}) => `;
//     if(num>=20){
//         console.log(y+' "yes you can" ')
//     } else{
//         console.log(y+`please come back after ${x} years to get one `)
//     }
//     return
// }
// console.log(canIGetADrivingLicense());

/*-----------------------------------------------------------------------------------
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
---------------------------------------------------------------------*/
// function sameLength(x=prompt('enter a first string') ,y=prompt('enter a second string') ){

//     a=x.length;
//     b=y.length;
//     if(a===b){
//         console.log(true);
//     }else{
//         console.log(false);
//     }
//     return
// }
// console.log(sameLength());
/*-----------------------------------------------------------------------------
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
---------------------------------------------------------------------------------------*/
// function largerNubmer(x=prompt('enter a first number :') ,y=prompt('enter a second number :') ){
//     if(x>y){
//         console.log('the large number is : ' +x);
//     }else{
//         console.log('the large number is : ' +y);
//     }
// return
// }
// console.log(largerNubmer());

/*---------------------------------------------------------------------------------------
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

-------------------------------------------------------------------------------*/
// function smallerNubmer(x=prompt('enter a first number :') ,y=prompt('enter a second number :') ,z=prompt('enter a third number :') ){
//     if(x<y && x<z){
//         console.log('the smalle number is : ' +x);
//     }else if (y<x && y<z){
//         console.log('the smalle number is : ' +y);
//     } else if(z<x && z<y){
//         console.log('the smalle number is : ' +z);
//     }
// return
// }
// console.log(smallerNubmer());
/*-------------------------------------------------------------------------------
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

---------------------------------------------------------------------------------*/
// function shorterString(str1=prompt('enter string 1'), str2=prompt('enter string 2'), str3=prompt('enter string 3'), str4=prompt('enter string 4'), str5=prompt('enter string 5')) {
//     var shortest = str1;
//     var strings = [str2, str3, str4, str5];
//     for (var i = 0; i < strings.length; i++) {
//         if (strings[i].length < shortest.length) {
//             shortest = strings[i];
//         }
//     }
//     return shortest;
// }
// console.log(shorterString());

/*----------------------------------------------------------------------------------
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
-----------------------------------------------------------------------------------------------------------------*/
// function shorterString(str1=prompt('enter string 1'), str2=prompt('enter string 2'), str3=prompt('enter string 3'), str4=prompt('enter string 4')) {
//     var longest = str1;
//     var strings = [str2, str3, str4];
//     for (var i = 0; i < strings.length; i++) {
//         if (strings[i].length > longest.length) {
//             longest = strings[i];
//         }
//     }
//     return longest;
// }
// console.log(shorterString());
/*-----------------------------------------------------------------------------------------------------------
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

----------------------------------------------------------------------------------------------------------------*/
// function isEven(y=prompt('enter a  number :')){

//     if(y%2===0){
//         console.log(true);
//     }else{
//         console.log(false);
//     }

//     return
// }
// console.log(isEven());

/*--------------------------------------------------------------------------------------------------------------------------
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

-----------------------------------------------------------------------------------------*/
// function isOdd(y=prompt('enter a  number :')){

//     if(y%2 !==0){
//         console.log(true);
//     }else{
//         console.log(false);
//     }

//     return
// }
// console.log(isOdd());

/*----------------------------------------------------------------------------------------
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

-----------------------------------------------------------------------------------------*/
// function positive(y=prompt('enter a  number :')){

//     if(y>=0){
//         console.log(y);
//     }else{
//         console.log(y*-1);
//     }

//     return
// }
// console.log(positive());

/*-----------------------------------------------------------------------------------------
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
------------------------------------------------------------------------------------------*/
// function fullName(x=prompt('enter your  first name :'),y=prompt('enter your  second name :')){
// z= x + " " + y
// return z
// }
// console.log(fullName());

/*-----------------------------------------------------------------------------------------
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

------------------------------------------------------------------------------------------*/
// function average( num1 = parseFloat(prompt('enter number 1')) ,num2 = parseFloat(prompt('enter number 2')) ,num3 = parseFloat(prompt('enter number 3')) ,num4 = parseFloat(prompt('enter number 4')) ,num5 = parseFloat(prompt('enter number 5')) ){
//     y= num1+num2+num3+num4+num5;
//     x= y/5;
//     return x;
//     num1 = parseFloat(prompt('enter number 1'));
// }
// console.log(average());

/*------------------------------------------------------------------------------------------
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

----------------------------------------------------------------------------------------------*/
// function randomNumber( num = Math.random()){
//     console.log(num);
//     return

// }
// console.log(randomNumber())
/*---------------------------------------------------------------------------------------------
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

-------------------------------------------------------------------------------------------*/
// function randomBetweenNumbers(x=prompt('enter your  min number :'),y=prompt('enter your  max number :')){
//     return Math.random() * (y - x)  + x;
    
    
// }
// console.log(randomBetweenNumbers())

/*-----------------------------------------------------------------------------------------
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
------------------------------------------------------------------------------------*/
// function scoreInUniversty(mark=prompt('enter the mark :')){
//     if(mark>=95 && mark<=100){
//         console.log('A');

//     }else if(mark>=85 && mark<=94)
//         {
//             console.log('B');
//         }else if(mark>=70 && mark<=84)
//             {
//                 console.log('C');
//             }else if(mark>=50 && mark<=69)
//                 {
//                     console.log('D');
//                 }else{
//                     console.log('F');
//                 }
//                 return 
// }
// console.log(scoreInUniversty());

/*------------------------------------------------------------------------------
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

--------------------------------------------------------------------------------------*/
// let count=0;
// function counter(){
//     count++;
//     return count;
// }
// console.log(counter())
// console.log(counter())
// console.log(counter())
/*-------------------------------------------------------------------------------------
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
--------------------------------------------------------------*/

let count=0;
function counter(){
    count++;
    return count;
}

console.log(counter());
console.log(counter());
console.log(counter());

function resetCounter(){
    count=0;
    return count;
}
console.log(resetCounter());

console.log(counter());


