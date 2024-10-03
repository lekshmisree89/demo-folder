import ZooAnimals from '../interfaces/ZooAnimals';

class Animal implements ZooAnimals {

  species: string;
  hungry: boolean;
  amount: number;
  weight: number;

  constructor(species: string, hungry: boolean,
    amount: number, weight: number) 
    {
    this.species = species;
    this.hungry = hungry;
    this.amount = amount;
    this.weight = weight;
  }
 
createAnimal():Animal[]{
    return[
        new Animal('Foxes', true, 3, 10),
        new Animal('Tigers', false, 220, 5),
        new Animal('Zebras', true, 300, 15),
    ];
    
}
}


  export default Animal;
