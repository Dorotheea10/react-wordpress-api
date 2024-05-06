import React, { useState, useEffect } from "react";
import axios from "axios";
import Article from "./Article";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      // Recupera i post relativi ai libri gialli utilizzando le API di WordPress
      const response = await axios.get("http://localhost:8888/wordpress//wp-json/wp/v2/posts?categories=1"); // Assumendo che la categoria dei libri gialli abbia l'id 1
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
    <div className="blog">
      <header className="blog-header">
        <h1>Blog dei Libri Gialli</h1>
      </header>
      <div className="post-list">
        {posts.map((post) => (
          <Article key={post.id} post={post} onClick={handlePostClick} />
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
};

export default Blog;
