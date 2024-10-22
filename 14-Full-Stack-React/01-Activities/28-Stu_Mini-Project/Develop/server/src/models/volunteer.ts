import { DataTypes, Sequelize, Model, Optional } from 'sequelize';


// Define the attributes for the Volunteer model
interface VolunteerAttributes {
  id: number;
  volunteerName: string;
  
}

// Define the creation attributes where 'id' is optional (auto-incremented)
interface VolunteerCreationAttributes extends Optional<VolunteerAttributes, 'id'> {}

// Extend the Volunteer class using Sequelize's Model class
export class Volunteer extends Model<VolunteerAttributes, VolunteerCreationAttributes> implements VolunteerAttributes {
  // Define the properties as public with types
  public id!: number;
  public volunteerName!: string;

}

// Define the VolunteerFactory function to initialize the model
export function VolunteerFactory(sequelize: Sequelize): typeof Volunteer {
  Volunteer.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      volunteerName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
    },
    {
      tableName: 'volunteers', // Specify the table name
      sequelize, // Pass the Sequelize instance
    }
  );

  return Volunteer; // Return the initialized model
}
