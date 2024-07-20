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
  pages: 254,
});
console.log(library);

let lasttwo = library.slice(-2);
let removefirst = library.shift();

let output = 0;
output += library[0].pages + library[1].pages + library[2].pages;
console.log(library);
console.log(output);

//2.2.1 Complex Data types
console.log("----------------------------------------------------------------");
console.log("2.2.1 Complex Data types");

let testObject = {
  age: 17,
  name: "name",
  languages: ["English", "Hindi"],
};
console.log(testObject);
console.log(testObject.name);

//2.2.2 What can arrays be useful for in practice?
console.log("----------------------------------------------------------------");
console.log("2.2.1 Complex Data types");

let user1 = {
  name: "Calvin",
  surname: "Hart",
  age: 66,
  email: "CalvinMHart@teleworm.us",
};

let user2 = {
  name: "Mateus",
  surname: "Pinto",
  age: 21,
  email: "MateusPinto@dayrep.com",
};

let users = [
  {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us",
  },
  {
    name: "Mateus",
    surname: "Pinto",
    age: 21,
    email: "MateusPinto@dayrep.com",
  },
];

console.log(users[0].name);
console.log(users[1].name);

//add Array
users[2] = {
  name: "Irene",
  surname: "Purnell",
  age: 32,
  email: "IreneHPurnell@rhyta.com",
};
console.log(users);

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log(typeof days); // -> object

let day = "Sunday";

console.log(days instanceof Array);
console.log(day instanceof Array);

//length

let name1 = ["Olivia", "Emma", "Mateo", "Samuel"];
name1[5] = "Amelia";
console.log(name1);
console.log(name1.length);

//indexof

console.log(name1.indexOf("Mateo"));
console.log(name1.indexOf("Victor"));

//Combine two arrays with concat

let total = name1.concat(days);
console.log(total);

//2.2.3 Section Practice

//Section 3
console.log("----------------------------------------------------------------");

//Assignment operators
let year = 2050;
let newYear = (year = 2051);
//Same as
year = 2050;
year = 2051;
newYear = year;

//Unary operator
let str = "123";
let n12 = +str; // n12 is a number
let n13 = -str; // n13 is a number
console.log(typeof n12, n12);
console.log(typeof n13, n13);

// unary increment ++ and decrement -- operators

let n14 = 10;
let n15 = 10;

console.log("n14", n14);
console.log(n14++);
console.log(n14);

console.log("n15", n15);
console.log(++n15);
console.log(n15);

let n16 = 20;
let n17 = 20;

console.log("n16", n16);
console.log(n16++);
console.log(n16);

console.log("n17", n17);
console.log(++n17);
console.log(n17);

console.log(2 * 3 + 1); // expected 7
console.log(2 ** 4); // expected 16
console.log(5 * 1); // expected 5
console.log(8 ** 2 - 5 ** 2); // expected 39

console.log(4 * 5 == 20);
console.log(6 * 5 == "30");
console.log(-17 < 0);
console.log(25 > 1);
console.log(2 + 2 * 2 > 4);

console.log(true || false);
console.log(false == false);
console.log((false && false) || true);

//Section3.2
// console.log(true || false && false && true);alert("Hello, World!");
// window.alert("Hello, World! for the second time");
// alert(4 * 7);
// alert(true);
// alert("text 1", "text 2");

// let decision = window.confirm("Is it OK?");
// console.log(decision);

// let width = window.prompt("Width: ")
// // let length = window.prompt("Length: ");
// // let height = window.prompt("Height: ");
// // alert("area: " + width*length*height);

//3.2 Lab Interaction

let contacts = [
  {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk",
  },
  {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com",
  },
  {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu",
  },
];

// let decision = window.confirm("Do you wanna more contacts");
// if (decision == true) {
//   let newname = window.prompt("Enter his name.");
//   let phone = window.prompt("Enter his phone.");
//   let email = window.prompt("Enter his email.");
//   contacts.push({ name: newname, phone: phone, email: email });
// }

// let last = contacts.length - 1;

// console.log(
//   `${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`
// );
// console.log(
//   `${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`
// );
let str1 = "12";
str1 = +str1;
console.log(str1);
console.log(typeof str1);

let n4 = 10;
let m = ++n4;

console.log(n4,m);
console.log(20 || 5);

console.log(false || "true");

let test = prompt("Hello", "World");
console.log(test);
console.log("abcd" < "Abcd");