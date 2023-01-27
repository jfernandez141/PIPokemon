import {
  getPokemons,
  createdFilter,
  getTypes,
  typeFilter,
  orderFilter,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const FiltersNav = () => {
  const dispatch = useDispatch();
  let types = useSelector((state) => state.types);

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
    <div>
      <div>
        <label htmlFor="Types" on>Types: </label>
        <select
          name="Types"
          defaultValue="all"
          onChange={(event) => handleType(event)}
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
        <label htmlFor="created">Created: </label>
        <select
          name="created"
          defaultValue="all"
          onChange={(event) => handleCreated(event)}
        >
          <option value="all">All</option>
          <option value="created">BDD</option>
          <option value="existing">API</option>
        </select>
      </div>

      <div>
        <label htmlFor="order"></label>
        <select
          name="order"
          defaultValue="order"
          onClick={(event) => handleOrder(event)}
        >
          <option value="default">-Order-</option>
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
    </div>
  );
};

export default FiltersNav;
