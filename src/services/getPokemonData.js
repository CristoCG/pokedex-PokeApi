

export const getPokemonData = async (url) => {
    try {

        const apiResponse = await fetch(url);

        const data = await apiResponse.json();
        return data;
    } catch (e) {
        console.log(e);
    }
}