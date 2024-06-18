import React from "react";

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
      <a href="" className="btn btn-dark btn-sm">
        More
      </a>
    </div>
  );
};

export default UserItem;
