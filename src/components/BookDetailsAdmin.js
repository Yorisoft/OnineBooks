import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";

function DeatilsAdmin(props) {
  return (
    <Jumbotron
      style={{ marginTop: "55px", textAlign: "center", height: "45rem" }}
    >
      <h4> This is the detail/editing page for {props.match.params.name} </h4>

      <div className="books" style={{ marginTop: "55px" }}>
        <div className="book">
          <h5>ISBN</h5>

          <div className="details">
            <p>👨: Author/Authors</p>
            <p>📖: Number of pages</p>
            <p>🏘️: Book Country</p>
            <p>⏰: Release date</p>
          </div>
        </div>
      </div>
      <Link to="/bookEditAdmin">
        <button className="btn btn-primary"> Edit Library</button>
      </Link>
    </Jumbotron>
  );
}
export default DeatilsAdmin;
