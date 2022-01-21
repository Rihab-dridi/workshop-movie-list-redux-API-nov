import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import axios from "axios";
import { fetchHandler } from "../redux/action";

export default function MovieList({ moviListe, search }) {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://movie-app-gmc.herokuapp.com/api/movies")
      .then((res) => dispatch(fetchHandler(res.data)))
      .catch((err) => console.log(err));
  }, [moviListe]);
const movies=useSelector(state=>state.moviesList)
console.log(movies)

  return (
    <div>
      <div className="movieListContainer">
        {movies
          .filter((el) =>
            el.title.toUpperCase().includes(search.toUpperCase().trim())
          )
          .map((el, key) => (
            <MovieCard movie={el} key={el.id} />
          ))}
      </div>
    </div>
  );
}
