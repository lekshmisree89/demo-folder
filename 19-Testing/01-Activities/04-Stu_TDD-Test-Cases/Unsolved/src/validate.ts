export default class Validate {

  isValidUsername(username: string) {
  
    // Validate > Username Length > should return false if username is less than 8 characters
   


  isValidPassword(password: string) {
      
      // Validate > Password Length > should return false if password is less than 8 characters
      if (password.length < 8) {
        return false;
      }
      return true;
  };
}
