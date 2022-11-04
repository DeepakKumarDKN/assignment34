/* TODO:
1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign
value to it and use the typeof operator to check different data types.


let firstName = "deepak";
let lastName = "nayak";
let country = "India";
let city = "Kolkata";
let age = 22;
let isMaried = false

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMaried)
*/

/* TODO:
2. Boolean value is either true or false.
a. Write three JavaScript statements which provide truthy value.
b. Write three JavaScript statements which provide falsy value.


Truthy Statements
------------------
console.log(1 == "1")
console.log([2] == 2)
console.log('3' == [3])

False Statements
-----------------
console.log(1 === "1")
console.log([2] === 2)
console.log('3' === [3])
*/

/* TODO:
3. Figure out the result of the following expressions first without using console.log().
After you decide the result confirm it by using console.log()


console.log(4>3 && 10 <12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))

Answers
------
true
false
true 
true 
false
true 
true 
false
true 
true

*/

/*
4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a
number is even or not using JavaScript?

for(let i=2; i<=10; i++){
  if(i%2 ==0){
    console.log(i)
  }
}
*/

/*
5. Write a code which can give grades to students according to theirs scores:
a. 80-100, A
b. 70-89, B
c. 60-69, C
d. 50-59, D
e. 0-49, F



let marks = 81
if(marks<49){
  console.log('Grade F')
}else if(marks>50 && marks<59){
  console.log('Grade D')
}else if(marks>60 && marks<69){
  console.log('Grade C')
}else if(marks>70 && marks<79){
  console.log('Grade B')
}else if(marks>80 && marks<100){
  console.log('Grade A')
}
*/

/*
6. Write a program which tells the number of days in a month.
*/



/* TODO:
// 7. Create a human readable time format using the Date time object
const now = new Date();
// a. YYYY-MM-DD HH:mm
console.log(`${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`)

//b. DD-MM-YYYY HH:mm
console.log(`${now.getDate()}-${now.getMonth()}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`)

// c. DD/MM/YYYY HH:mm
console.log(`${now.getDate()}/${now.getMonth()}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`)
*/

//TODO:
// 8. Suppose 1 dollar is equal to 82.23 Indian rupee, create a program which converts
// dollars to rupees.

// let dollar = 3
// let indRupee = 82.83
// let finalIndianRupee = dollar*indRupee
// console.log(finalIndianRupee)


// TODO:
//9. Write a program to print unit digit of a given number.
// Input : 6693
// Output : 3
// let number = 6693
// let output = number%10
// console.log(output)

// 10. Write a program to find the area of the circle. Take radius of circle from user as input
// and print the result in below given format.
// Expected output format – “Area of circle is A having the radius R”. Replace A with area
// & R with radius

// let radius = 2
// console.log(radius*radius)
// area = Math.PI
// console.log(area*(radius*radius))

let A = Math.PI
let R = 2
let area = A
let radius = R

console.log(area*(radius*radius))


