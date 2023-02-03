import { useSelector } from "react-redux";
import HnavBar from "../../components/HNavBar/HNavBar";
import style from "./Error.module.css"
export default function Error() {
  let error = useSelector((state) => state.error);
  return (
    <div className={style.errorBody}>
      <HnavBar />
      <h1 className={style.error}>So Sorry, {error}</h1>
      <h1 className={style.error}>Please Return to Home</h1>
    </div>
  );
}
