import { useState } from 'react';
import CardBody from './CardBody';

// TODO: Add a comment explaining what export default does
export default function Counter() {//export the Counter function
  // useState is a hook that allows you to have state variables 
  //in functional components
  // TODO: Add a comment that explains how the useState hook works
  //useState returns an array with two elements: the current state value and a 
  //function that lets you update it
  const [count, setCount] = useState(0);//initialize the count value to 0
  

  // TODO: Explain what is happening with this click handler
  // Increment the count by 1
  //when the increment button is clicked
  //  setCount is a function that takes a new value and updates the count
  //react will re-render the component with the new count value
  const handleIncrement = () => {
    setCount((count + 1));
  };

  // TODO: Explain what is happening with this click handler
  // If the count is greater than 0, decrement the count
  //by 1 when the decrement button is clicked
  //  setCount is a function that takes a new value and updates the count
  //react will re-render the component with the new count value
  const handleDecrement = () => {
    if (count > 0) {
      setCount((count - 1));
    }
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      {/* TODO: Add a comment that explains what 
      props are getting passed to CardBody */}
      {/* //props getting passed to CardBody : count, 
      handleIncrement, and handleDecrement */}
      <CardBody
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
}
