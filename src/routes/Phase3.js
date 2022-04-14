import React, {useState} from "react";
import Thor3 from "../components/movies/Thor3";
import Ds from "../components/movies/Ds";
import Gog2 from "../components/movies/Gog2";
import CaptainAmerica3 from "../components/movies/CaptainAmerica3";
import Spider from "../components/movies/Spider";
import BlackPanther from "../components/movies/BlackPanther";
import Avengers3 from "../components/movies/Avengers3";
import Avengers4 from "../components/movies/Avengers4";
import AntMan2 from "../components/movies/AntMan2";
import CaptainMarvel from "../components/movies/CaptainMarvel";
import Spider2 from "../components/movies/Spider2";
import "./phaseBox.css";
function Phase3({id}) {
  const [loading, setLoading] = useState(false);

  return (
    <div className="phase1Box">
      {!loading ? <CaptainAmerica3 /> : null}
      {!loading ? <Ds /> : null}
      {!loading ? <Gog2 /> : null}
      {!loading ? <Spider /> : null}
      {!loading ? <Thor3 /> : null}
      {!loading ? <BlackPanther /> : null}
      {!loading ? <Avengers3 /> : null}
      {!loading ? <AntMan2 /> : null}
      {!loading ? <CaptainMarvel /> : null}
      {!loading ? <Avengers4 /> : null}
      {!loading ? <Spider2 /> : null}
    </div>
  );
}

export default Phase3;
