"use strict";

var Rose = 8;
var roses = 80;
var lily = 10;
var lilies = 50;
var tulip = 2;
var tulips = 120;

var R = Rose * roses;
var L = lily * lilies;
var T = tulip * tulips;

console.log(
  "Rose - unit price: ",
  Rose,
  ", quantity: ",
  roses,
  " , value: ",
  R
);
console.log(
  "lily - unit price: ",
  lily,
  ", quantity: ",
  lilies,
  " , value: ",
  L
);
console.log(
  "tulip - unit price: ",
  tulip,
  ", quantity: ",
  tulips,
  " , value: ",
  T
);
console.log("Total: ", R + L + T);

//Section 2.1
let v1 = true;
let v = Boolean(true);
let n1 = 100;
let n = Number(200);
let b1 = 52;
let b = BigInt(52);
let s1 = "Hello";
let s = String("Hello");

console.log(`${typeof v1} [${v1}]`);
console.log(`${typeof v} [${v}]`);
console.log(`${typeof n1} [${v1}]`);
console.log(`${typeof n} [${n}]`);
console.log(`${typeof b1} [${b}]`);
console.log(`${typeof s1} [${s}]`);

let bs = true + false;
let ns = 20 + 30;
let bi = 100n + 200n;
let ss = "He" + "ollo";
let uu = undefined + undefined;
console.log("-----------------------");

console.log(`${typeof bs} [${bs}]`);
console.log(`${typeof ns} [${ns}]`);
console.log(`${typeof bi} [${bi}]`);
console.log(`${typeof ss} [${ss}]`);
console.log(`${typeof uu} [${uu}]`);
console.log("-----------------------");

//Section 2.2
let testObj = { nr: 600, str: "text" };
console.log(testObj.nr);

let anshul = {
  name: "anshul",
  surname: "nindra",
  age: 14,
  email: "anshulnindra@gmail.com",
};
let aman = {
  name: "aman",
  surname: "nindra",
  age: 14,
  email: "amannindra@gmail.com",
};
console.log(anshul);
console.log(aman);
aman.phone = "925-353-2525";
anshul.phone = "535-325-3252";
console.log(anshul);
console.log(aman);
delete aman.phone;
delete anshul.phone;

let animal = [];
animal[0] = "cat";
animal[2] = "whale";

console.log(animal);
console.log(animal[1]);

console.log("-----------------------");

let names = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log("Array length");
console.log(names.length);
console.log(names.indexOf("Emma"));
console.log("Adding element to the end of the list");
names.push("Aman");
console.log(names);
console.log("Adding element to the beginning of the list");
names.unshift("Anshul");
console.log(names);
console.log("Removing the last index");
names.pop();
console.log(names);
console.log("removing the first index");
names.shift();
console.log(names);
console.log("Reversing the Array");
names.reverse();
console.log(names);

console.log("Print the array from Index to the end");
console.log(names.slice(2));
console.log("Print the array from first Index to the third Index");
console.log(names.slice(1, 3));
console.log(
  "Print the array from first Index to the before last index specified"
);
console.log(names.slice(1, 3));

let name = ["Aman", "Anshul"];
console.log("Combine two Arrays: " + names.concat(name));

console.log("-----------------------");
console.log("Section Practice");
let train = {
  start: "SF",
  end: "LA",
  price: 100,
};
console.log(train.start);
console.log(train.end);
console.log(train.price);

let person = {};
person.name = "Ram";
person.surname = "Nindra";
console.log(person);

let library = [
  { title: "Speaking Javascript", author: "Axel Busk", pages: 460 },
  {
    title: "Programming JavaScript Applications",
    author: "Eric Elliot",
    pages: 254,
  },
  {
    title: "Understanding ECMAScript 6",
    author: "Nicholas C. Zakas",
    pages: 352,
  },
];

library.push({
    title: "Learning JavaScript Design Patterns", 
    author: "Addy Osmani",
    pages: 254
});
console.log(library)

let lasttwo = library.slice(-2);
let removefirst = library.shift();

let output = 0;
output += library[0].pages + library[1].pages + library[2].pages;
console.log(library)
console.log(output);
