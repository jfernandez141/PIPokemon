import {
  getPokemons,
  createdFilter,
  getTypes,
  typeFilter,
  orderFilter,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./FiltersNav.module.css";

const FiltersNav = () => {
  const dispatch = useDispatch();
  let types = useSelector((state) => state.types);

  //deberia estar en el landing
  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const handleCreated = (event) => {
    event.preventDefault();
    const value = event.target.value;
    // if (value == "all") {
    //   dispatch(getPokemons());
    // }
    //CREO QUE NO SE REQUIERE
    if (value) {
      dispatch(createdFilter(value));
    }
  };

  const handleType = (event) => {
    event.preventDefault();
    const value = event.target.value;
    dispatch(typeFilter(value));
  };
  const handleOrder = (event) => {
    event.preventDefault();
    const value = event.target.value;
    dispatch(orderFilter(value));
  };

  return (
    <div className={style.navdib}>
      <div>
        <label className={style.label} htmlFor="Types">
          Types:{" "}
        </label>
        <select
          className={style.selects}
          name="Types"
          defaultValue="all"
          onChange={handleType}
        >
          <option value="all">All</option>
          {types.map((t, index) => {
            return (
              <option key={index} value={t}>
                {t}
              </option>
            );
          })}
          <option value=""></option>
        </select>
      </div>

      <div>
        <label className={style.label} htmlFor="created">
          Created:{" "}
        </label>
        <select
          className={style.selects}
          name="created"
          defaultValue="all"
          onChange={handleCreated}
        >
          <option value="all">All</option>
          <option value="created">BDD</option>
          <option value="existing">API</option>
        </select>
      </div>

      <div>
        <label className={style.label} htmlFor="order">
          Order:{" "}
        </label>
        <select
          className={style.selects}
          name="order"
          defaultValue="order"
          onClick={handleOrder}
        >
          <option value="default">-Default-</option>
          <optgroup label="Alphabetic">
            <option value="az">A to Z</option>
            <option value="za">Z to A</option>
          </optgroup>
          <optgroup label="Powerfull">
            <option value="up">Up</option>
            <option value="down">Down</option>
          </optgroup>
        </select>
      </div>
      <div>
        <SearchBar />
      </div>
    </div>
  );
};

export default FiltersNav;
