import React, { useContext, useState } from "react";
import GithubContext from "../../context/github/githubContext";

function Search(props) {
  const githubContext = useContext(GithubContext);
  const { clearUsers, searchUsers } = githubContext;

  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSearch = () => {
    searchUsers(text);
  };

  const handleClear = () => {
    setText("");
    clearUsers();
  };
  return (
    <div>
      <input
        onChange={handleChange}
        type="text"
        value={text}
        placeholder="Search Users..."
      />
      <button onClick={handleSearch} className="btn btn-block btn-primary">
        Search
      </button>
      <button onClick={handleClear} className="btn btn-block btn-light">
        Clear
      </button>
    </div>
  );
}

export default Search;
