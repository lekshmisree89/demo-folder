import { useEffect ,useState} from 'react';
import UserList from '../components/Users';
import{ retrieveUsers } from '../../src/api/userAPI'
import type { UserData } from '../interfaces/UserData';
//TODO: Import retrieveUsers from the userAPI

const Home = () => {

const [users, setUsers] = useState<UserData[]>([]);
  //TODO: Set up a state to hold the user data


  useEffect(() => {
    fetchUsers();
    //TODO: Call fetchUsers when the component mounts
  }, []);

  const fetchUsers = async () => {

    //get users from api and set the state OR PUT THE USERS IN THE STATE
    const data = await retrieveUsers();
    setUsers(data);
    //TODO: Call the retrieveUsers API and update your users state
  };

  return <UserList users={users} />;
};

export default Home;
