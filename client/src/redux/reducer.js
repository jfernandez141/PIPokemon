import { GET_POKEMONS, CREATED_FILTER,GET_TYPES } from "./actions";
const initialState = {
  pokemons: [],
  filterPokemons: [],
  types: [],
  error: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return { ...state, pokemons: action.payload };

    case CREATED_FILTER:
      const pokemons = [...state.pokemons];
      let filterP;
      if (action.payload == "all") {
        filterP = [];
      }
      if (action.payload == "created") {
        filterP = pokemons.filter((p) => {
          return p.created;
        });
        if (!filterP.length) {
          return {
            ...state,
            error: "0 Pokemons at DBB",
          };
        }
      } else if (action.payload == "existing") {
        filterP = pokemons.filter((p) => {
          return !p.created;
        });
      }
      return {
        ...state,
        filterPokemons: filterP,
      };
    case GET_TYPES:
      return{...state,types:action.payload}

    default:
      return { ...state };
  }
};

export default rootReducer;
