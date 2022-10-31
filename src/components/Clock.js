import './Clock.css';

export const Clock = ({ date, time, city }) => {
  
  return <>
  <div className="clock-container">
      <p className="date">{date}</p>
      <h2 className="time">{time}</h2>
      <p className="city">{city}</p>
  </div>
  </>

}
