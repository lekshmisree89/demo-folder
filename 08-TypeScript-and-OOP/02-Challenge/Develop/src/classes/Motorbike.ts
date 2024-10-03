// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
  // TODO: Declare properties of the Motorbike class
  private vin: string;
  private color: string;
  private make: string;
  private model: string;
  private year: number;
  private weight: number;
  private topSpeed: number;
  private wheels: Wheel[];
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, and wheels
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[])

  // TODO: Create a constructor that accepts the properties of the Motorbike class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
    super();

    // Initialize the properties of the Motorbike class
    this.wheels = wheels.length === 2 ? wheels : [new Wheel(), new Wheel()]; 
    
  }

    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Motorbike class
    // TODO: The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not

  // TODO: Implement the wheelie method
    // TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"
// Implement the wheelie method
wheelie(): void {
  console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
}
  // TODO: Override the printDetails method from the Vehicle class

  
  override printDetails(): void {
    // Call the printDetails method of the parent class
    super.printDetails();
  // TODO: The method should call the printDetails method of the parent class
  // TODO: The method should log the details of the Motorbike
  console.log(`Motorbike Details:`);
  console.log(`VIN: ${this.vin}`);
  console.log(`Make: ${this.make}`);
  console.log(`Model: ${this.model}`);
  console.log(`Year: ${this.year}`);
  console.log(`Weight: ${this.weight} lbs`);
  console.log(`Top Speed: ${this.topSpeed} mph`);
  console.log(`Color: ${this.color}`);
  console.log(`Wheels: ${this.wheels.length} wheels with diameter ${this.wheels[0].getDiameter()} inches`);
  console.log(`Tire Brand: ${this.wheels[0].getTireBrand()}`); // Assuming all wheels have the same brand
  console.log();
}
  // TODO: The details should include the VIN, make, 
  //model, year, weight, top speed, color, and wheels
}

// Export the Motorbike class as the default export
export default Motorbike;
