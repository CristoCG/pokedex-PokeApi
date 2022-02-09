export const getPokemons = async (limit = 12, offset = 12) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

    const apiResponse = await fetch(url);

    const data = await apiResponse.json();
    return data;
  } catch (e) {
    console.log("Hubo un error ", e);
  }
};
