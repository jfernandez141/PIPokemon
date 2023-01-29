import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import { useSelector } from "react-redux";

const CardsContainer = () => {
  
  
  let pokemons = useSelector((state) => state.pokemons);
  

  const filterPokemons = useSelector((state) => state.filterPokemons);

  if (filterPokemons.length) pokemons = filterPokemons;
  //console.log(pokemons);

  return (
    <div className={style.container}>
      {pokemons.map((pokemon, index) => {
        return (
          <div key={index}>
            <Card
              id={pokemon.id}
              image={pokemon.image}
              name={pokemon.name}
              types={pokemon.types.join(", ")}
              attack={pokemon.stats["attack"]}
              created={pokemon.created}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CardsContainer;
