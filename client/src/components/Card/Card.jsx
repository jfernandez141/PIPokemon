import { Link } from "react-router-dom";
import style from "./Card.module.css";
import {deletePokemon} from "../../redux/actions"
import { useDispatch } from "react-redux";

const Card = (props) => {
  const dispatch = useDispatch();
  function click(id){
    dispatch(deletePokemon(id))
  }
  
  return (
    //Falta implementar la eliminacion
    <div className={style.card}>
      {props.created && <button className={style.btnDelete} onClick={()=>click(props.id)}>❎</button>}
      <Link to={`/detail/${props.id}`}>
        <h2>Name: {props.name}</h2>
      </Link>
      <img className={style.img} src={props.image} alt={props.name} />
      <h2>Types: {props.types}</h2>
      <h2>Atack: {props.attack}</h2>
      <h2>Created: {props.created ? "Yes" : "No"}</h2>
    </div>
  );
};

export default Card;
