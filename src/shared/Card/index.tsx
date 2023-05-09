import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Movie } from "../../types";

const MovieCard: React.FC<Movie> = (props) => {
  const { Poster, Title, Year } = props;

  return (
    <Card
      style={{
        width: "17rem",
        marginBottom: "60px",
        position: "relative",
        cursor: "pointer",
      }}
      className="shadow"
    >
      <Card.Img
        height="200"
        style={{ objectFit: "cover" }}
        variant="top"
        src={Poster}
      />
      <Card.Body className="bg-dark">
        <Card.Title>{Title}</Card.Title>
        <Card.Text>{Year}</Card.Text>
        <Button variant="info">More...</Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
