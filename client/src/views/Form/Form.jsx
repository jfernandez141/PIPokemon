import axios from "axios";
import { useState } from "react";
import { validate } from "./validation";
import HnavBar from "../../components/HNavBar/HNavBar";
import style from "./Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../redux/actions";

const Form = () => {
  let pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  if (!pokemons.length) dispatch(getPokemons());
  

  const types = [
    "normal",
    "fighting",
    "flying",
    "poison",
    "ground",
    "rock",
    "bug",
    "ghost",
    "steel",
    "fire",
    "water",
    "grass",
    "electric",
    "psychic",
    "ice",
    "dragon",
    "dark",
    "fairy",
    "unknown",
    "shadow",
  ];

  const [pokemon, setPokemon] = useState({
    nombre: "",
    vida: "1",
    ataque: "1",
    defensa: "1",
    velocidad: "1",
    altura: "1",
    peso: "1",
    tipos: [],
  });

  const [error, setError] = useState({
    nombre: "",
  });

  function handleInputChange(event) {
    const property = event.target.name;
    const value = event.target.value;

    setPokemon({
      ...pokemon,
      [property]: value,
    });

    if (property == "nombre") {
      const err = validate(value);
      setError({
        nombre: validate(value),
      });
    }
  }

  function handleOptionsChange(event) {
    if (event.target.checked) {
      if (pokemon.tipos.length < 3) {
        setPokemon({
          ...pokemon,
          tipos: [...pokemon.tipos, event.target.value],
        });
      }
    } else {
      const filter = pokemon.tipos.filter((e) => {
        return e != event.target.value;
      });

      setPokemon({
        ...pokemon,
        tipos: filter,
      });
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (error.nombre.length) return alert("Complit with the correct data");
    if (!pokemon.tipos.length) return alert("Select at least one type");
    await axios
      .post("http://localhost:3001/pokemons", pokemon)
      .then(alert("Pokemon Created"))
      .catch((err) => alert(err));

    window.location.reload();
  }

  return (
    <div className={style.formBody}>
      <HnavBar></HnavBar>

      <div>
        <form onSubmit={handleSubmit}>
          <div className={style.form}>
            <div className={style.data}>
              <label htmlFor="">Name: </label>
              <input
                className={style.input}
                required
                type="text"
                name="nombre"
                value={pokemon.nombre}
                placeholder="Pokemon's Name"
                onChange={handleInputChange}
              />
              <p className={style.errorName}>{error.nombre}</p>

              <div>
                <label htmlFor="">Hp: </label>
                <input
                  value={pokemon.vida}
                  type="range"
                  min="1"
                  max="120"
                  step="1"
                  onChange={handleInputChange}
                  name={"vida"}
                />
                <p>{pokemon.vida} </p>
              </div>

              <div>
                <label htmlFor="">Attack: </label>
                <input
                  value={pokemon.ataque}
                  type="range"
                  min="1"
                  max="120"
                  step="1"
                  onChange={handleInputChange}
                  name={"ataque"}
                />
                <p>{pokemon.ataque} </p>
              </div>

              <div>
                <label htmlFor="">Defense: </label>
                <input
                  value={pokemon.defensa}
                  type="range"
                  min="1"
                  max="120"
                  step="1"
                  onChange={handleInputChange}
                  name={"defensa"}
                />
                <p>{pokemon.defensa} </p>
              </div>

              <div>
                <label htmlFor="">Speed: </label>
                <input
                  value={pokemon.velocidad}
                  type="range"
                  min="1"
                  max="120"
                  step="1"
                  onChange={handleInputChange}
                  name={"velocidad"}
                />
                <p>{pokemon.velocidad} </p>
              </div>
              <div>
                <label htmlFor="">Heigh: </label>
                <input
                  value={pokemon.altura}
                  type="range"
                  min="1"
                  max="200"
                  step="1"
                  onChange={handleInputChange}
                  name={"altura"}
                />
                <p>{pokemon.altura} </p>
              </div>

              <div>
                <label htmlFor="">Weigth: </label>
                <input
                  value={pokemon.peso}
                  type="range"
                  min="1"
                  max="200"
                  step="1"
                  onChange={handleInputChange}
                  name={"peso"}
                />
                <p>{pokemon.peso} </p>
              </div>
            </div>
            <div className={style.types}>
              <label htmlFor="">Types: </label>
              {types.map((type, index) => {
                const value = index + 1;
                return (
                  <label key={index}>
                    <input
                      type="checkbox"
                      value={value}
                      onChange={handleOptionsChange}
                      disabled={
                        pokemon.tipos.length >= 3 &&
                        !pokemon.tipos.includes(value)
                      }
                    />
                    {type}
                  </label>
                );
              })}
              <p>*3 Types Max</p>
              <button type="submit">CREATE POKEMON </button>
            </div>
          </div>
        </form>
      </div>
      <h3 className={style.creator}>POKEMON CREATOR</h3>
    </div>
  );
};

export default Form;
