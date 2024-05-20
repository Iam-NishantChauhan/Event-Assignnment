import React from 'react';
import Logo from '../Images/Logo1.png';
import img1 from '../Images/Frame 1261154651.png';
import img2 from '../Images/Frame 1261154652.png';
import img3 from '../Images/Frame 1261154653.png';
import img4 from '../Images/Frame 1261154660.png';
import img5 from '../Images/Frame 1261154661.png';
import img6 from '../Images/Frame 1261154662.png';
import img7 from '../Images/Frame 1261154663.png';
import img8 from '../Images/Frame 1261154664.png';
import '../style/landingPage.css';

const LandingPage = () => {
  return (
    <div className='mainContainer'>
      <div className='header'>
        <img src={Logo} alt="Logo" />
        <h1>Astrix.</h1>
      </div>
      <div className='mainContent'>
        <p>
          <span > WE </span>
          <img src={img1} alt="img1" className="img1 inlineImage animatedImage1"/>
           <span className="animatedText1">ORGANIZE THE</span>
          <span >CONNECTION</span>
          <img src={img2} alt="img2" className=" inlineImage animatedImage2"/> 
          <img src={img3} alt="img3" className="inlineImage animatedImage3"/> 
          <span className='animatedText2'>BETWEEN</span>
          <img src={img4} alt="img4" className="inlineImage animatedImage4"/>
          <span>MUSIC </span>
          <span>ARTIST</span>
          <img src={img5} alt="img5" className="inlineImage animatedImage5"/>
          <span className="animatedText3">CULTURE</span>
          <img src={img6} alt="img6" className="inlineImage animatedImage6"/>
          <img src={img7} alt="img7" className="inlineImage animatedImage7"/>
          <span>ART</span>
          <img src={img8} alt="img8" className="img8 inlineImage "/>
          <span className="animatedText4">& COLLECTIONS</span>
        </p>
      </div>
    </div>
  );
}

export default LandingPage;