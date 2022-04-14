import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Phase4 from "../routes/Phase4";
import Phase3 from "../routes/Phase3";
import Phase2 from "../routes/Phase2";
import Phase1 from "../routes/Phase1";
import Choice from "../components/Choice";
import Home from "../routes/Home";
import MovieDetail from "./MovieDetail";
import ShowDetail from "./ShowDetail";
function App() {
  return (
    <Router basename="/movie-web">
      <Routes>
        <Route exact path="/" element={<Choice />} />
        <Route path="movie-web/phase1" element={<Phase1 />} />
        <Route path="movie-web/phase2" element={<Phase2 />} />
        <Route path="movie-web/phase3" element={<Phase3 />} />
        <Route path="movie-web/phase4" element={<Phase4 />} />
        <Route path="movie-web/home" element={<Home />} />
        <Route path="movie-web/movie/detail/:id" element={<MovieDetail />} />
        <Route path="movie-web/show/detail/:id" element={<ShowDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
