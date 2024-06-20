import React from "react";
import { Link } from "react-router-dom";

const UserItem = (props) => {
  const { login, avatar_url, html_url } = props.user;
  return (
    <div className="card text-center">
      <img
        alt="avatar"
        src={avatar_url}
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <Link to={`/user/${login}`} className="btn btn-dark btn-sm">
        More
      </Link>
    </div>
  );
};

export default UserItem;
