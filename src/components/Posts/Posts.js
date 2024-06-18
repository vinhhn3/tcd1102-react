import axios from "axios";
import React, { useState } from "react";
import PostItem from "./PostItem";

function Posts() {
  const [posts, setPosts] = useState([]);
  const post = {
    id: 1,
    title: "Post Title ABC",
    body: "Post Body",
  };

  const handleGetPosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(response.data);
    setPosts(response.data);
  };
  return (
    <div>
      <h1>Posts</h1>
      <button onClick={handleGetPosts}>Get All Posts</button>
      {posts.map((post) => (
        <PostItem key={post.id} data={post} />
      ))}
    </div>
  );
}

export default Posts;
