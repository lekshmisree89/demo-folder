interface Charge {
  // TODO: What type is the `billed` key being set as?
  // The billed key is being set as a  union 
  // of string literals 'fixed' and 'hourly'

  billed: 'fixed' | 'hourly';
  // TODO: Why are these keys optional?
  hours?: number;//optional key because it is not always needed
  
  hourlyRate?: number;//
  price: number;//  required key because it is always needed
}

export default Charge;
