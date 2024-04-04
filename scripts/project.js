// Wait for the DOM content to be fully loaded before executing JavaScript code
document.addEventListener('DOMContentLoaded', () => {
    const ingredientInput = document.querySelector('#ingredientInput');
    const cuisineSelect = document.querySelector('#cuisineSelect');
    const dietSelect = document.querySelector('#dietSelect');
    const searchBtn = document.querySelector('#searchBtn');
    const clearBtn = document.querySelector('#clearBtn');
    const recipeList = document.querySelector('#recipeList');

    // Add click event listener to the search button
    searchBtn.addEventListener('click', () => {
        const ingredients = ingredientInput.value.trim();
        const area = document.querySelector('#cuisineSelect').value;
        const category = document.querySelector('#dietSelect').value;

        // Call the searchRecipes function with user input as arguments
        searchRecipes(ingredients, area, category);
    });

    // Add click event listener to the clear button
    clearBtn.addEventListener('click', () => {
        ingredientInput.value = ''; 
        cuisineSelect.selectedIndex = 0; 
        dietSelect.selectedIndex = 0; 
        recipeList.innerHTML = ''; 
    });

    // Function to fetch recipes from The Meal DB API
    async function searchRecipes(ingredients, area, category) {
        let apiUrl = '';

        if (ingredients) {
            apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${ingredients}`;
        } else if (area && category) {
            apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}&c=${category}`;
        } else if (area) {
            apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`;
        } else if (category) {
            apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
        }

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            displayRecipes(data.meals);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    }

    // Function to display recipes in recipe cards
    function displayRecipes(recipes) {
        recipeList.innerHTML = '';

        // Check if recipes is not undefined or null
        if (recipes) {
            recipes.forEach(recipe => {
                const recipeCard = document.createElement('div');
                recipeCard.classList.add('recipe-card');

                const mealName = recipe.strMeal || 'Meal Name Unavailable';
                const mealThumb = recipe.strMealThumb || 'https://via.placeholder.com/150'; // Placeholder image URL if no image provided
                //const instructions = recipe.strInstructions || 'Instructions Unavailable';

                recipeCard.innerHTML = `
                    <h3>${mealName}</h3>
                    <img src="${mealThumb}" alt="${mealName}">
                    <button class="view-details-btn" data-id="${recipe.idMeal}">View Details</button>
                `;
                recipeList.appendChild(recipeCard);
            });

            // Add event listeners to the "View Details" buttons
            const viewDetailsBtns = document.querySelectorAll('.view-details-btn');
            viewDetailsBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const mealId = btn.getAttribute('data-id');
                    fetchAndDisplayDetails(mealId);
                });
            });
        } else {
            console.error('Recipes data is undefined or null.');
        }
    }

    // Function to fetch and display detailed information about a recipe
    async function fetchAndDisplayDetails(mealId) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
        const data = await response.json();
        const meal = data.meals[0];

        if (meal) {
            // Display detailed information about the recipe
            alert(`Recipe Name: ${meal.strMeal}\nCategory: ${meal.strCategory}\nArea: ${meal.strArea}\nInstructions: ${meal.strInstructions}`);
        } else {
            console.error('Recipe data is undefined or null.');
        }
    }
});