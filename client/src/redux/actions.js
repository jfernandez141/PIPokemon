import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const CREATED_FILTER="CREATED_FILTER";
export const GET_TYPES="GET_TYPES";

export const getPokemons = () => {
  return async function (dispatch) {
    const apiPokemons = await axios.get("http://localhost:3001/pokemons");
    const pokemons = apiPokemons.data;
    dispatch({ type: GET_POKEMONS, payload: pokemons });
  };
};

export const getTypes = ()=>{
  return async function(dispatch){
    const types = (await axios.get("http://localhost:3001/types")).data;
    dispatch({type: GET_TYPES, payload: types})
  }
}

export const CreatedFilter = (payload)=>{  
  return {
    type: CREATED_FILTER,
    payload,
  }

}
