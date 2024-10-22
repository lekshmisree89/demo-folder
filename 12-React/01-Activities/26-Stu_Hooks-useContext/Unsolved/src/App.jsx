// We import useContext to have access to the context.
import { useState, useEffect, useContext } from 'react';
import SearchBar from './components/SearchBar';
import IssueList from './components/IssueList';
import { ThemeContext } from './components/ThemeContext';

// TODO: Import the ThemeContext so we can use the theme and toggleTheme functions.

function App() {
  const [issues, setIssues] = useState([]);

  // TODO: Use theme and toggleTheme from the ThemeContext.
  const { theme, toggleTheme } = useContext(ThemeContext);




  useEffect(() => {
    document.title = 'GitHub issues';
  }, []);

  const getRepoIssues = async (repo) => {
    const issuesURL = `https://api.github.com/repos/${repo}/issues?direction=asc`;
    console.log('issuesURL', issuesURL);

    const res = await fetch(issuesURL);
    const response = await res.json();
    setIssues(response);
  };

  return (
    // TODO: Apply the current theme to the main div for the application.
    // The theme is a string that will be either 'light' or 'dark'.
    // The theme is a state variable that is managed by the ThemeProvider component.

    <div className={`app ${theme}`}>
      {/* app {theme} means the theme is being passed to the div as a class name
      so that the theme can be applied to the div as a class name and the 
      theme can be used to style the div */}

      {/* TODO: Use toggleTheme to handle the button click. */}

      <button onClick={toggleTheme}>Toggle Theme</button>
      {/* on clic  it will toggle the theme  by accepting the toggleTheme
       function from authcontext   and applying it to the button
       */}


      <SearchBar onFormSubmit={getRepoIssues} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <IssueList issues={issues} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
