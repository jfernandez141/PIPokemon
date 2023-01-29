import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Card/Card";
import HnavBar from "../../components/HNavBar/HNavBar";

const Detail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({
    id: "",
    image: "",
    name: "",
    types: [],
    attack: "",
    created: "",
  });

  // const pokemon = await axios.get(`http://localhost:3001/pokemons/${id}`)).data
  useEffect(async () => {
    const poke = (await axios.get(`http://localhost:3001/pokemons/${id}`)).data;
    setPokemon({
      id: poke.id,
      image: poke.image,
      name: poke.name,
      types: poke.types,
      hp: poke.stats.hp,
      attack: poke.stats.attack,
      defense: poke.stats.defense,
      speed: poke.stats.speed,
      created: poke.created,
    });
  }, [id]);

  return (
    <div>
      <HnavBar />
      <div>
        <h2>ID: {pokemon.id}</h2>
        <h2>Name: {pokemon.name}</h2>
        <h2>Imagen</h2>
        <h2>Types: {pokemon.types.join(", ")}</h2>
        <div>
          <h2>Hp: {pokemon.hp}</h2>
          <h2>Attack: {pokemon.attack}</h2>
          <h2>Defense: {pokemon.defense}</h2>
          <h2>Speed: {pokemon.speed}</h2>
        </div>
        <h2>Created: {pokemon.created ? "Yes" : "No"}</h2>
      </div>
    </div>
  );
};

export default Detail;
