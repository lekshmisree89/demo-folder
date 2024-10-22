import { createContext } from 'react';

interface UserContextInfo {
  userName: string,
  userCredentials: 'Guest' | 'User' | 'Admin';
};

const UserContext = createContext<UserContextInfo>({ userName: 'Guest', userCredentials: 'Guest' });
//
//The UserContext object is created with 
  //the fields userName and userCredentials
export default UserContext;
