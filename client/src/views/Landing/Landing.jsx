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
      <div className={style.title}>
        <h1 className={style.tittle}>WELCOME TO POKEMON</h1>
        <h3>This app was created by Jhamil Fernandez</h3>
        <Link to="/home">
          <button className={style.btn}>Home</button>
        </Link>
        <a href="https://www.linkedin.com/in/jhamil-fernandez/">
          <button className={style.btn}>Linkedin</button>
        </a>
        <a href="https://github.com/jfernandez141">
          <button className={style.btn}>GitHub</button>
        </a>
      </div>
    </div>
  );
};

export default Landing;
