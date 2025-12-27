"use strict";

/*
////////////////////////////////////
// Linking a JavaScript File
let js = "amazing";
console.log(40 + 8 + 23 - 10);

////////////////////////////////////
// Values and Variables
console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

////////////////////////////////////
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

////////////////////////////////////
// let, const and var
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher'

lastName = 'Schmedtmann';
console.log(lastName);

////////////////////////////////////
// Basic Operators
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

////////////////////////////////////
// Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

////////////////////////////////////
// Strings and Template Literals
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);*/

/*const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than john's (${BMIMark})`);
} else {
  console.log(`john's BMI (${BMIJohn}) is higher than Mark's (${BMIJohn})`);
}*/

// type conversion
/*const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1; // '11'
n = n - 1;
console.log(n);*/

// 5 falsy valuee : 0, '', undefined, null, NaN
/*console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean("milad"));
console.log(Boolean({}));

const money = 0;
if (money) {
  console.log("don't spent it all!");
} else {
  console.log("you should get a job!");
}

let height;
if (height) {
  console.log("YAY! height is defined!");
} else {
  console.log("Height is UNDEFINED!");
}*/

/*const age = 18;
if (age === 18) console.log("you just became an adult");

const favourite = Number(prompt("what's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 369) {
  console.log("cool! 369 is amazing number!");
} else if (favourite === 77) {
  console.log("hahaha!");
} else if (favourite <= 80) {
  console.log("good good :)");
}*/

/*const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
  console.log("sarah is able to drive!");
} else {
  console.log("someone else should drive ...");
}

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("sarah is able to drive!");
} else {
  console.log("someone else should drive ...");
}*/

/*const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy 🏆");
} else if (scoreDolphins < scoreKoalas) {
  console.log("Koalas win the trophy 🏆");
} else if (scoreDolphins === scoreKoalas) {
  console.log("Both win the trophy !");
}*/

// BONUS 1
/*const scoreDolphins = (97 + 112 + 81) / 3;
const scoreKoalas = (109 + 95 + 86) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy 🏆");
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
  console.log("Koalas win the trophy 🏆");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both win the trophy !");
} else {
  console.log("No one win the trophy !");
}*/

//video 29
/*const day = "monday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("plan course stracture");
    console.log("go to coding meetup");
    break;
  case "tuesday":
    console.log("prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("write code examples");
    break;
  case "friday":
    console.log("record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("enjoy the weekend!");
    break;
  default:
    console.log("not a vlid day!");
}

if (day === "monday") {
  console.log("plan course stracture");
  console.log("go to coding meetup");
} else if (day === "tuesday") {
  console.log("prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("write code examples");
} else if (day === "friday") {
  console.log("record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("enjoy the weekend!");
} else {
  console.log("not a vlid day!");
}*/

// video 30
/*3 + 4;
1991;
true && false && !false;

const me = "milad";
console.log(`I'm ${2037 - 1991} years old ${me}`);*/

// video 31
/*const age = 23;
//age >= 18
// ? console.log("I like to drink wine 🥂")
// : console.log("I like to drink water 🫗");

const drink = age >= 18 ? "wine 🥂" : "water 🫗";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🥂";
} else {
  drink2 = "water 🫗";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🥂" : "water 🫗"}`);*/

// video 33
/*const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);*/

// video 34 & 35
// Not special things

// video 36
/*let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

//const interFace = "Audio";
//const private = 534;*/

//video 37
/*function logger () {
  console.log('my name is milad');
}

// calling / running / invoking function
logger();
logger();
logger();


function fruitProcessor (apples, oranges) {
  const juice = `juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const applesjuice = fruitProcessor(5, 0);
console.log(applesjuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);*/

//video 38
// function declaration
/*function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);*/

//video 39
// function expression
/*const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntillRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return`${firstName} retires in ${retirement} years`;
}
console.log(yearsUntillRetirement(1991, 'jonas'));
console.log(yearsUntillRetirement(1980, 'milad'));*/

