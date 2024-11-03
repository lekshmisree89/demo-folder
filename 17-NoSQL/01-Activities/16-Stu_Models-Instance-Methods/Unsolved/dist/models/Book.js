import { Schema, model } from 'mongoose';
// It is done when I assign a function named `getDiscount` to 
//the methods object of the `bookSchema` that reduces the price by 50 
// percent and console logs the title of the book and the reduced price.
// TODO: Define a new schema named `bookSchema`
const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true }
});
// TODO: Create a custom instance method named `getDiscount`
bookSchema.methods.getDiscount = function () {
    console.log(`The book ${this.title} was  $${this.price} and is now $${this.price * 0.5}`);
    //return this.price * 0.5;
};
// TODO: Create a model named `Book`
const Book = model('Book', bookSchema);
// TODO: Create a new instance of the model
const book = new Book({ title: 'new book ', author: 'new author', price: 30 });
// TODO: Call the custom instance method on the instance
book.getDiscount();
export default Book;
