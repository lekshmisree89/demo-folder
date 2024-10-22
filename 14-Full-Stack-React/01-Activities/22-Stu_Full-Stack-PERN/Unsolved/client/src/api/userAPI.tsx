const retrieveUsers = async () => {
  //ADD A FETCH TO REQUEST THE USER DATA FROM THE SERVER
  try{
    const response = await fetch('/api/users', {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error('Invalid user API response, check network tab!');
    }

   
  
  return data;

} catch (err) { 
  console.log('Error from data retrieval:', err);
  return [];
}
}
  //TODO: Add a fetch to request the user data from the server



export { retrieveUsers };
