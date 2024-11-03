import { Schema, model } from 'mongoose';
// TODO: Define a new schema named `bookSchema` for the subdocument
const bookSchema = new Schema({
    title: { type: String, required: true },
    Price: Number,
});
const librarySchema = new Schema({
    name: { type: String, required: true },
    //
    // TODO: Add the `books` subdocument to the parent document as an array
    //
    books: [bookSchema],
    lastAccessed: { type: Date, default: Date.now },
});
// TODO: Create a model named `Library`
const Library = model('Library', librarySchema);
// TODO: Create a new instance of the model including the subdocuments
const bookData = [
    { title: 'The Great Gatsby', Price: 10 },
    { title: 'The Catcher in the Rye', Price: 15 },
];
Library
    .create({ name: 'New York Public Library', books: bookData })
    .then(data => console.log(data))
    .catch(err => console.error(err));
export default Library;
