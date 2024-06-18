import axios from "axios";
import React, { useEffect, useState } from "react";
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
      <Users users={users} />
    </div>
  );
}

export default Home;
