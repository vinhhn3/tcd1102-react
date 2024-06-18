import axios from "axios";
import React, { useState } from "react";
import Search from "../components/Search/index";
import Users from "../components/Users/Users";

function Home() {
  const [users, setUsers] = useState([]);

  const getGithubUsers = async (text) => {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    setUsers(response.data.items);
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
