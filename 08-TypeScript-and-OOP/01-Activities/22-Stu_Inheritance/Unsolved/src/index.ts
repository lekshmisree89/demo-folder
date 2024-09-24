// Define a Shape class
class Shape {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  // Methods to calculate the area and perimeter
  calculateArea(): number {
    return 0;
  }

  calculatePerimeter(): number {
    return 0;
  }

  // Method to display the shape information
  displayInfo(): void {
    console.log(`---------- ${this.name} ----------`);
    console.log(`Area: ${this.calculateArea()}`);
    console.log(`Perimeter: ${this.calculatePerimeter()}`);
    console.log();
  }
}

// Define a Circle class

class Circle extends Shape {
  //what prpoerty will exist?
  protected radius: number;

  constructor(radius: number) {
    super('Circle');
    this.radius = radius;
  }

  override calculateArea(): number {
    return Math.PI * (this.radius**2);
  }

  override calculatePerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

// Define a Rectangle class
class Rectangle extends Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    super('Rectangle');
    this.width = width;
    this.height = height;
  }

  override calculateArea(): number {
    return this.width * this.height;
  }
  override calculatePerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

// Define a Triangle class
class Triangle extends Shape {
  private base: number;
  private height: number;
  private sideA: number;
  private sideB: number;
  private sideC: number;

constructor(base: number, height: number, sideA: number, sideB: number, sideC: number) {
  super('Triangle');
  this.base = base;
  this.height = height;
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

override calculateArea(): number {
  return (this.base * this.height) / 2;
}

override calculatePerimeter(): number {
  return this.sideA + this.sideB + this.sideC;
}
}


// Create instances of each shape
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
const triangle = new Triangle(3, 4, 3, 4, 5);

// Call the displayInfo method for each shape
circle.displayInfo();
rectangle.displayInfo();
triangle.displayInfo();