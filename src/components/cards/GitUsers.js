import React, { useState, useEffect } from "react";
import "./GitUsers.css";
//add error loading

export default function GitUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/JayeshTiwari03")
      .then((response) => response.json())
      .then(
        (data) => {
          setUsers(data.users);
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
        <div>
        {users.map((user) => (
          <div key={user.id}>
            <h3>Phone number{user.email}</h3>
            <h2>{user.bio}</h2>
          </div>
        ))}
      </div>
    );
  }
};
