import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import classes from "./Reviews.module.css";
const Reviews = (props) => {
    const [reviwes, setReviews] = useState([]);
    const [sureAppear, setSureAppear] = useState([]);
    const [maybeAppear, setMaybeAppear] = useState([]);
    useEffect(() => {
        (async () => {
            const response = await fetch(
                `https://api.themoviedb.org/3/${props.kind}/${props.id}/reviews?api_key=6d2292cf6936acd6b878f58decae96c6&language=en-US&page=1`
                );
                const data = await response.json();
                const results = data.results;
      // console.log(data , results);
      //----------------------first part that will always appear
      const first = results
      ? results.map((e, i) => {
          return e.content.split(` `).splice(0, 50).join(` `);
        })
        : [];
        setSureAppear(first);
        //-----------------------second part that wil appear conditionally
        const second = results
        ? results.map((e, i) => {
            return e.content
              .split(` `)
              .splice(50, e.content.split(` `).length - 1)
              .join(` `);
          })
          : [];
// setMaybeAppear
          setMaybeAppear(second);
          
      //--------------------
      
      //---------------
      // console.log(first)
      setReviews(results);
    })();
}, [props.id , props.kind]);

const [ownReviewValue,setOwnReviewValue] =useState(``)
const formChangeHandler=(e)=>{
    console.log(e.target.value)
    setOwnReviewValue(e.target.value)
}
const submitReviewHandler = (e)=>{
    e.preventDefault();
    console.log(e)
    setSureAppear(prev=>[...prev,ownReviewValue])

    setReviews(prev=>[...prev ,{content:ownReviewValue} ])

}

  return (
    <>
      <div className={classes.hole_container}>
        <section className={classes.title}>
          <p> &#11088; Movie Reviews</p>
        </section>
        {reviwes
          ? reviwes.map((review, i) => (
              <ReviewCard
              author={review.author}
                key={review.id?review.id:1}
                appear={sureAppear[i]}
                maybe={maybeAppear[i]}
              />
            ))
          : []}
        <section className={classes.own_review}>
          <form onSubmit={submitReviewHandler}>
            <label className={classes.form_label}>Write your own review</label>
            <textarea
            value={ownReviewValue}
            onChange={formChangeHandler}
            rows="8"
              className={classes.form_textarea}
              type={`text`}
              placeholder={`Type your reiew`}
            />
            <button className={classes.form_button} type="submit">
              submit
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default Reviews;
