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
  //const apiURL = "https://www.anapioficeandfire.com/api/books/1" ;
  const [books, setBooks] = useState([]); //can be empty but must make sure type is set

  const str = props.history.location.pathname;
  const n = str.length - 1;
  const newAPI = str.charAt(n);

  useEffect(() => {
    fetch(`https://www.anapioficeandfire.com/api/books/${newAPI}`)
      .then((response) => response.json())
      .then((books) => setBooks(books));
  }, [newAPI]);
  debugger;
  return (
    <Jumbotron
      className="App"
      style={{ marginTop: "55px", textAlign: "center", height: "51rem" }}
    >
      <h1>{books.name}</h1>

      <div className="books" style={{ marginTop: "55px" }}>
        <div className="book">
          <div className="details">
            <p>👨: {books.name}</p>
            <p>📖: {books.publisher}</p>
            <p>🏘️: {books.mediaType}</p>
            <p>⏰: {books.country}</p>
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
