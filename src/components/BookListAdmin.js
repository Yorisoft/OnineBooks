import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BookCover from "../assets/duneFH.jpg";

function BookList() {
  const apiURL = "http://localhost:5000/book?c=20&p=1";
  const [books, setBooks] = useState([]); //can be empty but must make sure type is set

  useEffect(() => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((books) => setBooks(books["result"]));
  }, []);

  return (
    <div className="container">
      {books.map((books, index) => {
        return (
          <Link to={"/DetailsAdmin/" + books.isbn}>
            <div
              key={index}
              className="card text-center"
              style={{ width: "12rem", margin: "2rem", float: "left" }}
            >
              <img
                className="card img"
                src={books.image_url_l}
                alt="Null"
                style={{ height: "12rem" }}
              />
              <div
                className="card-body"
                style={{
                  height: "9.5rem",
                  lineHeight: "2rem",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                <h3
                  className="card-title"
                  style={{
                    lineHeight: "2rem",
                    marginTop: "-1rem",
                    overflow: "hidden",
                  }}
                >
                  {books.title}
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
                  By: {books.author}{" "}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default BookList;
