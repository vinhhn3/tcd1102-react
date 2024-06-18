import React from "react";

function PostItem(props) {
  return (
    <div>
      <h3>Post Id:{props.data.id}</h3>
      <h3>Post Title: {props.data.title} </h3>
      <p>Post Body: {props.data.body} </p>
    </div>
  );
}

export default PostItem;
