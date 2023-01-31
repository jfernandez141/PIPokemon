const { Router } = require("express");
const {
  getPokemonsHandler,
  getPokemonHandler,
  postPokemonHandler,
  deletePokemonHandler,
} = require("../handlers/pokemonHandler");

const pokemonRouter = Router();
//estudiar que hace esto ⬆️

//Traemos las rutas y llamamos la funcion correspondiente del hanlder.

pokemonRouter.get("/", getPokemonsHandler);
pokemonRouter.get("/:id", getPokemonHandler);
pokemonRouter.post("/", postPokemonHandler);
pokemonRouter.delete("/:id",deletePokemonHandler)

module.exports = pokemonRouter;
