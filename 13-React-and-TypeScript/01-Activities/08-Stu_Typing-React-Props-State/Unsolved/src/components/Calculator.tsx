// TODO: For the Calculator object below, 
//create a state variable `calcState` containing the fields `total` and `previousTotal`.
// Update `total` and `previousTotal` accordingly in the "Add" button handler below.

//Create a state variable `value` of type number and initialize it to 0.
// Update the value in the input field accordingly.
// Update the value in the "Add" button handler below.
// Update the total in the "Add" button handler below.
// Update the previous total in the "Add" button handler below.
import { useState } from "react";
// The Calculator component should render an input field, a button, and two paragraphs.
type CalculatorState = {
  total: number;
  previousTotal: number;
}


export default function Calculator () {
  const [calcState, setCalcState] = useState<CalculatorState>({
  // the state variable calcState is created with the fields total and previousTotal

    total: 0,
    previousTotal: 0,
  });
  const [value, setValue] = useState<number>(0);// the value will be initialized to 0

  const handleAddClick = () => {//this function will be called when the add button is clicked
    setCalcState({// the state variable calcState will be updated
      //update the total and previousTotal fields
      //clear the value field
      ...calcState,// the previous state will be copied
      total: calcState.total + value,// the total will be incremented by the value
      previousTotal: calcState.total,
     
    });
    setValue(0);// the value will be set to 0
  };

  return (
    <div>
      <h2>Simple Calculator</h2>
      <p>
        <input
          type="text"
          id="value"
          name="value"
          onChange={(event) => { setValue(Number(event.target.value)); }}
          value={value}
        />
      </p>
      <button className="btn btn-primary" type="button" onClick={handleAddClick}> Add </button>
      <p className="card-text">Total: {calcState.total}</p>
      <p className="card-text">Previous Total: {calcState.previousTotal}</p>
      </div>
  );
}
