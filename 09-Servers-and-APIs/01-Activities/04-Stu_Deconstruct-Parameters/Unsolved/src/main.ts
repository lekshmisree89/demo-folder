import './style.css';

// Explain each parameter in comments below.
//base URL for accessing the issues of the Node.js repository on GitHub.
//https://api.github.com/repos/nodejs/node/issues?
// limits the number of issues returned to 10 per page.//per_page=10&
//per_page integer
//The number of results per page (max 100)
// &state=open:
//https://api.github.com/ base url
//sort and created:This filters the results to only include issues that are currently open.

//&direction=desc:&direction=desc:
//direction string
//The direction to sort the results by.

//Default: desc Can be one of: asc, desc
    //This specifies that the sorting should be in descending order (newest issues first).
    

const REQUEST_URL =
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc';

fetch(REQUEST_URL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

