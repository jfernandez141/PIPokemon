import { getPokemons, CreatedFilter, getTypes } from "../../redux/actions";
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
    if (value == "all") {
      dispatch(getPokemons());
    }
    if (value) {
      dispatch(CreatedFilter(value));
    }
  };

  return (
    <div>
      <select>
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

      <select defaultValue="all" onChange={(event) => handleCreated(event)}>
        <option value="all">All</option>
        <option value="created">Created</option>
        <option value="existing">Existing</option>
      </select>
    </div>
  );
};

export default FiltersNav;
