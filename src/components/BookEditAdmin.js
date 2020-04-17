import React from "react";
import { Link } from "react-router-dom";
////
function BookEdit(props) {
  return (
    <>
      <div
        className="container"
        style={{ marginTop: "5rem", paddingLeft: "50px" }}
      >
        <h1> Create a Book Entry </h1>
        <p> Fill out all fields below </p>

        {/* Display data from API */}

        {/* Use JSX below for each book */}

        <div className="book">
          <form action="/action_page.php">
            <label for="tile">Title:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              name="tile"
            />
            <br />
            <label for="author">Author:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Author"
              name="author"
            />
            <br />
            <label for="isbn">ISBN:</label>
            <input
              type="text"
              class="form-control"
              placeholder="ISBN"
              name="isbn"
            />
            <br />
            <label for="isbn">Number of Copies:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Number Of Copies"
              name="numberOfCopies"
            />
            <br />
            <label for="publisher">Publisher:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Publisher"
              name="publisher"
            />
            <br />
            <label for="dateOfPub">Date of Publication:</label>
            <input
              type="text"
              class="form-control"
              placeholder="01-01-2020"
              name="dateOfPub"
            />{" "}
            <br />
            <Link to="/">
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default BookEdit;
