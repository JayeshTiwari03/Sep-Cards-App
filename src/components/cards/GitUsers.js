import React, { useState, useEffect } from "react";
import "./GitUsers.scss";

const GitUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then(
        (data) => {
          setUsers(data);
          setLoading(true);
        },
        (error) => {
          setLoading(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <h5>There was some error, try again</h5>;
  } else if (!loading) {
    return <p>loading...please wait</p>;
  } else {
    return (
      <div className="card-columns" id="card-column">
        {users.map((user) => (
          <div key={user.id}>
            <div className="card" id="userpage">
              <img
                className="card-img-top"
                id="cardimage"
                src={user.avatar_url}
                alt="user1"
              />
              <div className="card-body">
                <h5 className="card-title">{user.login}</h5>
                <p className="card-text">{user.url}</p>
                <a href={user.repos_url} className="btn btn-primary">
                  See Repos
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
};
export default GitUsers;
