const { Pokemon, Tipo } = require("../db");
const axios = require("axios");

//NIY VALIDACIONES Y TEASTING

const cleanApiPoke = (obj) => {
  cleanStats = {};
  for (let stat of obj.stats) {
    const statName = stat.stat.name;
    const statPower = stat.base_stat;
    cleanStats[statName] = statPower;
  }

  return {
    id: obj.id,
    name: obj.name,
    image: obj.sprites.front_default,
    types: obj.types.map((e) => {
      return e.type.name;
    }),
    height: obj.height,
    weight: obj.weight,
    stats: cleanStats,

    created: false,
  };
};

const cleanBddPoke = (bddPokemons) => {
  const cleanBddPokemons = [];
  

  for (let pokemon of bddPokemons) {
    const random = Math.floor(Math.random()* 1008 + 1)
    let newPokemon = {
      id: pokemon.id,
      name: pokemon.nombre,
      image:
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${random}.png`,
      types: pokemon.Tipos.map((t) => t.nombre),
      heigh: pokemon.altura,
      weight: pokemon.peso,

      stats: {
        hp: pokemon.vida,
        attack: pokemon.ataque,
        defense: pokemon.defensa,
        speed: pokemon.velocidad,
      },
      created: true,
    };

    cleanBddPokemons.push(newPokemon);
  }
  return cleanBddPokemons;
};

const getAllPokemons = async (n = 40) => {
  
  const apiPokemons = new Array(n).fill("");

  const mapApiPokemons = await Promise.all(
    apiPokemons.map(async (pokemon, index) => {
      const datos = (
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${index + 1}`)
      ).data;

      return cleanApiPoke(datos);
    })
  );

  let bddPokemons = await Pokemon.findAll({
    include: {
      model: Tipo,
      attributes: ["nombre"],
      through: {
        attributes: [],
      },
    },
  });

  bddPokemons = cleanBddPoke(bddPokemons);

  return [...bddPokemons, ...mapApiPokemons];
};

const getPokemon = async (id) => {
  let pokemon;

  if (!isNaN(id)) {
    pokemon = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data;
    pokemon = cleanApiPoke(pokemon);
  } else {
    pokemon = await Pokemon.findByPk(id, {
      include: {
        model: Tipo,
        attributes: ["nombre"],
        through: {
          attributes: [],
        },
      },
    });
    pokemon = cleanBddPoke([pokemon])[0];
    
  }
  return pokemon;
};
//get

const getPokemonByName = async (name) => {
  if (!isNaN(name)) throw new Error(`Only accept names`);
  let findedPokemon = [];

  try {
    let apiPokemon = (
      await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    ).data;
    apiPokemon = cleanApiPoke(apiPokemon);
    findedPokemon.push(apiPokemon);
  } catch (error) {}

  try {
    let bddPokemon = await Pokemon.findAll({
      where: {
        nombre: name,
      },
      include: {
        model: Tipo,
        attributes: ["nombre"],
        through: {
          attributes: [],
        },
      },
    });
    bddPokemon = cleanBddPoke(bddPokemon);
    bddPokemon.length > 0 && findedPokemon.push(bddPokemon);
  } catch (error) {
    throw new Error();
  }
  if (!findedPokemon.length) {
    throw new Error(`Does not exist the ${name} Pokemon`);
  }

  return findedPokemon.flat(1);
};

const postPokemon = async (
  nombre,
  vida,
  ataque,
  defensa,
  velocidad,
  altura,
  peso,
  tipos
) => {
  const pokemon = await Pokemon.create({
    nombre,
    vida,
    ataque,
    defensa,
    velocidad,
    altura,
    peso,
  });
  await pokemon.setTipos(tipos);

  return { pokemon, tipos };
};

const deletePokemon = async (id)=>{
  const pokemon = await Pokemon.destroy({
    where: {id: id}
  })
  
}

module.exports = { getAllPokemons, getPokemon, getPokemonByName, postPokemon,deletePokemon };
