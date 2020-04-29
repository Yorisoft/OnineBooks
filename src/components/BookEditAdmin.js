import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "./Form";

const BookEdit = (props) => {
  const [book, setBook] = useState({
    isbn: "",
    author: "",
    title: "",
    publisher: "",
    number_of_copies: 0,
    year_of_publication: 0,
  });

  function handleUpdate({ target }) {
    setBook({ ...book, [target.name]: target.value });
  }

  function updateLibrary() {
    fetch("http://localhost:5000/book", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        isbn: book.isbn,
        author: book.author,
        title: book.title,
        publisher: book.publisher,
        number_of_copies: book.number_of_copies,
        year_of_publication: book.year_of_publication,
      }), //property name : value
    })
      .then((response) => response.json())
      .then((book) => console.log(book));

    console.log(book);
  }

  return (
    <>
      <div
        className="container"
        style={{ marginTop: "5rem", paddingLeft: "50px" }}
      >
        <h1> Create a Book Entry </h1>
        <p> Fill out all fields below </p>
        <Form book={book} onChange={handleUpdate} onSave={updateLibrary} />
      </div>
    </>
  );
};

export default BookEdit;
