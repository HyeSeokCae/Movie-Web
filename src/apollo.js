import {ApolloClient, InMemoryCache} from "@apollo/client";
const client = new ApolloClient({
  uri: "http://ql-movie-api.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

export default client;
