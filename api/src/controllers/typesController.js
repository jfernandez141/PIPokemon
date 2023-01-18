const { Tipo } = require("../db");
const axios = require("axios");

const getTypes = async () => {
  let types = (await axios.get("https://pokeapi.co/api/v2/type")).data.results;
  types = types.map((t) => {
    return t.name;
  });
  return types;
};

const saveTypesOnDb = async () => {
  const types = await getTypes();
  for (let type of types) {
    await Tipo.create({ nombre: type });
  }

  return "Done";
};

module.exports = { getTypes, saveTypesOnDb };
