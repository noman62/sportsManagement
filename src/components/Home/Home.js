import React, { useState } from 'react';
import './Home.css';

const Home = ({ message }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      {show && (
        <div className="alert-container">
          <div className="alert-content">
            <span className="close-btn" onClick={handleClose}>
              &times;
            </span>
            <h1>please login</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;