import React from "react";
import {Link} from "react-router-dom";
import {gql} from "apollo-boost";
import {useQuery} from "@apollo/client";
import "./phase1.css";
function Ironman3() {
  const GET_MOVIES = gql`
    {
      searchMovie(query: "Iron man") {
        movies {
          id
          original_title
          poster_path
          overview
        }
      }
    }
  `;
  const {loading, error, data} = useQuery(GET_MOVIES);
  const IMG_URL = "http://image.tmdb.org/t/p/w500";

  return (
    <div className="linkBox">
      <div className="link" style={{flexDirection: "row"}}>
        {!loading &&
          data.searchMovie.movies &&
          data.searchMovie.movies.slice(2, 3).map((m) => (
            <div
              className="card"
              key={m.id}
              id={m.id}
              style={{margin: "0 20px"}}
            >
              <img src={IMG_URL + m.poster_path} />
              <Link to={`/movie/detail/${m.id}`} className="aText">
                {m.original_title}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Ironman3;
