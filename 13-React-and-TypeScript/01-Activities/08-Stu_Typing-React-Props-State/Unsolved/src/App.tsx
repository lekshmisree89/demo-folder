// TODO: Integrate the Advertisement component into the App component below. 
//Create two instances of the component.


import './App.css'
import Calculator from './components/Calculator';
import Advertisement from './components/Advertisement';

function App() {
  
  return (
    <>
{/* Integrate the Advertisement component into the App component below. 
//Create two instances of the component. */}
<Advertisement 
companyName="ABC" productDescription="VACCUM CLEANER" price="500"/>
<Advertisement
 companyName="Samsung" productDescription="PHONE" price="1000"/>
      
      <Calculator />
    </>
  )
}

export default App
