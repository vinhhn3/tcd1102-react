import React, { useState } from "react";
import { getUsersByLogin } from "../api/Github";
import Search from "../components/Search/index";
import Users from "../components/Users/Users";

function Home() {
  const [users, setUsers] = useState([]);

  const getGithubUsers = async (text) => {
    const data = await getUsersByLogin(text);
    setUsers(data);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <Search getGithubUsers={getGithubUsers} />
      <Users users={users} />
    </div>
  );
}

export default Home;
