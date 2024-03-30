/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];


/* async displayTemples Function */
const displayTemples = (temples) => {

  temples.forEach((temple) => {

    // Create HTML elements
    const article = document.createElement('article');
    const h3 = document.createElement('h3');
    const img = document.createElement('img');
    
    // Set properties and attributes
    h3.textContent = temple.templeName;
    img.src = temple.imageUrl;
    img.alt = temple.location;
    
    // Append elements to article
    article.appendChild(h3);
    article.appendChild(img);
    
    // Append article to templesElement
    templesElement.appendChild(article);
  });
}; 


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    try {
      const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
      if (!response.ok) {
        throw new Error('Failed to fetch temple data');
      }
  
      // Convert the response to a JavaScript object and assign it to templeList
      templeList = await response.json();
      
      // Display temples
      displayTemples(templeList);
    } catch (error) {
      console.error('Error fetching temple data:', error);
    }
  };
  

/* reset Function */
const reset = () => {
    const templesContainer = document.querySelector("#temples");
    
    // Remove all child nodes (articles) from templesContainer
    while (templesContainer.firstChild) {
      templesContainer.removeChild(templesContainer.firstChild);
    }
  };
 

/* filterTemples Function */
const filterTemples = (temples) => {
    // Clear the output by calling the reset function
    reset();
  
    // Obtain the value of the HTML element with the ID "filtered"
    const filterSelect = document.querySelector("#filtered");
    const filter = filterSelect.value;
  
    // Filter the templeList array based on the selected value using a switch statement
    let filteredTemples = [];
    switch (filter) {
      case "utah":
        filteredTemples = temples.filter(temple => temple.location.includes("Utah"));
        break;
      case "notutah":
        filteredTemples = temples.filter(temple => !temple.location.includes("Utah"));
        break;
      case "older":
        filteredTemples = temples.filter(temple => new Date(temple.dedicatedDate) < new Date(1950, 0, 1));
        break;
      case "alphabetical":
        filteredTemples = temples.slice().sort((a, b) => a.templeName.localeCompare(b.templeName));
        break;  
      case "all":
      default:
        filteredTemples = temples;
        break;
    }
    // Display the filtered temples
    displayTemples(filteredTemples);
  };


/* Event Listener */
// Add a change event listener to the HTML element with the ID "filtered"
const filterSelect = document.querySelector("#filtered");
filterSelect.addEventListener("change", () => {
  filterTemples(templeList); // Call filterTemples with templeList as the argument
});

getTemples();