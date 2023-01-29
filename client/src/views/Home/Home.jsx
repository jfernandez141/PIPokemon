import HnavBar from "../../components/HNavBar/HNavBar";
import Error from "../../components/Error/Error.jsx"
import FiltersNav from "../../components/FiltersNav/FiltersNav";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { getPokemons } from "../../redux/actions.js";

const Home = () => {
  let error = useSelector((state) => state.error);
  
  let pokemons = useSelector((state) => state.pokemons);  
  const dispatch = useDispatch();  
  if(!pokemons.length) dispatch(getPokemons());  

  
  if(error) {      
    return(
      <div>
        <HnavBar/>
        <h3>{error}</h3>
      </div>
    )
  }
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
