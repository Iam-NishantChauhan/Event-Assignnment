import React from "react";
import "../../style/exploreEvent.css";
import { CiLocationOn } from "react-icons/ci";
import { LuAlarmClock } from "react-icons/lu";
import Img1 from "../../Images/markus-stephen-griffiths-MtSF6U6gy2Q-unsplash.jpg";
import Img2 from "../../Images/oladimeji-odunsi-D-8HmOXDgxE-unsplash.jpg";
import Img3 from "../../Images/amin-zand-miralvand-6YwmVkjHhmo-unsplash.jpg";
import Scanner from '../../Images/image 131.png'

const ExploreEventPage = () => {
  return (
    <div className="exploreEventPage">
      {/* header */}
      <h1 className="exploreHeader">Explore Your Event </h1>

      {/* Event details */}
      <div className="eventDetails">
        <h1 className="eventName">Event Name</h1>
        <div className="eventTiming">
          <div className="eventCont1">
            <p>
              <CiLocationOn className="locationIcon" />
              Venue
            </p>
          </div>

          <div className="eventCont2">
            <p>
              <LuAlarmClock />
            </p>
            <h3>19/05/2024</h3>
            <h3>@20:00</h3>
          </div>
        </div>
        {/* description */}
        <div className="eventCont3">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec sapien nec nisl fermentum dapibus.
          </p>
        </div>
      </div>

      {/* artist section */}
      <div className="artistSection">
        <h1>Artist Lineup</h1>
        <div className="artistContainer">
          <img src={Img1} alt="img1" className="topImage" />
          <div className="bottomImages">
            <img src={Img2} alt="img2" />
            <img src={Img3} alt="img3" />
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="footerContainer">
        <img src={Scanner} alt="scanner" />
        <button>Join Waitlist</button>
      </div>
    </div>
  );
};

export default ExploreEventPage;