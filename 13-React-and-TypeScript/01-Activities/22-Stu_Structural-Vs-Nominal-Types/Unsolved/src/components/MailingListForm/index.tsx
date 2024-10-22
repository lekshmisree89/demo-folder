import { useState } from 'react';
import type MailingFormData from '../../utils/interfaces/MailingList';
import type {
  MailingEmail,
  MailingName,
} from '../../utils/interfaces/MailingList';
import './style.css';



function MailingListForm() {
  const [formData, setFormData] = useState<MailingFormData>({
    name: '',
    email: '' 

  });
  const validName = (name: string): MailingName  => {//
    //this function is a type guard that checks if the name is a string
    //and then returns it as a MailingName
    return name as MailingName;
  };

  const validEmail = (email: string): MailingEmail => {
    return email as MailingEmail;
      //this function is a type guard that checks if the email is a string 
    //and then returns it as a MailingEmail
  }
  
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert(`both name and email are needed to join the mailing list`);
      return;
    }
    alert(`Thanks for signing up ${formData.name}! 
We will reach out at ${formData.email}!`);
    setFormData({
      name: '' as MailingName,
      email: '' as MailingEmail,
    });
  };
  return (
    <form className='MailingListForm' onSubmit={handleSubmit}>
      <label htmlFor='mailing-name'>Name:</label>
      <input
        id='mailing-name'
        type='text'
        value={formData.name}
        onChange={(e) => setFormData({...formData , name:validName(e.target.value)})}
      //means that the value of the input is the value of the name property of the formData object
      //and when the input changes the value of the name property of the formData object is 
      //changed to the value of the input and name:validName(e.target.value) is a type guard that
      //checks if the value of the input is a string and then returns it as a MailingName.
      //
      />

      <label htmlFor='mailing-email'>Email:</label>
      <input
        id='mailing-email'
        type='text'
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email:validEmail( e.target.value )})}
      />
      <button>Join Mailing List</button>
    </form>
  );
}

export default MailingListForm;
