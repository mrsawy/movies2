import React from "react";
import TvShowsPage from "../components/pages/TvShowsPage";
import TvShow from "../components/pages/TvShow";
import { Route } from "react-router-dom";

const tvShowRoute = () => {
  return (
    <Route path="/tv-shows">
      <>
        <Route index element={<TvShowsPage />} />
        <Route path=":id" element={<TvShow kind={`tv`} />} />
      </>
    </Route>
  );
};

export default tvShowRoute;
