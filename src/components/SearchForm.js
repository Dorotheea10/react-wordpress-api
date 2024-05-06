import React from "react";

import axios from "axios"; // Importa Axios

function SearchForm() {
  // Implementa il form di ricerca qui
  return (
    <div>
      <input type="text" placeholder="Cerca..." />
      <button>Cerca</button>
    </div>
  );
}

export default SearchForm;
