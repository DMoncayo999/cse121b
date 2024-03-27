// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";


async function getPokemon(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            doStuff(data);
         }
     } catch (error) {
        console.error("Error fetching:" , error);
     }
}
    
async function getPokemonList(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            doStuffList(data);
          }
      } catch (error) {
          console.error('Error fetching Pokemon list:', error);
      }
  }


function doStuff(data) {
    const outputElement = document.querySelector("#output");
    if (outputElement) {
      const html = `<h2>${data.name}</h2><img src="${data.sprites.front_default}" alt="${data.name}">`;
      outputElement.innerHTML = html;
      
    } 
}

function doStuffList(data) {
    const pokeListElement = document.querySelector("#outputList");
    if (pokeListElement) {
        const pokeList = data.results;
        const sortedList = sortPokemon(pokeList);
        pokeList.forEach((currentItem) => {
            const html = `<li>${currentItem.name}</li>`;
            pokeListElement.innerHTML += html;
        });
      }
  }

function sortPokemon(list) {
  return list.sort((a, b) => {
      const nameA = a.name; 
      const nameB = b.name;
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0; // when names are equal
  });
  
}

getPokemon(url);

getPokemonList(urlList);