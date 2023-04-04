import React from 'react';
import { useNavigate } from 'react-router-dom';

const EventCard = ({ event }) => {
  const navigate = useNavigate();
  const registerHandler = () => {
    localStorage.setItem('event', JSON.stringify(event));
    navigate(`/event/register/${event.id}`);
  };

  return (
    <div className="event-card">
      <h4>{event.title}</h4>
      <p>{event.description.substr(0, 70)}. . .</p>
      <p>{event.date}</p>
      <button onClick={registerHandler}>REGISTER</button>
    </div>
  );
};

export default EventCard;
