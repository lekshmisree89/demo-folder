import './style.css';
const badRequestUrl: string = 'https://api.github.com/unicorns';
const redirectUrl = './404.html';

const getRequest = async ():Promise<Response>=> {
const response = await fetch(badRequestUrl);

  console.log(response);
  if (response.status === 404) {
    location.replace(redirectUrl);
  }
   return await response.json();
   
  

};

  // Use a conditional to check the response status.
  // If that status equals the conditional, 
  //then redirect to the 404 page.

  getRequest();