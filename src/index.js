import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import client from "../src/apollo";
import {ApolloProvider} from "@apollo/client/react";
import "./index.css";

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
