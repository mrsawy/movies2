import React from "react";
import classes from "./SearchBar.module.css";

const SearchBar = () => {
  
    const submitHandler =(e)=>{
        e.preventDefault();
        console.log(e.target)
    }

  return (
    <>
      <form onSubmit={submitHandler} className={classes[`search-form`]}>
        <input  placeholder="Search for a movie,Tv-show,person..." className={classes.main}></input>
        <button  className={classes[`form-button`]} type="submit">
          Search
        </button>
      </form>
    </>
  );
};

export default SearchBar;
