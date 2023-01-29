import { Link } from "react-router-dom";
import style from "./Card.module.css";

const Card = (props) => {
  return (
    //Link to id
    <div className={style.card}>
      <h2>ID: {props.id}</h2>
      <Link to={`/detail/${props.id}`}>
      <h2>Name: {props.name}</h2>
      </Link>
      <h2>Types: {props.types}</h2>
      <h2>Atack: {props.attack}</h2>
      <h2>Created: {props.created ? "Yes" : "No"}</h2>
    </div>
  );
};

export default Card;
