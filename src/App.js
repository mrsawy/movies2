import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import PeoplePage from "./components/pages/PeoplePage";
import classes from "./App.css";
import tvShowRoute from "./routers/tvShowsRouter";
// react-custom-scrollbars
// import Scrollbars from "react-custom-scrollbars";

//,Link
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

import MoviesPage from "./components/pages/MoviesPage";
import TvShowsPage from "./components/pages/TvShowsPage";
import Footer from "./components/Footer";
import Movie from "./components/pages/Movie";
import NotFound from "./components/pages/NotFound";
import TvShow from "./components/pages/TvShow";
import Auth from "./components/pages/Auth/Auth";
import Home from "./components/pages/Home/Home";

// import BookShelf from "./components/book-shelf";
// import { getAll } from "./BooksAPI";

const App = () => {
  //----------

  return (
    <div className={classes.biggest}>
      
      {/* <Scrollbars /> */}

      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies"  >
          <Route index element={<MoviesPage />} />
          <Route path=":id" element={<Movie kind={`movie`} />} />
        </Route>
        {/*          PEOPLE ROUTERS */}

        <Route path="/people">
          <Route index element={<PeoplePage />} />
          <Route path=":id" element={<Movie />} />
        </Route>
        <Route path="/tv-shows">
          <Route index element={<TvShowsPage />} />
          <Route path=":id" element={<TvShow kind={`tv`} />} />
        </Route>

        {/*auth route */}
        <Route path="/auth">
          <Route index element={<Auth />} />
        </Route>
        {/* <Route path="/tv-shows" element={<TvShowsPage />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
