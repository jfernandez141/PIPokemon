import { useState } from "react";
import { useDispatch } from "react-redux";
import style from "./SearchBar.module.css";
import { getPokemonByName } from "../../redux/actions";

export default function SearchBar() {
  const [searchBar, setSearchBar] = useState("");

  const dispatch = useDispatch();

  function click() {
    dispatch(getPokemonByName(searchBar));

    setSearchBar("");
  }
  function enter(event) {
    if (event.key === "Enter") {
      dispatch(getPokemonByName(searchBar));

      setSearchBar("");
    }
  }
  function searchChange(data) {
    setSearchBar(data.target.value);
  }

  return (
    <div className={style.searchBar}>
      <input className={style.input}
        type="search"
        placeholder="Search Pokemon"
        value={searchBar}
        onChange={searchChange}
        onKeyDown={enter}
      />
      <button className={style.btn} onClick={click}>Search</button>
    </div>
  );
}
