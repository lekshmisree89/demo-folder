"use strict";
// Define a Circle class
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    // Implement methods to calculate the area and perimeter for the circle
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
// Define a Rectangle class
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    // Implement methods to calculate the area and
    // perimeter for the rectangle
    calculateArea() {
        return this.width * this.height;
    }
}
// Define a Triangle class
class Triangle {
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }
    // Implement methods to calculate the area and perimeter for the triangle
    calculateArea() {
        return 0.5 * this.base * this.height;
    }
}
// TODO: Define a Drawing class that contains 
//instances of various shapes
// logPost.prototype.addComment = function (comment) {
//   this.comments.push(comment);
;
class Drawing {
    constructor() {
        this.shapes = [];
    }
    // add a shape to the drawing
    addShape(shape) {
        this.shapes.push(shape);
    }
    // Method to calculate the total area of the drawing
    calculateTotalArea() {
        let totalArea = 0;
        for (const shape of this.shapes) {
            totalArea += shape.calculateArea();
        }
        return totalArea;
    }
}
// Create instances of the Circle, Rectangle, and Triangle classes
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
const triangle = new Triangle(3, 4);
// Create a drawing containing these shapes
const drawing = new Drawing();
drawing.addShape(circle);
// Calculate and display the total area of the drawing
const totalArea = drawing.calculateTotalArea();
console.log(totalArea);
