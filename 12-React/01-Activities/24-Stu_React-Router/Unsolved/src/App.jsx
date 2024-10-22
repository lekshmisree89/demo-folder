// Todo: Bring in the required import from 'react-router-dom'

import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
     

  <main className="mx-3">
  
    <Outlet />
  </main>
</>
);
}

export default App;
 {/* Todo: Fill in the appropriate component so that 
      the user will conditionally see the appropriate 
      view based on the URL */}

      {/* This is the main component that will 
    conditionally render the appropriate view based on the URL */}