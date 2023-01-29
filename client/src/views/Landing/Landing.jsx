import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./Landing.module.css";
import { getPokemons } from "../../redux/actions.js";

const Landing = () => {
  let pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  if (!pokemons.length) dispatch(getPokemons());

  return (
    <div className={style.landingBody}>
      <h1 className={style.tittle}>Estamos en el Landing</h1>
      <Link to="/home">
        <button className={style.btn}>Home</button>
      </Link>
    </div>
  );
};

export default Landing;
