import {Link} from "react-router-dom"
import style from "./Landing.module.css";
const Landing = () => {
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
