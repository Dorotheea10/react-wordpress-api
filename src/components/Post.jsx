import React from "react";

function Post({ post }) {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="post">
      <h2>{post.title.rendered}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      <div className="post-details">
        <p>Autore: {post.author}</p>
        <p>Data di pubblicazione: {formatDate(post.date)}</p>
      </div>
    </div>
  );
}

export default Post;
