const {
  getAllPokemons,
  getPokemon,
  getPokemonByName,
  postPokemon,
  deletePokemon,
} = require("../controllers/pokemonController");

const getPokemonsHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const pokemons = name
      ? await getPokemonByName(name)
      : await getAllPokemons();

    res.status(200).json(pokemons);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPokemonHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const pokemon = await getPokemon(id);
    if (!pokemon) throw new Error(`Pokemon with ${id} ID does not exits`);
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postPokemonHandler = async (req, res) => {
  const { nombre, vida, ataque, defensa, velocidad, altura, peso, tipos } =
    req.body;
  try {
    const pokemon = await postPokemon(
      nombre,
      vida,
      ataque,
      defensa,
      velocidad,
      altura,
      peso,
      tipos
    );
    res.status(201).json(pokemon);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  res.status(200).json();
};

const deletePokemonHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const pokemon = await deletePokemon(id);
    res.status(200).json("Pokemon Deleted")
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getPokemonsHandler,
  getPokemonHandler,
  postPokemonHandler,
  deletePokemonHandler,
};
