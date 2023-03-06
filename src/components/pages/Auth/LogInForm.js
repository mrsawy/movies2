import React, { useState, useRef } from "react";
import classes from "./LoginForm.module.css";
import googleImage from "./../../../images/google.png";
import facebookImage from "./../../../images/facebook.png";
import twitterImage from "./../../../images/twitter.png";
import { CSSTransition, Transition } from "react-transition-group";

export default function LogInForm() {
  const [authState, setAuthState] = useState(`Log in`);
  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);
  return (
    <CSSTransition
     classNames={{
          enter: classes.formenter,
          enterActive: classes.formenterActive,
          enterDone: classes.formenterDone,
          exit: classes.formexit,
          exitActive: classes.formexitActive,
          exitDone: classes.formexitDone,
        }}
        timeout={{
          enter: 500,
          exit: 500,
        }}
        in={!inProp}
    >
    <form action="" className={`${classes.form_container} ${classes.form}`}>
      <div className={classes.center_container}>
        <div className={classes.login_signup}>
          <p
            onClick={() => {
              setAuthState(`Log in`);
              setInProp(false);
            }}
          >
            <span className={`${authState === "Log in" && classes.chosen}`}>
              log in
            </span>
          </p>
          <p
            onClick={() => {
              setAuthState(`Sign up`);
              setInProp(true);
            }}
          >
            <span className={`${authState === "Sign up" && classes.chosen}`}>
              sign up
            </span>
          </p>
        </div>
      </div>
      {/**          first and last name        */}

      <CSSTransition
        classNames={{
          enter: classes.enter,
          enterActive: classes.enterActive,
          enterDone: classes.enterDone,
          exit: classes.exit,
          exitActive: classes.exitActive,
          exitDone: classes.exitDone,
        }}
        nodeRef={nodeRef}
        timeout={{
          enter: 500,
          exit: 500,
        }}
        unmountOnExit
        in={inProp}
      >
        <section ref={nodeRef} className={classes.name_section}>
          <div class={classes.name_container}>
            <input
              type="name"
              class={classes.name_input}
              placeholder="First Name"
            />
            <hr className={classes.hrPink} />
          </div>
          <div className={classes.name_container}>
            <input
              type="name"
              class={classes.name_input}
              placeholder="Lasl Name"
            />
            <hr className={classes.hrPink} />
          </div>
        </section>
      </CSSTransition>
      {/* <Transition nodeRef={nodeRef} in={inProp} timeout={4000} unmountOnExit>
        {(state) => {
          console.log(state);

          return <p></p>;
        }}
      </Transition> */}
      {/* <CSSTransition
        // nodeRef={nodeRef}
        in={false}
        timeout={200}
        // classNames={{
        //   enter: classes.enter,
        //   enterActive: classes.enterActive,
        //   enterDone: classes.enterDone,
        //   exit: classes.exit,
        //   exitActive: classes.exitActive,
        //   exitDone: classes.exitDone,
        // }}
      >

        {/* <section>
          <div class={classes.name_container}>
            <input
              type="name"
              class={classes.name_input}
              placeholder="First Name"
            />
            <hr className={classes.hrPink} />
          </div>
          <div class={classes.name_container}>
            <input
              type="name"
              class={classes.name_input}
              placeholder="Lasl Name"
            />
            <hr className={classes.hrPink} />
          </div>
        </section> */}
      {/* </CSSTransition> */}

      {/* {authState === `Sign up` && 1} */}

      {/**          ---------------------------------------------         */}

      <div>
        <input
          type="email"
          className={classes.email_input}
          placeholder="Enter your email or user name"
        />
        <hr />
      </div>
      <div>
        <input
          type="password"
          className={classes.password_input}
          placeholder="PASSWORD"
        />
        <hr />
        <div className={classes.forget_password_container}>
          {/**          forgot your Password question         */}

          
          {authState === `Log in` && <p>forgot your password ?</p>}{" "}
          {/**          ------------------         */}
        </div>
      </div>

      {/**          PASSWORD confirmation         */}

      <CSSTransition
        classNames={{
          enter: classes.enter,
          enterActive: classes.enterActive,
          enterDone: classes.enterDone,
          exit: classes.exit,
          exitActive: classes.exitActive,
          exitDone: classes.exitDone,
        }}
        // nodeRef={nodeRef}
        timeout={{
          enter: 500,
          exit: 500,
        }}
        unmountOnExit
        in={inProp}
      >
        <div 
        // style={{width:0}}
        >
          <input
            type="password"
            className={classes.password_input}
            placeholder="CONFIRM PASSWORD"
          />
          <hr />
        </div>
      </CSSTransition>
      {/* {authState === `Sign up` && (
        
      )} */}
      {/**          --------------------------        */}

      <div className={classes.center_container}>
        <button type="submit" className={classes.form_button}>
          {authState}
        </button>
      </div>
      <div className={classes.center_container}>
        <p className={classes.or}>or</p>
      </div>
      <div className={classes.social_media}>
        <div className={classes.social_media_img_container}>
          <img
            className={classes.social_media_img}
            src={facebookImage}
            alt=""
          ></img>
        </div>
        <div className={classes.social_media_img_container}>
          <img
            className={classes.social_media_img}
            src={googleImage}
            alt=""
          ></img>
        </div>
        <div className={classes.social_media_img_container}>
          <img className={classes.twitter_img} src={twitterImage} alt=""></img>
        </div>
      </div>
    </form>
    </CSSTransition>
  );
}
