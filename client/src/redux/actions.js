import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const CREATED_FILTER = "CREATED_FILTER";
export const GET_TYPES = "GET_TYPES";
export const TYPE_FILTER = "TYPE_FILTER";
export const ORDER_FILTER = "ORDER_FILTER";
export const RESET_FILTERPOKE = "RESET_FILTERPOKE";
export const GET_POKEMONBYNAME = "GET_POKEMONBYNAME";
export const ERROR ="ERROR"
export const POSTPOKEMON = "POSTPOKEMON"

export const getPokemons = () => {
  return async function (dispatch) {
    const apiPokemons = await axios.get("http://localhost:3001/pokemons");
    const pokemons = apiPokemons.data;
    dispatch({ type: GET_POKEMONS, payload: pokemons });
  };
};
export const getPokemonByName = (name) => {
  return async function (dispatch) {
    try {
      const pokemon = (
        await axios.get(`http://localhost:3001/pokemons?name=${name}`)
      ).data;
      dispatch({ type: GET_POKEMONBYNAME, payload: pokemon });
    } catch (error) {
      dispatch({type: ERROR,payload: error.response.data.error})
    }
  };
};

export const getTypes = () => {
  return async function (dispatch) {
    const types = (await axios.get("http://localhost:3001/types")).data;
    dispatch({ type: GET_TYPES, payload: types });
  };
};

export const createdFilter = (payload) => {
  return {
    type: CREATED_FILTER,
    payload,
  };
};
export const typeFilter = (payload) => {
  return {
    type: TYPE_FILTER,
    payload,
  };
};

export const orderFilter = (payload) => {
  return {
    type: ORDER_FILTER,
    payload,
  };
};

export const resetFilterPokemons = () => {
  return {
    type: RESET_FILTERPOKE,
  };
};
export const resetError = ()=>{
  return{ type: ERROR, payload: false}
}