import React, { useState } from "react";

function Search(props) {
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSearch = () => {
    props.getGithubUsers(text);
  };

  const handleClear = () => {
    setText("");
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
