import React from "react";
import "./GitUsersSearch.scss";

const GitUsersSearch = ({ guy }) => {
  return (
    <div className="card" id="searched">
      <h1>{guy.login}</h1>
      <p>{guy.id}</p>
      <img src={guy.avatar_url} alt="lol" />
      <p>{guy.node_id}</p>
      <div className="text-info">Followers: {guy.followers}</div>
      <div className="text-primary">Number of Repos: {guy.public_repos}</div>
    </div>
  );
};

export default GitUsersSearch;