//video 40 - function calling other function
/*const cutPieces = function (fruit) {
  return fruit * 4;
};

const fruitProcessor = function (apples, oranges) {
  const applePiceces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  const juice = `juice with ${applePiceces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
};
console.log(fruitProcessor(2, 3));*/

//videeo 41 - reviewing function
/*const calcAge = function (birthYear) {
  return 2037 - birthYear;
}
const yearsUntillRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
  return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
  return -1;
  }
}
console.log(yearsUntillRetirement(1991, 'milad'));
console.log(yearsUntillRetirement(1970, 'jonas'));*/

//video 43 - challenge
/*const calcAvarage = (a, b, c) => (a + b + c) / 3;
console.log(calcAvarage(3, 4, 5));

// test 1
let scoreDolphins = calcAvarage(44, 23, 71);
let scoreKoalas = calcAvarage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win ⭐ (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win ⭐ (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No teams wins...');
  }
}
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 111);

// test 2
scoreDolphins = calcAvarage(85, 54, 41);
scoreKoalas = calcAvarage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);*/

//video 44 - arrays
/*const friends = ["Michael", "steven", "peter"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "jonas";
const jonas = [firstName, "moha", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years1 = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years1[0]);
const age2 = calcAge(years1[1]);
const age3 = calcAge(years1[years1.length - 1]);
console.log(age1, age2, age3);*/

//video 45 - array methods
/*const friends = ["Michael", "steven", "peter"];

// Add elements
const newLenght = friends.push("jay"); //به آخر اضافه میکنه
console.log(friends);
console.log(newLenght);

friends.unshift("john"); //به اول اضافه میکنه
console.log(friends);

// Remove elements
friends.pop(); //از آخر حذف میکنه
console.log(friends);

friends.shift(); //از اول حذف میکنه
console.log(friends);

console.log(friends.indexOf("steven")); //شماره طول المنت رو برمیگردونه(lenght)

friends.push(23);
console.log(friends.includes(23)); //این با true یا false برمیگردونه

if (friends.includes("steven")) {
  console.log("You have a friend called steven");
}*/

// video 47 - challenge
/*const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
// Arrow function ↑
//const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);*/

// video 48 - objects - part 1
/*const milad = {
  firstName: "milad",
  lastName: "moha",
  age: 2037 - 1991,
  job: "development",
};
console.log(milad);*/

// video 49 - dots vs bracket notation
/*const milad = {
  firstName: "milad",
  lastName: "moha",
  age: 2037 - 1991,
  job: "development",
  friends: ["hesam", "amir", "tahmoureth"],
};
console.log(milad);

console.log(milad.lastName);
console.log(milad["lastName"]);

const nameKey = "Name";
console.log(milad["first" + nameKey]);
console.log(milad["last" + nameKey]);

const intrestedIn = prompt(
  "What do you want to know about milad? choose between firstName, lastName, age, job, and friends"
);

if (milad[intrestedIn]) {
  console.log(milad[intrestedIn]);
} else {
  console.log("Wrong request!");
}

milad.location = "Iran";
milad["telegram"] = "@milad-gemini";
console.log(milad);

// challenge
console.log(
  `${milad.firstName} has ${milad.friends.length} friends, and his best friend is called ${milad.friends[0]}`
);*/

// video 50 - object methods
/*const milad = {
  firstName: "milad",
  lastName: "moha",
  birthYear: 1991,
  job: "development",
  friends: ["hesam", "amir", "tahmoureth"],
  hasDriverLicense: true,

  //calcAge: function (birthYear) {
  // return 2037 - birthYear;
  //}, // method 1

  //calcAge: function () {
  // return 2037 - this.birthYear;
  //}, // method 2

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  }, // method 3

  // challenge
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} years old ${
      this.job
    }, and he has ${this.hasDriverLicense ? "a" : "no"} driver's license.`;
  },
};
console.log(milad.calcAge());
console.log(milad.getSummary());*/

