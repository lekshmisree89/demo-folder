// Define a base interface for shapes
interface Shape {
  calculateArea: () => number;
  calculatePerimeter: () => number;
}

// TODO: Define a Circle class

class Circle implements Shape {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }
  calculateArea(): number {
    return Math.PI * (this.radius**2);
  }

  calculatePerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}
 
// TODO: Define a Rectangle class
class Rectangle implements Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }

  calculatePerimeter(): number {
    return 2 * (this.width + this.height);
  }
}
// TODO: Define a Triangle class

class Triangle implements Shape {
  private base: number;
  private height: number;
  private sideA: number;
  private sideB: number;
  private sideC: number;

  constructor(base: number, height: number, sideA: number, sideB: number, sideC: number) {
    this.base = base;
    this.height = height;
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  calculateArea(): number {
    return (this.base * this.height) / 2;
  }

  calculatePerimeter(): number {
    return this.sideA + this.sideB + this.sideC;
  }
}


// Calculates the total area of an array of shapes
function calculateTotalArea(shapes: Shape[]): number {
  let totalArea = 0;
  for (const shape of shapes) {
    totalArea += shape.calculateArea();
  }
  return totalArea;
}

// Calculates the total perimeter of an array of shapes
function calculateTotalPerimeter(shapes: Shape[]): number {
  let totalPerimeter = 0;
  for (const shape of shapes) {
    totalPerimeter += shape.calculatePerimeter();
  }
  return totalPerimeter;
}

// TODO: Create instances of the Circle, Rectangle, and Triangle classes

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
const triangle = new Triangle(3, 4, 3, 4, 5);
console.log(circle.calculateArea());
console.log(rectangle);
console.log(triangle);


// TODO: Create an array to hold all of the shapes (Circle, Rectangle, and Triangle)

const shapes:Shape[]=[circle, rectangle, triangle];
// TODO: Display the total area of all shapes
const totalArea =calculateTotalArea(shapes);
 console.log(totalArea);
// TODO: Display the total perimeter of all shapes
const totalPerimeter = calculateTotalPerimeter(shapes);
console.log(totalPerimeter);
