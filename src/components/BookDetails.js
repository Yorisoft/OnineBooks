import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";

function BookDetails(props) {
  //let  selectAPI = props.url

  //const StateTile = (props) => {
  //  let bookSelect = props.match.url;
  //  return (
  //    <a href={`/states/${props.id}`}>
  //     <path id={props.abbreviation} d={props.path}>
  //        <title>{props.name}</title>
  //       </path>
  //     </a>
  //   );
  // };

  const [books, setBooks] = useState([]); //can be empty but must make sure type is set

  const str = props.history.location.pathname;
  const end = str.length;
  const start = str.length - 11;
  const bookSelect = str.slice(start, end);
  const newAPI = `http://localhost:5000/book${bookSelect}`;
  //asdfasdfasdfasdfasd
  //hjkfhhjg
  useEffect(() => {
    fetch(newAPI)
      .then((response) => response.json())
      .then((books) => setBooks(books));
  }, [newAPI]);
  debugger;
  return (
    <Jumbotron
      className="App"
      style={{ marginTop: "55px", textAlign: "center", height: "51rem" }}
    >
      <h1>{books.title}</h1>

      <div className="books" style={{ marginTop: "55px" }}>
        <div className="book">
          <div className="details">
            <p>Author: {books.author}</p>
            <p>Publisher: {books.publisher}</p>
            <p>ISBN: {books.isbn}</p>
            <p>Published In: {books.year_of_publication}</p>
          </div>
        </div>
      </div>
      <Link to="/">
        <button className="btn btn-primary"> Reserve Book </button>
      </Link>
    </Jumbotron>
  );
}

export default BookDetails;

// {props.map((book) => {
//  return (
//
//    );
// })}
