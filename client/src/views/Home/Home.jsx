import HnavBar from "../../components/HNavBar/HNavBar";
import FiltersNav from "../../components/FiltersNav/FiltersNav";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPokemons } from "../../redux/actions.js";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());    
  }, [dispatch]);

  return (
    <>
      <div>
        <HnavBar></HnavBar>
        <FiltersNav></FiltersNav>
      </div>
      <h1>Estamos en el Home</h1>
      <CardsContainer/>
      <h1>Fin del Home</h1>
    </>
  );
};

export default Home;
