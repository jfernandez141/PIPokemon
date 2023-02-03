const { Tipo } = require("../db");
const axios = require("axios");

const getTypes = async () => {
  try {
    let types = (await axios.get("https://pokeapi.co/api/v2/type")).data
      .results;
    types = types.map((t) => {
      return t.name;
    });
    return types;
  } catch (error) {
    return alert(error.message);
  }
};

const saveTypesOnDb = async () => {
  const types = await getTypes();
  try {
    for (let type of types) {
      await Tipo.create({ nombre: type });
    }
    return "Saved all pokemon types in the DBB";
  } catch (error) {
    return alert(error.message);
  }
};

module.exports = { getTypes, saveTypesOnDb };
