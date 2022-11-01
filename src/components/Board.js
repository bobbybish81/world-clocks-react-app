import { Clock } from './Clock';
import { DateTime } from 'luxon';
import './Board.css';

export const Board = ({ date, time }) => {

const timezones = ['Europe/London', 'Europe/Paris', 'Europe/Stockholm', 'Europe/Moscow', 'Asia/Tokyo','America/Los_Angeles', 'America/New_York', 'America/Sao_Paulo'];
const format = {month: 'long', day: 'numeric', year: 'numeric'};

return <div className='board-container'>
{timezones.map(timezone => 
  <Clock 
      date={date.toLocaleString(format)}
      time={time.setZone(timezone).toLocaleString(DateTime.TIME_WITH_SECONDS)}
      city={timezone.split('/')[1].replace(/_/g, ' ')}
  />
)} </div>

};
