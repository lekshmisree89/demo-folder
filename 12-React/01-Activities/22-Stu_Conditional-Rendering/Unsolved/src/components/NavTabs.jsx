// TODO: Add a comment explaining how we are able to extract the key value pairs from props
// We are able to extract the key value pairs from props by passing 
//the props object as an argument to the functional component
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this 
          //is and what it is checking for
          // This is a ternary operator that is checking if the
          // currentPage is equal to 'Home' and if it is, 
          //it will add the class 'nav-link active' to the element,

          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          //  TODO: Add a comment explaining what this logic is doing
// This is checking if the currentPage is equal to 'About' and if it is, it will add the class 'nav-link active' to the element,
// otherwise it will add the class 'nav-link'
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#blog"
          onClick={() => handlePageChange('Blog')}
          //  TODO: Add a comment explaining what this logic is doing
// This is checking if the currentPage is equal 
//to 'Blog' and if it is, it will add the class 'nav-link active' to the element,
          className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
        >
          Blog
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          //  TODO: Add a comment explaining what this logic is doing
// This is checking if the currentPage is equal to 'Contact' and if it is,
// it will add the class 'nav-link active' to the element,
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
