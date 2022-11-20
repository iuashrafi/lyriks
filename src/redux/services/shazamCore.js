import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
/*
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "51af0f9628msh965d36d4a513817p1ec4d3jsnf810b0dd0ade",
    "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
  },
};
fetch("https://shazam-core.p.rapidapi.com/v1/charts/world", options)
.then((response) => response.json())
.then((response) => console.log(response))
.catch((err) => console.error(err));
*/

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: () => {
      headers.set(
        "X-RapidAPI-Key",
        "51af0f9628msh965d36d4a513817p1ec4d3jsnf810b0dd0ade"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/charts/world" }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
