import React from "react";
import {Card, Button  } from "react-bootstrap";
import Rate from "./Rate";
export default function MovieCard({ movie }) {
  return (
    <div>
      <Card className="movieCard" >
        <Card.Img variant="top" src= {movie.imgUrl} />
        <Card.Body>
          <Card.Title>{movie.title} </Card.Title>
          <Card.Text>
        {movie.description}
          </Card.Text>
          <Rate  rate={movie.rate}  />
        </Card.Body>
      </Card>
    </div>
  );
}
