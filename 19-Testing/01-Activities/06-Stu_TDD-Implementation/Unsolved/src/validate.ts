export default class Validate {

  isValidUsername(username: string) {
    if (username === '') {
      throw new Error('Username not specified');
    } else{
    
    // TODO: Write code that checks if the username is less than 8 characters and returns false if so.
    const usernameLength = username.length;
    if (usernameLength < 8) {
      return false;
    }

  
    // TODO: Write code the checks if the username contains all lowercase characters.
    // It should return true if it does, and false if not.
    
    //

    // This regex pattern makes sure that a provided string is all lowercase
    const pattern = /^[a-z]*$/;
    return pattern.test(username);
  }

}




  isValidPassword(password: string) {

  if (password === '') {
    throw new Error('Password not specified');
  } else {
     

  const passwordLength = password.length;
  if (passwordLength < 8) {
    return false;
  }
    // TODO: Write code the checks if the password contains at least 1 uppercase, lowercase, and number.
    // It should return true if it does, and false if not.
 
  
    // This regex pattern makes sure that a provided string has at least 1 uppercase, lowercase, and number.
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
    return pattern.test(password);

  };

}
}
