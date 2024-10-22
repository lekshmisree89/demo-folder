import sequelize from '../config/connection.js';
import { ReaderFactory } from './Reader.js';
import { LibraryCardFactory } from './LibraryCard.js';
import { AuthorFactory } from './Author.js';
import { BookFactory } from './Book.js';

// Initialize the models
const Reader = ReaderFactory(sequelize);
const LibraryCard = LibraryCardFactory(sequelize);
const Author = AuthorFactory(sequelize);
const Book = BookFactory(sequelize);

// Create associations between the models

// A reader can have one library card
Reader.hasOne(LibraryCard, {
  onDelete: 'CASCADE',
});

LibraryCard.belongsTo(Reader);

// An author can have many books
Author.hasMany(Book, {
  foreignKey: 'author_id',
  as: 'books', // This line is necessary because the association is named different from the model
  onDelete: 'CASCADE',
});

// A book can have only one author
Book.belongsTo(Author, {
   // Correctly formatted association
  onDelete: 'CASCADE',
});

// A book can have many readers and a reader can have many books
Book.belongsToMany(Reader,
   { through: 'BookReader' });//
Reader.belongsToMany(Book, { through: 'BookReader' }); // This line establishes the reverse association

export { Reader, LibraryCard, Author, Book };
