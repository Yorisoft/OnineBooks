import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Col, Row } from "react-bootstrap";

function DeatilsAdmin(props) {
  const str = props.history.location.pathname;
  const end = str.length;
  const start = str.length - 11;
  const bookSelect = str.slice(start, end);
  const newAPI = `http://localhost:5000/book${bookSelect}`;

  const [books, setBooks] = useState([]); //can be empty but must make sure type is set
  useEffect(() => {
    fetch(newAPI)
      .then((response) => response.json())
      .then((books) => setBooks(books));
  }, [newAPI]);

  return (
    <Jumbotron
      style={{ marginTop: "55px", textAlign: "center", height: "45rem" }}
    >
      <h4> This is the detail-editing page for {books.title} </h4>
      <h4>{books.number_of_copies}</h4>

      <div className="books" style={{ marginTop: "55px" }}>
        <div className="book">
          <h5>{books.title}</h5>
          <h5>Publisher: {books.author}</h5>
          <div className="details">
            <p>Publisher: {books.publisher}</p>
            <p>ISBN: {books.isbn}</p>
            <p>Published In: {books.year_of_publication}</p>
          </div>
        </div>
      </div>
      <Link to="/bookEditAdmin">
        <button className="btn btn-success"> +1</button>
        <button className="btn btn-danger"> -1 </button>
      </Link>
      <Link to="/bookEditAdmin" style={{ marginLeft: "1rem" }}>
        <button className="btn btn-primary"> Edit Library</button>
      </Link>
    </Jumbotron>
  );
}
export default DeatilsAdmin;
