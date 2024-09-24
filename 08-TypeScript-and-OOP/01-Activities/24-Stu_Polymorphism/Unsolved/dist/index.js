"use strict";
// TODO: Define a Circle class
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * (this.radius ** 2);
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
// TODO: Define a Rectangle class
class Rectangle {
    constructor(width, height) {
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
// TODO: Define a Triangle class
class Triangle {
    constructor(base, height, sideA, sideB, sideC) {
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
// Calculates the total area of an array of shapes
function calculateTotalArea(shapes) {
    let totalArea = 0;
    for (const shape of shapes) {
        totalArea += shape.calculateArea();
    }
    return totalArea;
}
// Calculates the total perimeter of an array of shapes
function calculateTotalPerimeter(shapes) {
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
const shapes = [circle, rectangle, triangle];
// TODO: Display the total area of all shapes
const totalArea = calculateTotalArea(shapes);
console.log(totalArea);
// TODO: Display the total perimeter of all shapes
const totalPerimeter = calculateTotalPerimeter(shapes);
console.log(totalPerimeter);
