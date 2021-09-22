
// 4. Change the username value to Andrew, and userAge value to 21.
let userName = "Andrew";
let userAge = 21;

// 5. Define an array userPets that contains two elements "Cat" and "Dog".
let userPets = ["Cat", "Dog"];

// 6. Define a variable userBalance and assign its value to 1200.
let userBalance = 1200;

// 7. Define a constant EVERY_DAY_SPENDING and set its value to 15.3.
const EVERY_DAY_SPENDING = 15.3;

// 8. Define a variable everyDaySpendingPerPet and set its value to 6.
let everyDaySpendingPerPet = 2.4;

// 9. Define a variable daysSurvived and set its value to 0.
let daysSurvived = 0;


// 10. Output the values of these variables to the console.
// console.log("User Name", userName);
// console.log("User Age", userAge);
// console.log("userPets", userPets);
// console.log("userBalance", userBalance);
// console.log("EVERY_DAY_SPENDING", EVERY_DAY_SPENDING);
// console.log("everyDaySpendingPerPet", everyDaySpendingPerPet);
// console.log("daysSurvived", daysSurvived);

while (userBalance > 0) {
    let spending = EVERY_DAY_SPENDING + everyDaySpendingPerPet * userPets.length;
    userBalance -= spending;
    daysSurvived++;
}
console.log("User have sufficient money for " + daysSurvived + " days");