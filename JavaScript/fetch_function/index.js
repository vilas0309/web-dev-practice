// fetch = Function used for making HTTP requests to fetch resources.
//          (JSON style data, images , files)
//          Simplifies asynchronous data fetching in javascripts and 
//          used for interacting with APIs to retrive and send
//          data asynchronously over the web.
//          fetch(url,{options})

async function fetchData(){
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const reponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`) 

        if(!reponse.ok){
            throw new Error("Could not fetch Image.");
        }

        const data = await reponse.json();
        const pokemonImage = data.sprites.front_default;
        const ImgElement = document.getElementById("pokemonImg")

        ImgElement.src=pokemonImage;
        ImgElement.style.display="block";
    }
    catch(error){
        window.alert(error);
    }
}