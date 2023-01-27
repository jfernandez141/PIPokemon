import {
  GET_POKEMONS,
  CREATED_FILTER,
  GET_TYPES,
  TYPE_FILTER,
  ORDER_FILTER,
  RESET_FILTERPOKE,
  GET_POKEMONBYNAME,
  ERROR
} from "./actions";
const initialState = {
  pokemons: [],
  filterPokemons: [],
  types: [],
  error: false,
};

const rootReducer = (state = initialState, action) => {
  let pokemons = [...state.pokemons];
  let filterP;
  switch (action.type) {
    case RESET_FILTERPOKE:
      return { ...state, filterPokemons: [] };

    case GET_TYPES:
      return { ...state, types: action.payload };

    case GET_POKEMONS:
      return { ...state, pokemons: action.payload };

    case CREATED_FILTER:
      if (action.payload === "all") {
        filterP = [];
      }
      if (action.payload === "created") {
        filterP = pokemons.filter((p) => {
          return p.created;
        });
        if (!filterP.length) {
          return {
            ...state,
            error: "0 Pokemons at DBB",
          };
        }
      } else if (action.payload === "existing") {
        filterP = pokemons.filter((p) => {
          return !p.created;
        });
      }
      return {
        ...state,
        filterPokemons: filterP,
      };

    case TYPE_FILTER:
      if (action.payload === "all") {
        filterP = [];
      } else {
        filterP = pokemons.filter((p) => {
          return p.types.includes(action.payload);
        });
        if (!filterP.length) {
          return {
            ...state,
            error: `dont hace any pokemon with the type ${action.payload}`,
          };
        }
      }
      return {
        ...state,
        filterPokemons: filterP,
      };

    case ORDER_FILTER:
      let sortPokemon = state.filterPokemons.length
        ? [...state.filterPokemons]
        : pokemons;
      switch (action.payload) {
        case "az":
          sortPokemon.sort(function (a, b) {
            if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
            if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
            return 0;
          });
          break;

        case "za":
          sortPokemon.sort(function (b, a) {
            if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
            if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
            return 0;
          });
          break;
        case "up":
          sortPokemon.sort(function (a, b) {
            return a.stats.attack - b.stats.attack;
          });
          break;
        case "down":
          sortPokemon.sort(function (b, a) {
            return a.stats.attack - b.stats.attack;
          });
          break;

        default:
          break;
      }
      return {
        ...state,
        filterPokemons: sortPokemon,
      };

    case GET_POKEMONBYNAME:
      return { ...state, filterPokemons: action.payload };
    case ERROR:
      return {...state, error: action.payload }

      default:
      return { ...state };
  }
};

export default rootReducer;
