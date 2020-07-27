 getStarWarsInfo() = async () => {
    const  characters = await fetch(`https://swapi.dev/api/people/`);
    const charactersData = await characters.json();
    
    const  starships = await fetch(`https://swapi.dev/api/starships/`);
    const starshipsData = await starships.json();

    console.log(charactersData);
    
    console.log(starshipsData);


   


}