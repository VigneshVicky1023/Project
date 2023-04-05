import React, { useState } from 'react';
import moment from 'moment';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';

function Reminder() {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const reminder = {
      text,
      datetime: moment(`${date} ${time}`).format('YYYY-MM-DD HH:mm:ss'),
    };
    console.log(reminder); // For testing purposes only
  };

  return (
    <form onSubmit={handleSubmit}>
      <Form.Label>Remainder</Form.Label>
        <Form.Control type="text"
        placeholder="Enter reminder text"
        value={text}
        onChange={(event) => setText(event.target.value)} />
      <Form.Label>Date</Form.Label>
        <Form.Control type="date"
        placeholder="Enter reminder date"
        value={date}
        onChange={(event) => setDate(event.target.value)} />
      <Form.Label>Time</Form.Label>
        <Form.Control type="time"
        placeholder="Enter reminder time"
        value={time}
        onChange={(event) => setTime(event.target.value)} />
        <center style={{paddingTop:"2%"}}>
        <Button variant="success">Submit</Button>
        </center>
    </form>
  );
}

export default Reminder;
