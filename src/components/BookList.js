import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BookCover from "../assets/duneFH.jpg";

function BookList() {
  const apiURL = "https://www.anapioficeandfire.com/api/books/";
  const [books, setBooks] = useState([]); //can be empty but must make sure type is set

  useEffect(() => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((books) => setBooks(books));
  }, []);

  debugger;
  return (
    <div className="container">
      {books.map((book) => {
        const authors = book.authors.join(", ");
        return (
          <React.Fragment key={book.isbn}>
            <Link to={"/books/" + book.url}>
              <div
                className="card text-center"
                style={{ width: "12rem", margin: "2rem", float: "left" }}
              >
                <img
                  className="card img"
                  src={BookCover}
                  alt="Null"
                  style={{ height: "12rem" }}
                />
                <div className="card-body" style={{ height: "9.5rem" }}>
                  <h3
                    className="card-title"
                    style={{
                      marginTop: "-1rem",
                      width: "90%",
                      height: "4.5rem",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {book.name}
                  </h3>

                  <p
                    className="card-text text-secondary"
                    style={{
                      marginTop: "1.8rem",
                      width: "90%",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {" "}
                    By: {authors}{" "}
                  </p>
                </div>
              </div>
            </Link>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default BookList;
