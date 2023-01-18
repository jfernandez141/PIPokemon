//importar la bdd NIY
const axios = require("axios");

const cleanObj = (obj) => {
  return {
    id: obj.id,
    name: obj.name,
    image: obj.sprites.front_default,
    types: obj.types.map((e) => {
      return e.type.name;
    }),
    height: obj.height,
    weight: obj.weight,
    stats: obj.stats.map((s) => {
      return {
        stat: s.stat.name,
        base_stat: s.base_stat,
      };
    }),
    created: false,
  };
};

const getAllPokemons = async (n = 40) => {
  const apiPokemons = new Array(n).fill("");

  const mapPokemons = await Promise.all(
    apiPokemons.map(async (pokemon, index) => {
      const datos = (
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${index + 1}`)
      ).data;

      return cleanObj(datos);
    })
  );

  return mapPokemons;
};

const getPokemon = async (id) => {
  const datos = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`))
    .data;
  return cleanObj(datos);

  //NIY TRAER POKEMONS DESDE LA BASE DE DATOS, ESPERANDO EL PUT DE CREARLOS
};

const getPokemonByName = async (name) => {
  // let pokemon = await getAllPokemons();
  // pokemon = pokemon.filter((p) => {
  //   return p.name == name;
  // });
  try {
    let pokemon = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`))
      .data;
    return cleanObj(pokemon);
  } catch (error) {
    throw new Error(`Does not exist the ${name} Pokemon`);
  }

  //NIY BUSCAR EN LA BDD EL POKEMON
};

module.exports = { getAllPokemons, getPokemon, getPokemonByName };
