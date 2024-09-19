import { Link } from 'react-router-dom';
import '../components/Home.css';
export default function HomePage(){
    return (
        <div className="home-container">
          <header className="hero">
            <div className="overlay">
              <h1 className="hero-title">Welcome to the Event</h1>
              <p className="hero-subtitle">Join us for an unforgettable experience</p>
              <Link to='/events' className="cta-btn">Events</Link>
            </div>
          </header>
          <section className="event-details">
            <h2>Event Highlights</h2>
            <p>Save the date for a special occasion filled with fun, laughter, and great memories.</p>
          </section>
        </div>
      );
}