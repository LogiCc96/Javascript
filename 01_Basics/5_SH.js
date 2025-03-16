
// ********************* Stack (Primitive) *****************

//In stack copy of value is passed same as call by value

let num1 = 33;
let num2 = num1;
num2 = 44;
console.log(num1);
console.log(num2);

// ********************* Heap (Non-Primitive) ******************

// In heap refernce is passed also known as call by reference 

let user1 = {
    email: "abc@gmail.com",
    pass: "abcde"
}
let user2 = user1;

user2.email = "bcd@gmail.com";
console.log(user1.email);
console.log(user2.email);



