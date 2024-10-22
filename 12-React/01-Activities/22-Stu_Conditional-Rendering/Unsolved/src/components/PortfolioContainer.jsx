import { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // TODO: Add a comment describing the functionality of this method
  // This function is checking the currentPage and 
  //returning the page that is currently selected
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Blog') {
      return <Blog />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      {/* // We are passing the currentPage and handlePageChange function as props */}
      {/* ////  TODO: Add a comment describing the functionality of the NavTabs component
      // The NavTabs component is rendering the navigation tabs and
      // passing the currentPage and handlePageChange function as props */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {/* // We are calling the renderPage function and rendering the page that is returned
      */}

      
     < main className="mx-3">{renderPage()}</main> 
    </div>
  );
}
