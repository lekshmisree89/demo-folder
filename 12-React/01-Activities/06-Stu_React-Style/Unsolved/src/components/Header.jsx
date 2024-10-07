// Here we import the Header.css file to grant access to some additional classNames
import '../styles/Header.css';

// TODO: Create a styles object called "styles"

const styles = {
  header: {
    background: 'red',
    justifyContent: 'flex-end',
    fontsize: '100',

  },

  h1: {
background: 'red',
color: 'white',
  },
};
function Header() {


  // TODO: Add a style attribute to header and the h1 element




  return (
    <header tyle={styles.header} className="header" >
      <h1 style={styles.h1}>Welcome</h1>
    </header>



  );
}

export default Header;
