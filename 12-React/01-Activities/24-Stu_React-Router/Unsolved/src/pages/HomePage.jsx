import { useState, useEffect } from 'react';
// Todo: Bring in the required component from 'react-router-dom' for linking between pages
import { Link, } from 'react-router-dom';
import Profile from '../components/UI/ProfileSections/ProfileTeaser';
import ListItem from '../components/UI/ListItem';
//import {getUsers, getSingleUser} from '../utils/API';
import { useLocation } from 'react-router-dom';

import API from '../utils/API';

export default function HomePage() {
  // Prior to the return statement, our homepage uses a few react hooks and fetchData function to query to a mock database and retrieve random user data
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const { data } = await API.getUsers();

    setUsers(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Iterate over each mock user to display their abridged profile data and a link to their page
  return (
    <div className="container pt-4">
      <ul className="list-group list-group">
        {users.map((user) => (
          <ListItem key={user.id}>
            <Profile user={user} />
            {/* Todo: Update this link component's 
            to prop so that the user can click to see a single user's profile */}
            // This link component will take the user to the profile page of the user with the id of the current user
            <Link
            
             to={`/profile/${user.id}`}
              // This is a conditional (ternary) operator that checks to see if the current page is "Home"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
             
              className={useLocation().pathname === `/profile/${user.id}` ? 'nav-link active' : 'nav-link'}
            >
              See More
            </Link>
          </ListItem>
        ))}
      </ul>
    </div>
  );
}
