import {Link} from "react-router-dom"
import style from "./HNavBar.module.css"

const LandingNavBar =()=>{
    return(
        <div >
            <div>
                <Link to="/home">
                <button className={style.btn}>Home</button>
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