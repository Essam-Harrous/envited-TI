import React from "react";
import { Link } from "react-router-dom";
import "../styles/landingPage.css";

const LandingPage = () => {
  return (
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-12 col-md-6  order-2 order-md-1">
          <div className="d-flex justify-content-center align-items-center h-100">
            <img width="75%" src="/assets/images/Landing page image.svg" />
          </div>
          <Link to="/create" className="d-flex d-md-none">
            <button className="btn mx-auto CTA-button">
              🎉 Create my event
            </button>
          </Link>
        </div>
        <div className="col-12 col-md-6  order-1 order-md-2">
          <div className="d-flex  flex-column justify-content-center CTA-Con align-items-end h-100">
            <div>
              <h1 className="CTA-title">
                Imagine if <span className="CTA-highlight">Snapchat</span> had
                events.
              </h1>
              <p className="CTA-paragraph">
                Easily host and share events with your friends across any social
                media.
              </p>
            </div>
            <Link to="/create" className="d-none d-md-block">
              <button className="btn CTA-button">🎉 Create my event</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
