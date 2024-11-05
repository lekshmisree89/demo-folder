// Countdown.tsx
//mport React from 'react';

interface CountdownProps {
  guesses: number;
  isCorrect?: boolean;
  hasGuessed?: boolean;

}

const Countdown= ({ guesses, isCorrect, hasGuessed }: CountdownProps) => {
  return (
    <div data-cy="countdown">
        Guesses Remaining: {guesses}
       
        {hasGuessed && (
            <h3 data-cy="toast">{isCorrect ? 
            <span className="toast-sucess">Correct!</span> 
        ):(
            <span className="toast-error">Incorrect!</span>
        )}

        </h3>
    </div>
    );
};


    
//data-cy="toast" is the data-cy attribute for the toast div element
//data-cy="countdown" is the data-cy attribute for the countdown p element

export default Countdown;