// will be used to communicate with the sanity backend
// from react to sanity 

import { sanityClient } from "@sanity/client";

// sanityclient has to be configured using .env variables

const config = {
  dataset: process.env.SANITY_DATASET || "production",
  projectId: process.env.SANITY_PROJECT_ID,
  token: process.env.SANITY_API_TOKEN, //can decide to also use CORS
  apiVersion: "2022-03-25",
};

// create the client
export const client = sanityClient(config);
