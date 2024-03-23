/* LESSON 4 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Delfina Moncayo",
    photo: "images/profile-2.jpg",
    favoriteFoods: [
        "Pasta",
        "Pizza",
        "Chocolate",
        "Caesar Salad",
        "Spaguetti"
    ],
    hobbbies: [
        "Dance",
        "Play ukulele",
        "Draw",
        "Paint"
    ],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Guayaquil, Ec",
        length: "31 years"
    },
    {
        place: "Rockville, Md",
        length: "21 years"
    },
    {
        place: "Fall Church, Va",
        length: "1 year"
    },
    {
        place: "Live Oak, Fl",
        length: "2 years"
    }
);


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').scr = myProfile.photo;
document.querySelector('#photo').alt = myProfile.photo;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {

    let liElement = document.createElement("li");
    liElement.textContent = food;
    document.querySelector("#favorite-foods").appendChild(liElement);

});

/* Hobbies List */
myProfile.hobbbies.forEach(hobby => {

    let liElement = document.createElement("li");
    liElement.textContent = hobby;
    document.querySelector("#hobbies").appendChild(liElement);

});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {

    let dtElement = document.createElement("dt");
    dtElement.textContent = place.place;

    let ddElement = document.createElement("dd");
    ddElement.textContent = place.length;
       
    document.querySelector("#places-lived").appendChild(dtElement);
    document.querySelector("#places-lived").appendChild(ddElement);
});
