//Activity 1 - Map 
// 1. declare an array with value = [ 'one', 'two', 'three']
let stringsArray = ['one', 'two', 'three'];

// 2. convert our array of strings into an array of HTML strings. Turned in to a list item.
let htmlArray = stringsArray.map(function(string) {
   return '<li>' + string + '</li>';
 });

 // 3. set our list of HTML strings into the MYLIST list. 
 let myList = document.getElementById('myList');
 myList.innerHTML = htmlArray.join('');



// Activity 2 - Map
//1. declare array with letter grades in it : ['A', 'B', 'A']
let grades = ['A', 'B', 'A'];

//2. write a function that will take one letter grade and return gpa points for that grade.
// ie. A return 4
function giveGpa (grade) {
    let points = 0;
    if (grade === 'A') {
        points = 4; 
    } else if (grade === 'B') {
        points = 3;
    }
    return points;
}

//3. Use map on the conversion funtion to convert the array in step 1 to gpa points.
let gpaPoints = grades.map(giveGpa);
console.log(gpaPoints);



// Activity 3 - Reduce
//1. Using the function from previous activity, convert an array of grades into array of gpaPoints.
let totalGpaPoints = gpaPoints.reduce(function(total, currentGpa) {
    return total + currentGpa;
});

//2. using reduce, calculate GPA from the array of gpaPoints.
let gpa = totalGpaPoints / gpaPoints.length;
console.log('GPA:', gpa);



//Activity 4 - Filter
//1. Declare an array with the following value: ['watermelon', 'peach', 'apple', 'tomato', 'grape']
let fruitsName = ['watermelon', 'peach', 'apple', 'tomato', 'grape']; 

//2. Using filter keep only the fruits that are longer than 6 characters.
let longFruitsName = fruitsName.filter(function(fruit) {
    return fruit.length > 6;
});
console.log('Fruits with name longer than 6 characters:', longFruitsName); 



//Activity 5 - IndexOf
//1. Declare an array with the following values: [12, 34, 21, 54]
let numbers = [12, 34, 21, 54];

//2. Declare a luckyNumber variable with the value 21
let luckyNumber = 21;

//3. Use indexOf to see if the luckyNumber is in the array
let isLuckyNumberPresent = numbers.indexOf(luckyNumber);
if (isLuckyNumberPresent) {
    console.log("The lucky number", luckyNumber, "is in the array.");
} else {
    console.log("The lucky number", luckyNumber, "is not in the array.");
}