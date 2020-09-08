import Axios from "axios";
import React, { useState } from "react";
//import UserContext from "../context/UserContext";
//import GitUserSearch from './GitUsersSearch';
//import { Redirect } from "react-router-dom";
import Repos from "./Repos";
import { toast } from "react-toastify";
import GitUsersSearch from "./GitUsersSearch";
import "./GitUsersSearch.scss";

const Search = () => {
  const [query, setQuery] = useState("");
  const [guy, setGuy] = useState(null);

  const fetchDetails = async () => {
    try {
      const { data } = await Axios.get(`https://api.github.com/users/${query}`);
      setGuy(data);
    } catch (error) {
      toast("Not able to locate user", { type: "error" });
    }
  };

  return (
    <div className="searchbox">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="search an user here"
      ></input>
      <button color="primary" onClick={fetchDetails}>
        Search
      </button>
      {guy ? <GitUsersSearch guy={guy} /> : null}

      {guy ? <Repos repos_url={guy.repos_url} /> : null}
    </div>
  );
};
export default Search;
