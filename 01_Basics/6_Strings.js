// const name = "Deep"
// const numm = 53;

// // I'st Way
// console.log(name + numm + " Value");

// //Second Way => String Interpolation(Using backticks)

// console.log(`Name is ${name} and marks are ${numm}`);

// //Third Way usign String object

const my_name = new String("Deepanshu")
console.log(my_name);

// console.log(my_name.length);
// console.log(my_name.toUpperCase());
// console.log(my_name.charAt(3));
// console.log(my_name.indexOf("p"));
// console.log("cat".charAt(1));

const newString = my_name.substring(0,4);
console.log(newString);

const anotherString = my_name.slice(-8,4);
console.log(anotherString)

const anotherString2 = "     Deep    ";
console.log(anotherString2.trim());

//Split method can be used to covert string into array.

const anotherString3 = "Deep-Bansal-Reen";

console.log(anotherString3.split("-")); // This will give an array of 3 words removing -.









