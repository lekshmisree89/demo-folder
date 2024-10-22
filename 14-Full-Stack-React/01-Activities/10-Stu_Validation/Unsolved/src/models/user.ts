import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

interface UserAttributes {
  id: number;
  username: string;
  email: string;
  password: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function UserFactory(sequelize: Sequelize): typeof User {

  // TODO: Add validations to the User model


  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isAlphanumeric: true,
        },

      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,//means
        validate: {
          isEmail: true,


        
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          len: [8, 100],
          isAlphanumeric: true,

        },
      }
    },
    {
      tableName: 'users',
      sequelize,
    }
  );

  return User;
}
