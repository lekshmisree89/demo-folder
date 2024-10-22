// TODO: Integrate the `WeatherContext` component into the `Alert` component below.
// Each `Alert` component should display each of the `WeatherContext` fields.
import { useContext } from 'react';
import WeatherContext from './WeatherContext';


interface AlertProps {
  alertType: string;
  message: string;
  adminMessage: string;
};

function Alert(props: AlertProps) {

  const weatherContext = useContext(WeatherContext);
  //The WeatherContext object is created with
  //the fields city, temperature, temperatureUnits and conditions
  return (
    <div className={`alert alert-${props.alertType || 'success'}`} role="alert">
      <p>{props.message}</p>
      <p>Weather Information:</p>
      <p>City: {weatherContext.city}</p>
      <p>Temperature: {weatherContext.temperature}</p>
      <p>Temp Units: {weatherContext.temperatureUnits}</p>
      <p>Conditions: {weatherContext.conditions}</p>
      

      
    </div>




  );
}

export default Alert;
