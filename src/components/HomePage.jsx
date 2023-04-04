import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const routeHandler = (type) => {
    navigate(`/${type}`);
  };

  return (
    <div className="homepage">
      <nav className="nav">PAYMONK ASSIGNMENT</nav>
      <div className="home-cont">
        <div onClick={() => routeHandler('event')}>
          <h1>EVENT MANAGEMENT APP</h1>
        </div>
        <div onClick={() => routeHandler('user')}>
          <h1>USER MANAGEMENT APP</h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
