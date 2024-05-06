import React, { useState, useEffect } from "react";
import PostList from "./components/PostList";
import SearchForm from "./components/SearchForm";
import { fetchPosts } from "./services/wordpressApi";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then(setPosts);
  }, []);

  return (
    <div>
      <h1>WordPress React App</h1>
      <SearchForm />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
