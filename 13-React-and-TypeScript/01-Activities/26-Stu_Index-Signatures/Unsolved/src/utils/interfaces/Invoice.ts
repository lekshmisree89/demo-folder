import type Charge from './Charge';

//TODO: What keys and values should we expect in this `Invoice` type?
interface Invoice {
  [key: string]: Charge;//key is a string, value is a Charge
//index signature is a way to define 
//an object type where you don't
// know the exact number of properties 
//or the property names, 
//but you do know the property type.
}

export default Invoice;


//const invoice: Invoice = {
//  0: {
//    id: 'charge-0',
//    amount: 50,
//    description: 'Dinner',
//  },
//  1: {

//    amount: 100,
//    description: 'Pizza',
//  },