import { useState } from 'react';


import Card from './shared/Card';
import Button from './shared/Button'; 

function FeedbackForm() {
    const [text,setText]=useState('')

const handleChange=(e)=>{
    setText(e.target.value)
}

  return (
    <Card>
      <form>
        <h2>How Would you rate our services?</h2>
        {/* compt rating select */}

        <div className='input-group'>
            <input type="text" placeholder='write a review'  value={text} onChange={handleChange}/>
            <Button>Send</Button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
