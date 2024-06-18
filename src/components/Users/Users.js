import React from "react";
import UserItem from "./UserItem";

function Users(props) {
  return (
    <div>
      {props.users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}

export default Users;
