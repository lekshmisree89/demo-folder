import { Schema, model, Document } from 'mongoose';

interface IDepartment extends Document {
  name: string;
  lastAccessed: Date;
}

const departmentSchema = new Schema<IDepartment>({// Define interface
  // for department document
  name: { type: String, required: true },
  lastAccessed: { type: Date, default: Date.now },// Define fields for schema
});

const Department = model('Department', departmentSchema);
// Create new document using model  

// Will add data only if collection is empty to prevent duplicates
// Note that two documents can have the same name value
Department.find({})// Check if collection is empty
  .exec()
  .then(async collection => {
    if (collection.length === 0) {
      const results = await Department.insertMany(
        [
          { name: 'Produce' },
          { name: 'Dairy' },
          { name: 'Meat' },
          { name: 'Wine' },
          { name: 'Wine' },
          { name: 'Wine' },
          { name: 'Flowers' },
        ]
      );
      return console.log('Departments inserted', results);
    }
    return console.log('Already populated');
  })
  .catch(err => console.log(err));

export default Department;
