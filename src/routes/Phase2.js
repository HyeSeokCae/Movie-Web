import React, {useState} from "react";
import Ironman3 from "../components/movies/Ironman3";
import Thor2 from "../components/movies/Thor2";
import Gog from "../components/movies/Gog";
import CaptainAmerica2 from "../components/movies/CaptainAmerica2";
import Ultron from "../components/movies/Ultron";
import AntMan from "../components/movies/AntMan";
import "./phaseBox.css";
function Phase2({id}) {
  const [loading, setLoading] = useState(false);

  return (
    <div className="phase1Box">
      {!loading ? <Ironman3 /> : null}
      {!loading ? <Thor2 /> : null}
      {!loading ? <CaptainAmerica2 /> : null}
      {!loading ? <Gog /> : null}
      {!loading ? <Ultron /> : null}
      {!loading ? <AntMan /> : null}
    </div>
  );
}

export default Phase2;
