const { getAllPokemons } = require("../controllers/pokemonController");

const getPokemonsHandler = async (req, res) => {
  try {
    const pokemons = await getAllPokemons();
    res.status(200).json(pokemons)
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getPokemonsHandler};
