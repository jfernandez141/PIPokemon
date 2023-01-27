import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const CREATED_FILTER = "CREATED_FILTER";
export const GET_TYPES = "GET_TYPES";
export const TYPE_FILTER = "TYPE_FILTER";
export const ORDER_FILTER = "ORDER_FILTER";
export const RESET_FILTERPOKE = "RESET_FILTERPOKE";

export const getPokemons = () => {
  return async function (dispatch) {
    const apiPokemons = await axios.get("http://localhost:3001/pokemons");
    const pokemons = apiPokemons.data;
    dispatch({ type: GET_POKEMONS, payload: pokemons });
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
