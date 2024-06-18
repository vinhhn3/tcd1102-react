import React, { useState } from "react";

function Search(props) {
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSearch = () => {
    props.getGithubUsers(text);
  };
  return (
    <div>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Search Users..."
      />
      <button onClick={handleSearch} className="btn btn-block btn-primary">
        Search
      </button>
    </div>
  );
}

export default Search;
