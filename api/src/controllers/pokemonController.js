//importar la bdd NIY
const axios = require("axios");

const getAllPokemons = async () => {
  const apiPokemons = (
    await axios.get("https://pokeapi.co/api/v2/pokemon?&limit=40")
  ).data.results;
  //Se le agrega ?&limit=40 a la url para limitar los resultados

  const mapPokemons = await Promise.all(
    apiPokemons.map(async (pokemon, index) => {
      const datos = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${index + 1}`
      );

      const imagen = datos.data.sprites.front_default;
      const nombre = pokemon.name;
      let tipos = datos.data.types;
      tipos = tipos.map((e) => {
        return e.type.name;
      });

      return await { nombre, imagen, tipos };
    })
  );

  return mapPokemons;
};

module.exports = { getAllPokemons };
