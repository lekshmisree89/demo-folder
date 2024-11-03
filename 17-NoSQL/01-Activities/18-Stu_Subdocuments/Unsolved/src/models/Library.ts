import { Schema, model, Document } from 'mongoose';


// TODO: Define an interface for the `bookSchema` subdocument 
interface ILibrary extends Document {
  name: string;
  books: IBook[];
  lastAccessed?: Date;
}

interface IBook extends Document {
  title: string;
  Price: number;
}



// TODO: Define a new schema named `bookSchema` for the subdocument
const bookSchema = new Schema<IBook>({
  title: { type: String, required: true },
  Price: Number,
});

const librarySchema = new Schema<ILibrary>({
  name: { type: String, required: true },
  //
  // TODO: Add the `books` subdocument to the parent document as an array
  //
  books: [bookSchema],
  lastAccessed: { type: Date, default: Date.now },
});

// TODO: Create a model named `Library`
const Library = model<ILibrary>('Library', librarySchema);

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

