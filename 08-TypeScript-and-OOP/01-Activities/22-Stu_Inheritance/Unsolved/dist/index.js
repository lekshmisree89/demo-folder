"use strict";
// Define a Shape class
class Shape {
    constructor(name) {
        this.name = name;
    }
    // Methods to calculate the area and perimeter
    calculateArea() {
        return 0;
    }
    calculatePerimeter() {
        return 0;
    }
    // Method to display the shape information
    displayInfo() {
        console.log(`---------- ${this.name} ----------`);
        console.log(`Area: ${this.calculateArea()}`);
        console.log(`Perimeter: ${this.calculatePerimeter()}`);
        console.log();
    }
}
// Define a Circle class
class Circle extends Shape {
    constructor(radius) {
        super('Circle');
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * (this.radius ** 2);
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
// Define a Rectangle class
class Rectangle extends Shape {
    constructor(width, height) {
        super('Rectangle');
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
// Define a Triangle class
class Triangle extends Shape {
    constructor(base, height, sideA, sideB, sideC) {
        super('Triangle');
        this.base = base;
        this.height = height;
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    calculateArea() {
        return (this.base * this.height) / 2;
    }
    calculatePerimeter() {
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
