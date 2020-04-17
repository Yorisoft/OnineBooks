import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Col, Row } from "react-bootstrap";

function BookDetails(props) {
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
      className="App"
      style={{ marginTop: "55px", textAlign: "cenleftter", height: "51rem" }}
    >
      <Row>
        <Col
          style={{
            marginTop: "4rem",
            marginLeft: "30rem",
            textAlign: "center",
            height: "40rem",
          }}
        >
          <h1>{books.title}</h1>
          <h4>by: {books.author}</h4>

          <div
            className="books"
            style={{ marginTop: "55px", textAlign: "center" }}
          >
            <div className="details">
              <p>Publisher: {books.publisher}</p>
              <p>ISBN: {books.isbn}</p>
              <p>Published In: {books.year_of_publication}</p>
            </div>
          </div>
          <Link to="/">
            <button className="btn btn-primary"> Reserve Book </button>
          </Link>
        </Col>
        <Col xs={7}>
          <img src={books.image_url_l} style={{ marginLeft: "20rem" }} />
        </Col>
      </Row>
    </Jumbotron>
  );
}

export default BookDetails;

// {props.map((book) => { src={books.image_url_l}
//  return (
//
//    );
// })}
