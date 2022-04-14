import React from "react";
import {useParams} from "react-router-dom";
import {gql} from "apollo-boost";
import {useQuery} from "@apollo/client";
import {Link} from "react-router-dom";
import "./detail.css";

function Detail() {
  // Get movie Detail query
  const GET_MOVIE = gql`
    query getMovie($id: Int!) {
      movieDetail(id: $id) {
        movie {
          id
          original_title
          overview
          backdrop_path
          release_date
          runtime
          homepage
        }
      }
    }
  `;
  const {id} = useParams();
  const {loading, data} = useQuery(GET_MOVIE, {variables: {id: +id}});
  const IMG_URL = "http://image.tmdb.org/t/p/w500";

  // Show movie Detail
  if (loading) {
    return loading;
  }
  if (data.movieDetail.movie) {
    return (
      <div className="detailWrap">
        <div className="detailText">
          <span>Title</span>
          <p>{data.movieDetail.movie.original_title}</p>
          <span>Overview</span>
          <p>{data.movieDetail.movie.overview}</p>
          <span>Release-Date</span>
          <p>{data.movieDetail.movie.release_date}</p>
          <span>RunTime</span>
          <p>{data.movieDetail.movie.runtime}</p>
        </div>
        <div className="detailImg">
          <img src={IMG_URL + data.movieDetail.movie.backdrop_path} />
        </div>
        <div className="homepage">
          <span>official-Homepage</span>
          <span className="emoji">↓</span>

          <a href={data.movieDetail.movie.homepage} target="_blank">
            More
          </a>
        </div>
      </div>
    );
  }
}

export default Detail;
