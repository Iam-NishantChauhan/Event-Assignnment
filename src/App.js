import React from "react";
import LandingPage from "./Components/LandingPage";
import EventMainPage from "./Components/EventLandingPage/EventMainPage";
import EventInfoStrip from "./Components/EventLandingPage/EventInfoStrip";
import ExploreEventPage from "./Components/EventLandingPage/ExploreEventPage";
import './App.css';

const App = () => {
  return (
    <>
      <LandingPage />
      <div className="main-page">
      <EventMainPage />
      <EventInfoStrip />
      <ExploreEventPage />
      </div>
    </>
  );
};

export default App;