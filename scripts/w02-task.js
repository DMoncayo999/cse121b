/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

 let fullName = 'Delfina Moncayo';
 let currentYear = 2024;
 let profilePicture = 'images/profile-2.jpg';


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img[src="images/profile-2.jpg"]');


/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);


/* Step 5 - Array */

let favoriteFoods = ['pizza', 'sushi', 'chocolate', 'caesar salad'];
foodElement.textContent = favoriteFoods.join(' , ');
let moreFood ='pasta';
favoriteFoods.push(moreFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;





