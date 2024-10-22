// TODO: Add a comment explaining what is
// being passed to this "child" component as props
// This component is being passed the count,
// handleIncrement, and handleDecrement functions as props

function CardBody(props) {
  //why is the count value being passed as a prop?
  //the count value is being passed as a prop so that the CardBody 
  //component can display the count value
  return (
    <div className="card-body">
      <p className="card-text">Click Count: {props.count}</p>//display the count value
     {/* {//{add the handleIncrement and handleDecrement functions to the buttons}}
      */}
      <button 
        type="button"
        className="btn btn-primary"
        onClick={props.handleIncrement}//when the button is clicked, 
        //call the handleIncrement function

      >
        Increment
      </button>{' '}
      <button
        type="button"
        className="btn btn-danger"
        onClick={props.handleDecrement}
      >
        Decrement
      </button>
    </div>
  );
}

export default CardBody;
