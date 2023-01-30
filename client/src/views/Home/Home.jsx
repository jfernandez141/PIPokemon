import HnavBar from "../../components/HNavBar/HNavBar";
import Error from "../../components/Error/Error.jsx";
import FiltersNav from "../../components/FiltersNav/FiltersNav";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPokemons } from "../../redux/actions.js";
import style from "./Home.module.css";

const Home = () => {
  let error = useSelector((state) => state.error);

  let pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  if (!pokemons.length) dispatch(getPokemons());

  if (error) {
    return (
      <div>        
        <Error/>
      </div>
    );
  }
  return (
    <div className={style.homeBody}>
      <div >
        <HnavBar></HnavBar>
        <FiltersNav></FiltersNav>
      </div>

      <CardsContainer />
    </div>
  );
};

export default Home;