// video 52 - challenge
/*const hesam = {
  fullName: "Hesam Moh",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const amir = {
  fullName: "amir vah",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

hesam.calcBMI();
amir.calcBMI();
console.log(hesam.bmi);
console.log(amir.bmi);

if (hesam.bmi > amir.bmi) {
  console.log(
    `${hesam.fullName}'s BMI (${hesam.bmi}) is higher than ${amir.fullName}'s BMI (${amir.bmi})`
  );
} else if (amir.bmi > hesam.bmi) {
  console.log(
    `${amir.fullName}'s BMI (${amir.bmi}) is higher than ${hesam.fullName}'s BMI (${hesam.bmi})`
  );
}*/

// video 53 - iteration the for loop
// for loop keeps running while condition is TRUE
/*for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 😈 `);
}*/

//video 54 - looping arrays breaking and continue
/*const milad = [
  "milad",
  "moh",
  2037 - 1991,
  "development",
  ["hesam", "amir", "tahmoureth"],
  true,
];

const types = [];

//console.log(milad[0]);
//console.log(milad[1]);
//...
//console.log(milad[4]);
//milad 5 does NOT exist

for (let i = 0; i < milad.length; i++) {
  console.log(milad[i], typeof milad[i]);
  types.push(typeof milad[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < milad.length; i++) {
  if (typeof milad[i] !== "string") continue;

  console.log(milad[i], typeof milad[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < milad.length; i++) {
  if (typeof milad[i] === "number") break;

  console.log(milad[i], typeof milad[i]);
}*/

// video 55 - looping backwards amd loops in loops
// lopping backward
/*const milad = [
  "milad",
  "moh",
  2037 - 1991,
  "development",
  ["hesam", "amir", "tahmoureth"],
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = milad.length - 1; i >= 0; i--) {
  console.log(milad[i]);
}

// loops in loops
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise} Lifting weight repetition ${rep}`);
  }
}*/

// video 56 - the while loop
//for (let rep = 1; rep <= 10; rep++) {
//  console.log(`Lifting weight repetition ${rep}`);
//}

/*let rep = 1;
while (rep <= 10) {
  // console.log(`While: Lifting weight repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log("Loop is about to end ...");
  }
}*/

// video 58 - challenge
/*const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAvarage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    //sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAvarage([2, 3, 7]));
console.log(calcAvarage(totals));
console.log(calcAvarage(tips));*/

// video 59 - pathways and section roadmaps

// video 61 - section intro

// video 63 - prettier

// video 64 - installing node js and setting up
/*const x = "23";

const calcAge = (birthYear) => 2037 - birthYear;
console.log(calcAge(1991));*/

// video 65 - learning how to code

// video 66 - how to think like a developer

// video 67 - ussing google stackoverflow and MDN
/*// PROBLEM 1 :
// We work for a compani building a smart home thermometer. our must recent task is this: "Given an array of temperatrures of one day, calculate the temperature amplitude. keep in mind that sometimes there might be a sensor eror."

const temperatrures = [-3, -2, -6, -1, "eror", 9, 13, 17, 15, 14, 9, 5];

//1) understanding the problem
//- what is temp amplitude? Answer: difference between highest and l;owest temp
//- How to compute max and min temperatures?
//- What's a sensor eror? and what to do?
//2) Breaking up into sub-problem
//- How to ignore errors?
//- Find max value in temp array
//- Find min value in temp array
//- Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatrures);
console.log(amplitude);

// PROBLEM 2 :
// Fumction shoul now receive 2 arrays of temps

//1) Understand the problem
//- With 2 arrays, should we implement functionality twice? NO! just merge two arrays

//2) Breaking up into sub-problems
//- Merge two arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitude);*/

// video 68
