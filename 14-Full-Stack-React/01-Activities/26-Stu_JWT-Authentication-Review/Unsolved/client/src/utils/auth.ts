//TODO: Import the necessary type and method from 'jwt-decode'
import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    try{
      const token = this.getToken();
      return token ? jwtDecode<JwtPayload>(token) : null;
    }
    catch (error) {
      console.log('Error getting profile: ', error);
      return  null; 

    }
  
  }

  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token: string) {

    //TODO: Complete this function
    // Check if the token is expired
    const decoded = jwtDecode<JwtPayload>(token);
    
    // Get the expiration time of the token
    const currentTime = Date.now() / 1000;
    return decoded.exp ? decoded.exp < currentTime : false;
  }

  getToken(): string {
    const loggedUser = localStorage.getItem('id_token') || '';
    return loggedUser;
  }

  login(idToken: string) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/');
  }
}

export default new AuthService();
