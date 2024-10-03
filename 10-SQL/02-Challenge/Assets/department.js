import pkg from 'pg';;  // Example: Using PostgreSQL for database
const { Client } = pkg; 
// Function to view all departments
async function viewDepartments() {
  const client = new Client({
    user: 'your_db_user',
    host: 'localhost',
    database: 'your_db_name',
    password: 'your_password',
    port: 5432,
  });

  try {
    await client.connect();
    const res = await client.query('SELECT * FROM department');
    console.table(res.rows);
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

// Export the function to make it available for other files
export default viewDepartments ;
