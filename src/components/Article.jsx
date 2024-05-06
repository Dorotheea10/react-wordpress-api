import React from "react";

const articles = [
  {
    id: 1,
    title: "Il mistero del caso del cane che non abbaiava",
    content:
      "<p>Un giallo classico ambientato in un piccolo villaggio inglese, dove un cane silenzioso svela un oscuro segreto.</p>",
    author: "Agatha Christie",
    date: "2023-04-15",
  },
  {
    id: 2,
    title: "L'ombra dell'assassino",
    content:
      "<p>Un thriller avvincente che segue le indagini di un detective per svelare l'identità di un misterioso assassino in serie.</p>",
    author: "Patricia Highsmith",
    date: "2023-07-28",
  },
  {
    id: 3,
    title: "Il caso del misterioso manoscritto",
    content:
      "<p>Un giovane detective si imbatte in un antico manoscritto che rivela una serie di omicidi mai risolti, portandolo in un pericoloso viaggio alla scoperta della verità.</p>",
    author: "Raymond Chandler",
    date: "2023-09-10",
  },
  {
    id: 4,
    title: "La signora in nero",
    content:
      "<p>Una storia di fantasmi e misteri che si svolge in una vecchia dimora infestata da un oscuro segreto e una presenza spettrale.</p>",
    author: "Susan Hill",
    date: "2023-11-22",
  },
  {
    id: 5,
    title: "Il labirinto delle ombre",
    content:
      "<p>Un labirinto di indizi e sospetti si svela mentre un investigatore privato cerca di risolvere il misterioso omicidio di una giovane donna.</p>",
    author: "Gillian Flynn",
    date: "2024-02-08",
  },
  {
    id: 6,
    title: "L'enigma del fiore rosso",
    content:
      "<p>Un fiore rosso abbandonato sul luogo del crimine porta un detective ad indagare su una serie di omicidi legati a un oscuro culto segreto.</p>",
    author: "James Patterson",
    date: "2024-04-19",
  },
];

const Article = ({ article, onClick }) => {
  return (
    <div className="article" onClick={() => onClick(article.id)}>
      <h2>{article.title}</h2>
      <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }}></div>
      <div className="article-meta">
        <p>Autore: {article.author}</p>
        <p>Data di pubblicazione: {new Date(article.date).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default Article;
