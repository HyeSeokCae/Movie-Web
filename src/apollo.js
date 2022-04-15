import {ApolloClient, InMemoryCache, HttpLink, from} from "@apollo/client";
const link = from([
  new HttpLink({uri: "http://ql-movie-api.herokuapp.com/graphql"}),
]);
const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

export default client;
