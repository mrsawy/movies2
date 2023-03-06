import React,{useEffect,useState} from 'react'
import FirstSectionCarousel from './FirstSectionCarousel'
import TrendingSection from './TrendingSection'
import classes from './Home.module.css'
import MoviesContent from '../MoviesContent'

export default function Home() {
  const [moviesArray, setMoviesArray] = useState([]);
  const [moviesKind, setMoviesKind] = useState(`Popular`);
  //---------------
  const [tvShowKind, settvShowKind] = useState(`Popular`);
  const [tvShowArray, setTvShowArray] = useState([]);



  useEffect(() => {
    let url;
    tvShowKind === `Popular`
      ? (url = `https://api.themoviedb.org/3/movie/popular?api_key=6d2292cf6936acd6b878f58decae96c6&language=en-US&page=1`)
      : tvShowKind === `Top rated`
      ? (url = `https://api.themoviedb.org/3/movie/top_rated?api_key=6d2292cf6936acd6b878f58decae96c6&language=en-US&page=1`)
      : tvShowKind === `latest`
      ? (url = `https://api.themoviedb.org/3/movie/now_playing?api_key=6d2292cf6936acd6b878f58decae96c6&language=en-US&page=1`)
      : tvShowKind === `Upcomming`
      ? (url = `https://api.themoviedb.org/3/movie/upcoming?api_key=6d2292cf6936acd6b878f58decae96c6&language=en-US&page=1`)
      : (url = `https://api.themoviedb.org/3/movie/popular?api_key=6d2292cf6936acd6b878f58decae96c6&language=en-US&page=1`);
    (async () => {
      const response = await fetch(url);
      const data = await response.json();
      const results = data.results;

      setTvShowArray(results.slice(0,8));
      console.log(`results`,results);
    })();
  }, [tvShowKind]);




  //   -----------------------tv shows useEffect-----------------///
  useEffect(() => {
    let url;
    moviesKind === `Popular`
      ? (url = `https://api.themoviedb.org/3/tv/popular?api_key=6d2292cf6936acd6b878f58decae96c6&language=en-US&page=1`)
      : moviesKind === `Top rated`
      ? (url = `https://api.themoviedb.org/3/tv/top_rated?api_key=6d2292cf6936acd6b878f58decae96c6&language=en-US&page=1`)
      : moviesKind === `latest`
      ? (url = `https://api.themoviedb.org/3/tv/latest?api_key=6d2292cf6936acd6b878f58decae96c6&language=en-US&page=1`)
      : moviesKind === `Upcomming`
      ? (url = `https://api.themoviedb.org/3/tv/on_the_air?api_key=6d2292cf6936acd6b878f58decae96c6&language=en-US&page=1`)
      : (url = `https://api.themoviedb.org/3/tv/popular?api_key=6d2292cf6936acd6b878f58decae96c6&language=en-US&page=1`);
    (async () => {
      const response = await fetch(url);
      const data = await response.json();
      const results = data.results;
      setMoviesArray(results);
      console.log(results);
    })();
  }, [moviesKind]);
  //----------------------------------------------------------------------//
  return (
    <div>
    <FirstSectionCarousel />
    <TrendingSection />
    <div className={classes.movies}>
     <div className={classes.section_title}> <h2  style={{color:`white`}}>movies</h2></div>
      <MoviesContent cardClasses={classes.cardClasses} moviesArray={tvShowArray?tvShowArray:[1,1]} />
    </div>
    <div className={classes.movies}>
    <div className={classes.section_title}> <h2  style={{color:`white`}}>Tv shows</h2></div>
      <MoviesContent cardClasses={classes.cardClasses} moviesArray={moviesArray ? moviesArray:[1,1]} />
    </div>
    
    
    
    
    
    
    </div>
  )
}
