import {Link} from "react-router-dom"
import style from "./HNavBar.module.css"
import { useDispatch } from "react-redux"
import {resetError, resetFilterPokemons} from "../../redux/actions"

const LandingNavBar =()=>{
    //Cambiar nombre de funcion a Hnav
    const dispatch = useDispatch();
    const HandlerResetFilterPokemons =async()=>{
        await dispatch(resetFilterPokemons())
        await dispatch(resetError())
    }
    return(
        <div >
            <div>
                <Link to="/home" >
                <button className={style.btn} onClick={()=>HandlerResetFilterPokemons()} >Home</button>
                </Link>
                <Link to="/form">
                <button className={style.btn}>Form</button>
                </Link>
                <Link to="/about">
                <button className={style.btn}>About</button>
                </Link>
            </div>
        </div>
    )

}

export default LandingNavBar