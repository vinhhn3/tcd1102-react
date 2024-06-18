import axios from "axios";
import React, { useEffect, useState } from "react";
import Search from "../components/Users/Search/index";
import Users from "../components/Users/Users";

function Home() {
  const [count, setCount] = React.useState(0);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getGithubUsers();
  }, []);

  const getGithubUsers = async () => {
    const response = await axios.get("https://api.github.com/users");
    setUsers(response.data);
    console.log(response.data);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <Search />
      <Users users={users} />
    </div>
  );
}

export default Home;
