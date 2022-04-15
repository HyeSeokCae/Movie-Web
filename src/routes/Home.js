import React, {useState} from "react";
import Loading from "../components/Loading";
import Choice from "../components/Choice";

function Home() {
  const [loading, setLoading] = useState(false);
  return <div>{loading ? <Loading /> : <Choice />}</div>;
}

export default Home;
