// ! When dynamically generating elements in TypeScript, 
//we need to cast the element to the correct type
import './style.css';

const usersContainer = document.getElementById('users') as HTMLDivElement;
const fetchButton  = document.getElementById(
  'fetch-button'
) as HTMLButtonElement;

const REQUEST_URL = 'https://api.github.com/users?per_page=5';

const getUsers = () => {
        
  // TODO: Add a fetch call to the GitHub API
  fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      
    data.forEach((user: { login: string; html_url: string }) => {
      const userButton = createUserButton(user.login, user.html_url);
      usersContainer.appendChild(userButton);
    });
   })
   .catch((error) => {
    console.error(error);
    usersContainer.innerHTML = '</p>Please try again later.</p>';
  });
};

       
        // Creating elements, tablerow, tabledata, and anchor
  
  // TODO: Then parse the JSON response
  // TODO: Then iterate over the data and generate your HTML


const createUserButton = (username: string, url: string) => {
  // Creating a h3 element and a p element
  const userName = document.createElement('h3');
  const userUrl = document.createElement('p');

  // Setting the text of the h3 element and p element.
  userName.textContent = username;
  userUrl.textContent = url;

  // Creating a link element that looks like a button
  const userButton = document.createElement('a');
  userButton.classList.add('btn', 'btn-primary');
  userButton.href = url;
  userButton.target = '_blank';

  // Append will attach the element as the bottom most child.
  userButton.append(userName);
  userButton.append(userUrl);

  return userButton;
};
fetchButton.addEventListener("click",getUsers);