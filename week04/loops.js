// loops.js
myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };


// Function to generate HTML template for favorite food
function createFoodHTML(food) {
  return `<li>${food}</li>`;
}

// Function to generate HTML template for places lived
function createPlaceHTML(place) {
  return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

// Function to generate HTML content based on a list and a callback template function
function generateHTMLList(list, templateFunction) {
  let htmlString = '';
  list.forEach(function (item) {
    htmlString += templateFunction(item);
  });
  return htmlString;
}

// Generate HTML content for favorite foods using createFoodHTML template function
let favoriteFoodsHTML = generateHTMLList(myInfo.favoriteFoods, createFoodHTML);

// Generate HTML content for places lived using createPlaceHTML template function
let placesLivedHTML = generateHTMLList(myInfo.placesLived, createPlaceHTML);

// Set innerHTML of appropriate elements with the generated HTML content
document.querySelector("#favorite-foods").innerHTML = favoriteFoodsHTML;
document.querySelector("#places-lived").innerHTML = placesLivedHTML;


/*
// Step 4: Using forEach to loop through favoriteFoods array and create <li> elements
myInfo.favoriteFoods.forEach(function (food) {
  let favoriteFood = document.createElement("li");
  favoriteFood.textContent = food;
  document.querySelector("#favorite-foods").appendChild(favoriteFood);
});

// Step 4: Using map to loop through favoriteFoods array and create <li> elements
let favoriteFoodsList = myInfo.favoriteFoods.map(function (food) {
  let favoriteFood = document.createElement("li");
  favoriteFood.textContent = food;
  return favoriteFood;
});
// Append the array of <li> elements to the <ul> with ID 'favorite-foods'
favoriteFoodsList.forEach(function (item) {
  document.querySelector("#favorite-foods").appendChild(item);
});
*/
