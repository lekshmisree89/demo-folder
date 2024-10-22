import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

// Define an interface for the attributes
interface BookAttributes {
  book_id: number;
  title: string;
  author: string;
  isbn: string;
  pages: number;
  edition: number;
  is_paperback: boolean;
}


//optional is used for the attributes 
//that are not required
//for the creation of the book

interface BookCreationAttributes extends Optional<BookAttributes,'book_id'> {}
 // Define the Model with the attributes interface
export class Book extends Model<BookAttributes, BookCreationAttributes> 
implements BookAttributes {
  
  //model class for the book table is created here
  //this class will be used to interact with the book table

  public book_id!: number;
  public title!: string;
  public author!: string;
  public isbn!: string;
  public pages!: number;
  public edition!: number;
  public is_paperback!: boolean;

 //timestamps are not used
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function BookFactory(sequelize: Sequelize): typeof Book {
  Book.init(
    {
      book_id: {
        type: DataTypes.INTEGER,
        
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
      },
      author: {
        type: DataTypes.STRING,
      },
      isbn: {
        type: DataTypes.STRING,
      },
      pages: {
        type: DataTypes.INTEGER,
      },
      edition: {
        type: DataTypes.INTEGER,
      },
      is_paperback: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      timestamps: false,
      underscored: true,
      freezeTableName: true,
    }
  );

  return Book;
}
