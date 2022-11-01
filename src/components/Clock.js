import './Clock.css';

export const Clock = ({ date, time, city }) => {
  
  return <>
  <div className="clock-container" data-testid={`${city}-clock`}>
      <p className="date" data-testid={`${city}-date`}>{date}</p>
      <h2 className="time" data-testid={`${city}-time`}>{time}</h2>
      <p className="city" data-testid={city}>{city}</p>
  </div>
  </>

}
