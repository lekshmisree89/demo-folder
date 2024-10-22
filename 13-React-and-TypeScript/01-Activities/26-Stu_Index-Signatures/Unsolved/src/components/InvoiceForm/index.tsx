import { useState } from 'react';
import './style.css';
import type Charge from '../../utils/interfaces/Charge';
type Props = {
  addItem: (title: string, charge: Charge) => void;
};
//TODO: What is the purpose of this component?
//The purpose of this component is to create a form
//that allows the user to input a title, charge type,
function InvoiceForm({ addItem }: Props) {//addItem is a function that 
  //takes a title and a charge
  const [formData, setFormData] = useState({
    title: '',
    charge: {
      billed: 'fixed',
      hours: '',
      rate: '',
    },
  });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!formData.title) {
      alert('please enter a name for this charge');
      return;
    }
    //TODO: why are we asserting this object is a `Charge`? 
    //What would happen if we did not assert the type?
    //We are asserting this object is a Charge 
    //because we are passing it to the addItem function
    //and the addItem function expects a Charge object
    //If we did not assert the type, we would get an error
    //because the addItem function expects a Charge object
    const chargeData = {
      billed: formData.charge.billed,
      price: parseFloat(formData.charge.rate) || 0,
    } as Charge;
    //
    //TODO: What purpose does this `if` statement serve?
    //This if statement is checking if the charge is billed hourly
    //and if it is, it calculates the price based on the hourly rate

    if (chargeData.billed === 'hourly') {
      chargeData.hours = parseInt(formData.charge.hours);//converts string to number
      chargeData.hourlyRate = chargeData.price;//hourly rate is the price
      chargeData.price = chargeData.hours * chargeData.hourlyRate;//  price is hours * hourly rate
    }
    //TODO: Where is this function coming from?
    //This function is coming from the
    //App component where it is passed as a prop
    //to the InvoiceForm component
    addItem(formData.title, chargeData);
    setFormData({//resets the form
      title: '',
      charge: {
        billed: 'fixed',
        hours: '',
        rate: '',
      },
    });
  };

  return (
    <form className='InvoiceForm' onSubmit={handleSubmit}>
      <label htmlFor='item'>Item:</label>
      <input
        id='item'
        type='text'
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <label htmlFor='billed'>Billed:</label>
      <select
        id='billed'
        value={formData.charge.billed}
        onChange={(e) =>
          setFormData({
            ...formData,
            charge: {
              ...formData.charge,
              billed: e.target.value,
            },
          })
        }
      >
        <option value='fixed'>Fixed Cost</option>
        <option value='hourly'>Hourly Rate</option>
      </select>
      {formData.charge.billed === 'hourly' ? (
        <>
          <label htmlFor='hours'>Hours:</label>
          <input
            id='hours'
            type='number'
            value={formData.charge.hours}
            onChange={(e) =>
              setFormData({
                ...formData,
                charge: {
                  ...formData.charge,
                  hours: e.target.value,
                },
              })
            }
          />
        </>
      ) : null}
      <label htmlFor='rate'>Rate:</label>
      <input
        id='rate'
        type='number'
        value={formData.charge.rate}
        onChange={(e) =>
          setFormData({
            ...formData,
            charge: {
              ...formData.charge,
              rate: e.target.value,
            },
          })
        }
      />
      <button>Add Charge</button>
    </form>
  );
}

export default InvoiceForm;
