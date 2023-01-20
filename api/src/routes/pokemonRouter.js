const { Router } = require("express");
const {
  getPokemonsHandler,
  getPokemonHandler,
  postPokemonHandler,
} = require("../handlers/pokemonHandler");

const pokemonRouter = Router();
//estudiar que hace esto ⬆️

//Traemos las rutas y llamamos la funcion correspondiente del hanlder.

pokemonRouter.get("/", getPokemonsHandler);
pokemonRouter.get("/:id", getPokemonHandler);
pokemonRouter.post("/", postPokemonHandler);

module.exports = pokemonRouter;
