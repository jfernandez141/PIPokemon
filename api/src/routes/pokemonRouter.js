const { Router } = require('express');
const {getPokemonsHandler} = require("../handlers/pokemonHandler");

const pokemonRouter = Router();
//estudiar que hace esto ⬆️

//Traemos las rutas y llamamos la funcion correspondiente del hanlder.

pokemonRouter.get("/",getPokemonsHandler);



module.exports = pokemonRouter;



