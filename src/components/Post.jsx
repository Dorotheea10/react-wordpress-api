import React from "react";

function Post({ post }) {
  return (
    <div>
      <h2>{post.title.rendered}</h2>
      <p dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>
      <p>Author: {post.author}</p>
      <p>Date: {post.date}</p>
    </div>
  );
}

export default Post;
