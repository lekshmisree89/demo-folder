import {
  Model,
  type InferAttributes,

  type InferCreationAttributes,


  type CreationOptional,
  DataTypes,
  type Sequelize,
}from 'sequelize';
import bcrypt from 'bcrypt';




/*
! User Model using our own interfaces

import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';
import bcrypt from 'bcrypt';

interface UserAttributes {
  id: number;
  username: string;
  email: string;
  password: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  declare id: number;
  declare username: string;
  declare email: string;
  declare password: string;
}

*/




// ! User Model using sequelize's built-in types
export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<number>;
  declare username: string;
  declare email: string;
  declare password: string;

//It's done when `User.init()` includes Hooks and instance methods to hash the user's password before it is created.

//* It's done when `User.init()` includes Hooks and instance methods to hash the user's password before it is updated.

// It's done when the `User` model includes an instance method to compare a given password to the user's password.


async hashPassword(password: string) : Promise<void> { 
  this.password = await bcrypt.hash(password, 10); 
}
comparePassword(password: string) {
  return bcrypt.compare(password, this.password);

}
}

export function UserFactory(sequelize: Sequelize) {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Please enter a password',
          },
          
        },
      },
    },
    {
      sequelize,
      timestamps: false,
      underscored: true,
      modelName: 'user', 
        hooks:
        {
          beforeCreate: async (newUser: User) => {
            await newUser.hashPassword(newUser.password);
          },

          beforeUpdate: async (newUser: User) => {
            if ((newUser ).changed('password')) {
            await newUser.hashPassword(newUser.password);
            }
          },
        },

    },
    
  );

  return User;
}
