import "./Dashboard.css";
import { events } from "../config";

const Dashboard = () => {
  const renderEventCards = (status) => {
    const filteredEvents = events.filter((event) => event.status === status);

    return filteredEvents.map((event) => (
      <div className="event-card" key={event.id}>
        <h3>{event.name}</h3>
        <p>Date: {event.date} | Time: {event.time}</p>
        <p>Venue: {event.venue}</p>
        <p>Fee: {event.fee}</p>
        <p>Organizing Club: {event.organizingClub}</p>
        <p>Description: {event.description}</p>
      </div>
    ));
  };

  return (
    <div className="dashboard">
      <h1 className="dashboard-heading">Dashboard</h1>

      <div className="dashboard-section">
        <h2>Ongoing Events</h2>
        <div className="event-container">{renderEventCards("ongoing")}</div>
      </div>

      <div className="dashboard-section">
        <h2>Upcoming Events</h2>
        <div className="event-container">{renderEventCards("upcoming")}</div>
      </div>

      <div className="dashboard-section">
        <h2>Ended Events</h2>
        <div className="event-container">{renderEventCards("ended")}</div>
      </div>
    </div>
  );
};

export default Dashboard;
