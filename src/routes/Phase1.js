import React, {useState} from "react";
import Ironman from "../components/movies/Ironman";
import Ironman2 from "../components/movies/Ironman2";
import Thor from "../components/movies/Thor";
import Hulk from "../components/movies/Hulk";
import CaptainAmerica from "../components/movies/CaptainAmerica";
import Avengers from "../components/movies/Avengers";
import "./phaseBox.css";
function Phase1({id}) {
  const [loading, setLoading] = useState(false);

  return (
    <div className="phase1Box">
      {!loading ? <Ironman /> : null}
      {!loading ? <Hulk /> : null}
      {!loading ? <Ironman2 /> : null}
      {!loading ? <Thor /> : null}
      {!loading ? <CaptainAmerica /> : null}
      {!loading ? <Avengers /> : null}
    </div>
  );
}

export default Phase1;
