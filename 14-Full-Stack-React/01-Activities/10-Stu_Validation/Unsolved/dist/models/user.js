import { DataTypes, Model } from 'sequelize';
export class User extends Model {
}
export function UserFactory(sequelize) {
    // TODO: Add validations to the User model
    User.init({
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
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true,
                is: /^[a-z]+$/i,
            },
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                len: [8, 100],
                isAlphanumeric: true,
            },
        }
    }, {
        tableName: 'users',
        sequelize,
    });
    return User;
}
