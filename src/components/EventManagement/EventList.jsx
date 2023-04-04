import React from 'react';
import events from '../../data/events.json';
import EventCard from './EventCard';

const EventList = () => {
  return (
    <div className="event-list">
      <nav className="nav">EVENT LIST</nav>
      <div className="event-card-cont">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventList;
