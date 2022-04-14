import React, {useState} from "react";
import Wanda from "../components/shows/Wanda";
import Falcon from "../components/shows/Falcon";
import Loki from "../components/shows/Loki";
import BlackWidow from "../components/movies/BlackWidow";
import WhatIf from "../components/shows/WhatIf";
import Shang from "../components/movies/Shang";
import Eternals from "../components/movies/Eternals";
import Hawkeye from "../components/shows/Hawkeye";
import Spider3 from "../components/movies/Spider3";
import Moon from "../components/shows/Moon";
import "./phaseBox.css";
function Phase3({id}) {
  const [loading, setLoading] = useState(false);

  return (
    <div className="phase1Box">
      {!loading ? <Wanda /> : null}
      {!loading ? <Falcon /> : null}
      {!loading ? <Loki /> : null}
      {!loading ? <BlackWidow /> : null}
      {!loading ? <WhatIf /> : null}
      {!loading ? <Shang /> : null}
      {!loading ? <Eternals /> : null}
      {!loading ? <Hawkeye /> : null}
      {!loading ? <Spider3 /> : null}
      {!loading ? <Moon /> : null}
    </div>
  );
}

export default Phase3;
