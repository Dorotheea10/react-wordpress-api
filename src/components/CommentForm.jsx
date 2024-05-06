import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import CommentForm from "./CommentForm";

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("https://localhost:8888/wordpress//wp-json/wp/v2/posts");
      setPosts(response.data);
    } catch (error) {
      console.error("Errore durante il recupero dei post:", error);
    }
  };

  const handlePostClick = async (postId) => {
    const post = posts.find((post) => post.id === postId);
    setSelectedPost(post);
    await fetchComments(postId);
  };

  const fetchComments = async (postId) => {
    try {
      const response = await axios.get(`https://localhost:8888/wordpress//wp-json/wp/v2/comments?post=${postId}`);
      setComments(response.data);
    } catch (error) {
      console.error("Errore durante il recupero dei commenti:", error);
    }
  };

  const addComment = async (comment) => {
    try {
      // Implementazione dell'aggiunta di un nuovo commento tramite le API di WordPress
    } catch (error) {
      console.error("Errore durante l'aggiunta del commento:", error);
    }
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Post di WordPress</h1>
      </header>
      <div className="post-list">
        {currentPosts.map((post) => (
          <div key={post.id} className="post-item" onClick={() => handlePostClick(post.id)}>
            <h2>{post.title.rendered}</h2>
          </div>
        ))}
      </div>
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
      {selectedPost && (
        <div className="selected-post">
          <h2>{selectedPost.title.rendered}</h2>
          <div dangerouslySetInnerHTML={{ __html: selectedPost.content.rendered }}></div>
          <h3>Commenti</h3>
          <CommentForm addComment={addComment} />
          {comments.map((comment) => (
            <div key={comment.id} className="comment">
              <strong>{comment.author_name}</strong>: {comment.content.rendered}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
