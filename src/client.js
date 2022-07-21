// will be used to communicate with the sanity backend
// from react to sanity
// sanityClient is a default export function
import sanityClient from "@sanity/client";

// sanityclient has to be configured using .env variables

export const config = {
  dataset: process.env.REACT_APP_SANITY_DATASET || "production",
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  token: process.env.REACT_APP_SANITY_TOKEN, //can decide to also use CORS
  apiVersion: "2022-03-25",
};

// create the client that will be used to connect to the sanity backend and fetch the data
const client = sanityClient(config);

export default client;
