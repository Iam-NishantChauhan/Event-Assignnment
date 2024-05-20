import React, { useRef } from 'react';
import Slider from 'react-slick';
import '../../style/eventPage.css';
import Logo from '../../Images/Astrix Branding.png';
import EventBg from "../../Images/ASTRIX EVENTS.png";
import Frame1 from "../../Images/Frame 1261154670.png";
import Frame2 from "../../Images/Frame 1261154671.png";
import Frame3 from "../../Images/Frame 1261154672.png";
import Frame4 from "../../Images/Frame 1261154671 (1).png";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const EventMainPage = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    beforeChange: (current, next) => {
      if (next === sliderRef.current.props.children.length - 1) {
        setTimeout(() => {
          sliderRef.current.slickGoTo(0);
        }, 1000); 
      }
    }
  };

  return (
    <div className='eventMainPage'>
    <div className='header-logo'>
          <img src={Logo} 
            alt='logo' className='logo'/>
          <h1 className='heading'>Astrix.</h1>
        </div>
  
        <div className='inner-banner'>
          <img 
            src={EventBg}
            alt='event bg'
            className='eventBg'
          />
        </div> 

        <div className='slider'>
          <Slider {...settings} ref={sliderRef}>
            <div>
              <img src={Frame1} alt="frame1"/>
            </div>
            <div>
              <img src={Frame2} alt="frame2"/>
            </div>
            <div>
              <img src={Frame3} alt="frame3"/>
            </div>
            <div>
              <img src={Frame4} alt="frame4"/>
            </div>
          </Slider>
        </div>
    </div>
  );
}

export default EventMainPage;
