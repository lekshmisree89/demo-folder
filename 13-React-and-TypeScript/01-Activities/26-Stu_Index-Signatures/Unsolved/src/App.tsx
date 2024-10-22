import { useState } from 'react';
import './App.css';
import InvoiceForm from './components/InvoiceForm';
import ChargeList from './components/ChargeList';
import type Invoice from './utils/interfaces/Invoice';
import type Charge from './utils/interfaces/Charge';

function App() {
  //TODO: What are we typing `invoice` as here?
  //We are typing invoice as an object of type Invoice
  const [invoice, setInvoice] = useState<Invoice>({});

  const addItem = (title: string, charge: Charge) => {
    //TODO: What is this `if` statement doing?
    //This if statement is checking if the title 
    //already exists in the invoice object
    if (invoice[title]) {//if title already exists
      //TODO: What does this `alert` do?
      //This alert informs the user that the entry already exists
      alert(`entry already exists for ${title}, please use unique keys`);
      return;
    }
    setInvoice({
      //TODO: What is this spread operator doing?
      //This spread operator is copying the existing invoice object

      //TODO: What is `title` and `charge` being set as?
      //title is the key and charge is the value
      ...invoice,
      [title]: charge,
    });
  };
  return (
    <>
      <h1>Invoice Generator</h1>
      <InvoiceForm addItem={addItem} />
      <ChargeList invoice={invoice} />
    </>
  );
}

export default App;
