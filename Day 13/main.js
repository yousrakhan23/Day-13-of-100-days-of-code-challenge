// Q 106:
//Determine if a given year is a leap year using comparison operators.
//Explain & TIP: A leap year is divisible by 4 but not by 100 unless it'salso divisible by 400. This rule helps
// align our calendar years with the Earth's orbital period.
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(isLeapYear(2020)); // true
console.log(isLeapYear(1990)); // false
console.log(isLeapYear(1947)); // false
console.log(isLeapYear(2000)); // true 
//.........................................................................................................................
// Q 107:
// write a condition using logical operators that checks if a number is divisible by both 2 and 3. 
// Explain & TIP: Checking for divisibility involves using the modulo operator (%) to see if there's any remainder. 
//A number divisible by both 2 and 3 without a remainder is also divisible by 6.
function isDivisibleByTwoAndThree(number) {
    return number % 2 === 0 && number % 3 === 0;
}
console.log(isDivisibleByTwoAndThree(12)); // true
console.log(isDivisibleByTwoAndThree(14)); // false
console.log(isDivisibleByTwoAndThree(24)); // true
//............................................................................................................................
// Q 108:
// Compare two strings to check if they are identical, ignoring case sensitivity.
// Explain & TIP: To compare strings without considering their case (uppercase/lowercase), you can convert both 
//strings to the same case before comparing.
function areStringsEqualIgnoreCase(str1, str2) {
    return str1.toLowerCase() === str2.toLocaleLowerCase();
}
console.log(areStringsEqualIgnoreCase("hello", "Hello")); // true
console.log(areStringsEqualIgnoreCase("world", "World")); // false
//............................................................................................................................
// Q 109:
//  Write an if statement that logs "Good Morning" if the current time is before 12 PM.
// Explain & TIP: You can get the current hour using the Date object and its getHours() method. Remember, 
// hours are in 24-hour format, so 12 PM is 12.
var currentTime = new Date();
if (currentTime.getHours() < 12) {
    console.log("Good Morning");
}
//.............................................................................................................................
// Q 110:
// Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.
// Explain & TIP: A common grading system assigns letter grades based on score ranges. You can use
// an if-else-if chain to determine the grade.
function assignGrade(score) {
    if (score >= 90) {
        return "A";
    }
    else if (score >= 80) {
        return "B";
    }
    else if (score >= 70) {
        return "C";
    }
    else if (score >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}
console.log(assignGrade(85)); // B
console.log(assignGrade(55)); // F
console.log(assignGrade(95)); // A
console.log(assignGrade(73));
console.log(assignGrade(62));
