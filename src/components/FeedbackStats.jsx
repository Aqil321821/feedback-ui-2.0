import { TbAlarmAverage } from 'react-icons/tb';

function FeedbackStats({ feedback }) {
  //avg calculator

  let avg =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  avg = avg.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className='feedback-stats'>
      <h4>Total Reviews : {feedback.length} </h4>
      <h4>Averafe Ratings : {isNaN(avg) ? 0 : avg}</h4>
    </div>
  );
}

export default FeedbackStats;
