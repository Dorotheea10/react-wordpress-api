import React, { useState, useEffect } from "react";
import axios from "axios";

function WordpressApi({ apiUrl }) {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(apiUrl);
      setPosts(response.data);
    } catch (error) {
      console.error("Errore durante il recupero dei post:", error);
    }
  };

  const handlePostClick = (postId) => {
    const post = posts.find((post) => post.id === postId);
    setSelectedPost(post);
  };

  return (
    <div className="wordpress-api">
      <div className="post-list">
        {posts.map((post) => (
          <div key={post.id} className="post-item" onClick={() => handlePostClick(post.id)}>
            <h2>{post.title.rendered}</h2>
          </div>
        ))}
      </div>
      {selectedPost && (
        <div className="selected-post">
          <h2>{selectedPost.title.rendered}</h2>
          <div dangerouslySetInnerHTML={{ __html: selectedPost.content.rendered }}></div>
        </div>
      )}
    </div>
  );
}

export default WordpressApi;
