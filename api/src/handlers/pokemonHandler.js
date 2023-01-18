const {
  getAllPokemons,
  getPokemon,
  getPokemonByName,
  postPokemon
} = require("../controllers/pokemonController");

const getPokemonsHandler = async (req, res) => {
  const {name}= req.query
  try {
    const pokemons = name?await getPokemonByName(name) :await getAllPokemons();
    
    res.status(200).json(pokemons);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPokemonHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const pokemon = await getPokemon(id);
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postPokemonHandler = async(req,res)=>{


}





module.exports = { getPokemonsHandler, getPokemonHandler,postPokemonHandler };
