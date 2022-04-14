import React from "react";
import {useParams} from "react-router-dom";
import {gql} from "apollo-boost";
import {useQuery} from "@apollo/client";
import {Link} from "react-router-dom";
import "./detail.css";

function Detail() {
  // Get show Detail query

  const GET_SHOW = gql`
    query getShow($id: Int!) {
      showDetail(id: $id) {
        show {
          id
          original_name
          overview
          backdrop_path
          first_air_date
          homepage
          number_of_seasons
        }
      }
    }
  `;
  const {id} = useParams();
  const {loading, data} = useQuery(GET_SHOW, {variables: {id: +id}});
  const IMG_URL = "http://image.tmdb.org/t/p/w500";

  // Show show Detail
  if (loading) {
    return loading;
  }
  if (data.showDetail.show) {
    return (
      <div className="detailWrap">
        <div className="detailText">
          <span>Title</span>
          <p>{data.showDetail.show.original_name}</p>
          <span>Seasons</span>
          <p>{data.showDetail.show.number_of_seasons}</p>
          <span>Overview</span>
          <p>{data.showDetail.show.overview}</p>
          <span>First Air Date</span>
          <p>{data.showDetail.show.first_air_date}</p>
        </div>
        <div className="detailImg">
          <img src={IMG_URL + data.showDetail.show.backdrop_path} />
        </div>
        <div className="homepage">
          <span>official-Homepage</span>
          <span className="emoji">↓</span>
          <a href={data.showDetail.show.homepage} target="_blank">
            More
          </a>
        </div>
      </div>
    );
  }
}

export default Detail;
