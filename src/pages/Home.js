import React from "react";
import Search from "../components/Search/index";
import Users from "../components/Users/Users";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Search />
      <Users />
    </div>
  );
}

export default Home;
