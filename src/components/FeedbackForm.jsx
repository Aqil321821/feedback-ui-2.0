import { useState, useContext, useEffect } from 'react';

import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [msg, setMsg] = useState('');
  const [rating, setRating] = useState(10);

  const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      // console.log("object");
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleChange = (e) => {
    const inputValue = e.target.value; // input value directly le rahe hain
    setText(inputValue);

    if (inputValue === '') {
      setBtnDisabled(true);
      setMsg(null);
    } else if (inputValue !== '' && inputValue.trim().length < 10) {
      setBtnDisabled(true);
      setMsg('Review must be at least 10 characters');
    } else {
      setMsg('Thanks For Your review , hit send button');
      setBtnDisabled(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
        setBtnDisabled(true);
        setMsg('Thanks for your updated Review');
        // Message ko 3 seconds ke baad clear karne ke liye setTimeout ka use
        setTimeout(() => {
          setMsg('');
        }, 800);
      } else {
        addFeedback(newFeedback);
        setTimeout(() => {
          setMsg('');
        }, 800);
      }

      setText('');
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How Would you rate our services?</h2>
        {/* compt rating select */}
        <RatingSelect select={(rating) => setRating(rating)} />

        <div className='input-group'>
          <input type='text' placeholder='write a review' value={text} onChange={handleChange} />
          <Button isDisabled={btnDisabled}>Send</Button>
        </div>
        {msg && <div className='message'>{msg}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
