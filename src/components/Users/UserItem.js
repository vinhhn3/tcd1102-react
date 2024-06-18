import React from "react";

function UserItem(props) {
  return (
    <div>
      <h2>UserItem</h2>
      <h3>Login: {props.user.login}</h3>
      <h3>UserId: {props.user.id}</h3>
    </div>
  );
}

export default UserItem;
