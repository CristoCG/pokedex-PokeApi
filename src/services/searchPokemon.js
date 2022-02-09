export const searchPokemon = async (pokemon) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    const apiResponse = await fetch(url);

    const data = await apiResponse.json();
      return data;
      
  } catch (e) {
    console.log("Hubo un error ", e);
  }
};
