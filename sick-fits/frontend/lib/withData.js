import withApollo from "next-with-apollo"; // gives us high order component that exposes apollo client via a prop

import ApolloClient from "apollo-boost"; // import apollo client from apollo boost
import { endpoint } from "../config"; // endpoint that shows us our yoga api

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === "development" ? endpoint : endpoint,
    request: operation => {
      // when you make a request, the logged in cookies in the browser come in
      operation.setContext({
        fetchOptions: {
          credentials: "include"
        },
        headers
      });
    }
  });
}

export default withApollo(createClient);
