import { useState } from 'react';
import './App.css';

function App() {

  const [text, setText] = useState('');

  // TODO: What type of event are we handling here?
  
//change event is a type of event that occurs when the value of an element has been changed to
//the user can change the value of an element by typing in a new value or selecting a
// value from a list of options
//this is a change event  from a html input element.

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const isValid = (input: string) => {
    // Check if input is alphanumeric lowercase and also allow underscore
    const regex = /^[a-z0-9_]*$/;
    // use regex.test() to check if input is valid and input.length to check if it is at least 5 characters long
    return regex.test(input) && input.length >= 5;
  }

  // TODO: What type of event are we handling here?
  //this is a mouse event that occurs when the mouse pointer is moved onto an 
// html  element
  const handleMouseEnter = (e: React.MouseEvent<HTMLFormElement>) => {
    // TODO: How does this work?
    //this function checks if the shift key
    //is pressed when the mouse enters the form
    if (e.shiftKey) {
      alert("Mouse Entered Form with Shift Key Pressed");
    }
  }

  // TODO: What type of event are we handling here?
  //this is a form event that occurs when a form is submitted and 
  //the form is submitted when the user clicks a submit button
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form Submitted with valid input!");
    setText('');
  }

  return (
    <div className="App">
      <h1>Typing DOM Events</h1>
      {/* TODO: What type of events are we handling here? */}
      //on submit event and on mouse enter event 
      //on submit event is a form event that occurs when a form is submitted and
      //the form is submitted when the user clicks a submit button
      //on mouse enter event is a mouse event that occurs when the mouse pointer is moved onto an
      //html element
    
      <form onSubmit={handleSubmit} onMouseEnter={handleMouseEnter}>
        {/* TODO: What type of event are we handling here? */}
        //this is a change event from a html input element
        //change event is a type of event that occurs when the value of an element has been changed to
        <input type="text" value={text} onChange={handleChange} />
        <p>Text Input Valid: <span style={isValid(text) ? { color: "green" } : { color: "red" }}>{isValid(text) ? "True" : "False"}</span></p>
        {isValid(text) && <button>Submit</button>}
      </form>
    </div>
  )
}

export default App;
