const pokeimg = document.getElementById("pokeimg");
const container = document.getElementById("container");
const poketype = document.getElementById("type")
const pokestats = document.getElementById("stats")
const pokeheight = document.getElementById("height")
const pokeAbilities = document.getElementById("abilities")
const pokeMoves = document.getElementById("moves")

function searchPokemon(event){
  event.preventDefault()
  let nombre = event.target.pokemonName.value; //toma el valor que se ingresa por el input
  
  fetch(`https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`) //se hace fetch a la api con el valor que se ingresa
  .then(data =>{
    return data.json();
  }).then(res=>{
    
    pokeimg.setAttribute("src",res.sprites.front_default) // pone el atributo src al img
    
    res.types.forEach(type =>{
      // poketype.innerHTML = ""
      const typeElement = document.createElement("div");
      typeElement.textContent = type.type.name
      poketype.appendChild(typeElement) 
    })

    
    res.stats.forEach(stat =>{
      // pokestats.innerHTML = ""
      const typeElements = document.createElement("div");
      const typeElementsName = document.createElement("div");
      const typeElementsPower = document.createElement("div");
      typeElementsName.textContent = stat.stat.name
      typeElementsPower.textContent = stat.base_stat
      typeElements.appendChild(typeElementsPower)
      typeElements.appendChild(typeElementsName);
      pokestats.appendChild(typeElements)
      
    })

    pokeheight.textContent = `height: ${res.height}`

    res.abilities.forEach(ability =>{
      const abilityElement = document.createElement("div")
      abilityElement.textContent = ability.ability.name
      pokeAbilities.appendChild(abilityElement)
    })

    for(let i=0;i<res.moves.length;i++){ //igual que con for each
      const moveElement = document.createElement("div");
      moveElement.textContent = res.moves[i].move.name;
      pokeMoves.appendChild(moveElement)
    }


    console.log(res)




  })
}
