import { type ChangeEvent, type FormEvent, useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_THOUGHT } from '../../utils/mutations';
import { QUERY_THOUGHTS } from '../../utils/queries';

const ThoughtForm = () => {
  const [formState, setFormState] = useState({
    thoughtText: '',
    thoughtAuthor: '',
  });
  const [characterCount, setCharacterCount] = useState(0);

  // Set up our mutation with an option to handle errors
  // TODO: Add comment describing the functionality of the
  //useMutation second argument & refetchQueries property
  const [addThought, { error }] = useMutation
  //useMutation hook returns an array. 
  //The function at index 0 can be dispatched within the component
  // to trigger the mutation query. The object at index 1 
  //contains information, such as the error boolean, which we use in this application
    (ADD_THOUGHT, {//ADD_THOUGHT is the mutation query that we want to execute
      refetchQueries: [//refetchQueries property allows us to tell Apollo Client
      // to refetch the queries that are currently being executed
        QUERY_THOUGHTS,
        'getThoughts'
      ]
    });

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();

    // On form submit, perform mutation and pass in form data object as arguments
    // It is important that the object fields are match the defined parameters in `ADD_THOUGHT` mutation
    try {
      await addThought({
        variables: { ...formState },//variables object is used to pass in the form data object as arguments
      });

      // TODO: Add a comment describing why we no longer need to reload the page
      //We no longer need to reload the page because the 
      //refetchQueries property in the useMutation hook 
      //tells Apollo Client to refetch the queries that are currently being
      setCharacterCount(0);
      setFormState({
        thoughtText: '',
        thoughtAuthor: ''
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === 'thoughtText' && value.length <= 280) {
      setFormState({ ...formState, [name]: value });
      setCharacterCount(value.length);
    } else if (name !== 'thoughtText') {
      setFormState({ ...formState, [name]: value });
    }
  };

  return (
    <div>
      <h3>What's on your techy mind?</h3>

      <p
        className={`m-0 ${characterCount === 280 || error ? 'text-danger' : ''
          }`}
      >
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12">
          <textarea
            name="thoughtText"
            placeholder="Here's a new thought..."
            value={formState.thoughtText}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>
        <div className="col-12 col-lg-9">
          <input
            name="thoughtAuthor"
            placeholder="Add your name to get credit for the thought..."
            value={formState.thoughtAuthor}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-primary btn-block py-3" type="submit">
            Add Thought
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
      </form>
    </div>
  );
};

export default ThoughtForm;
