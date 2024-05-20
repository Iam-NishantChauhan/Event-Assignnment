import React from 'react';
import '../../style/eventInfoStrip.css';
import { FaAsterisk } from 'react-icons/fa';

const EventInfoStrip = () => {
  return (
    <div className='eventInfoStrip'>
      <div className='verticalStrip'>
        <h1>Event : Oasis Bus Tour , JLN Stadium , Delhi</h1>
        <p><FaAsterisk /></p>
        <h1>Collection Live : Meta Lives , Eras Tour </h1>
      </div>
    </div>
  );
};

export default EventInfoStrip;