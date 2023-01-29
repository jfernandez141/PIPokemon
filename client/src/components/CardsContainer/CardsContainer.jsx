import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const ITEMS_PER_PAGE = 12;

const CardsContainer = () => {
  let pokemons = useSelector((state) => state.pokemons);
  const filterPokemons = useSelector((state) => state.filterPokemons);
  if (filterPokemons.length) pokemons = filterPokemons;

  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  // console.log(pokemons);
  // console.log(items);

  const MAX_PAGES = Math.ceil(pokemons.length / ITEMS_PER_PAGE)
  const pageNumbers = []

  for(let i = 1; i<= MAX_PAGES;i++){
    pageNumbers.push(i)
  }
  

  useEffect(() => {
    setItems([...pokemons].splice(0, ITEMS_PER_PAGE));
    setCurrentPage(0);
  }, [pokemons]);

  const nextHandler = () => {
    const totalElements = pokemons.length;
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * ITEMS_PER_PAGE;
    if (firstIndex >= totalElements) return;

    setItems([...pokemons].splice(firstIndex, ITEMS_PER_PAGE));
    setCurrentPage(nextPage);
  };
  const prevHandler = () => {
    const totalElements = pokemons.length;
    const backPage = currentPage - 1;
    const firstIndex = backPage * ITEMS_PER_PAGE;
    if (backPage < 0) return;

    setItems([...pokemons].splice(firstIndex, ITEMS_PER_PAGE));
    setCurrentPage(backPage);
  };

  const pageHanlder = (event)=>{
    const page = event.target.value
    const firstIndex = (page - 1) * ITEMS_PER_PAGE

    setItems([...pokemons].splice(firstIndex, ITEMS_PER_PAGE));
    setCurrentPage(page);

  }

  return (
    <div>
      <div>
        <button onClick={prevHandler}>Back Page</button>
        <div>
          {pageNumbers.map((n)=>{
          return(
            <button key={n} onClick={pageHanlder} value={n} >
              {n}
            </button>
          )
        })}
        </div>
        <button onClick={nextHandler}>Next Page</button>
      </div>
      <div className={style.container}>
        {items.map((pokemon, index) => {
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
    </div>
  );
};

export default CardsContainer;
