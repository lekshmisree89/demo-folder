import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
  first?: string;
  last?: string;
  age?: number;
  fullName?: string;
}

const userSchema = new Schema<IUser>(
  {
    first: String,
    last: String,
    age: Number,
  },
  {
    toJSON: {
      virtuals: true,
      // TODO: Mongoose will not include virtuals by default,
      // so add a `virtuals` property and set it's value to true
    },
    id: false,
  }
);

// TODO: Create a virtual property `fullName` on the userSchema
// that's a concatenation of the user's first and last name
// TODO: Create a getter for the virtual that returns the full name of the user (first + last)


userSchema.virtual('fullName').get(function () {
  return `${this.first} ${this.last}`;
}
);


// TODO: Create a setter for the virtual that sets the value of the first and last name, given just the `fullName`

userSchema.virtual('fullName').set(function (fullName: string) {
  // Split the full name into first and last names
  const [first, last] = fullName.split(' ');//array destructuring
  this.first = first;
  this.last = last;
});


// Initialize our User model
const User = model('user', userSchema);

export default User;
