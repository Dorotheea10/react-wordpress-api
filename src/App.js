import React from "react";
import "./App.css";
import PostList from "./PostList";
import SearchForm from "./SearchForm";

import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My React App</h1>
        <SearchForm />
        <PostList />
      </header>
    </div>
  );
}

export default App;
