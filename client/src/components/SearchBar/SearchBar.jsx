import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./SearchBar.module.css";
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
    <div>
      <input
        type="search"
        placeholder="Search Pokemon"
        value={searchBar}
        onChange={searchChange}
        onKeyDown={enter}
      />
      <button onClick={click}>Search</button>
    </div>
  );
}
