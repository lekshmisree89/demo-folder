// TODO: Use a useContext hook to create a WeatherContext component with the fields
// `city`, `temperature`, `temperatureUnits` and `conditions`.

import { createContext } from 'react';
//Use a useContext hook to create a WeatherContext component with the fields
// `city`, `temperature`, `temperatureUnits` and `conditions`.

interface WeatherContextInfo {
  city: string;
  temperature: number;
  temperatureUnits: 'C'| 'F';
  conditions: string;
};
 const WeatherContext = createContext<WeatherContextInfo>
 ({ city: 'Phoenix',
  temperature: 64,
   temperatureUnits: 'F',
    conditions: 'COLD' });


export default WeatherContext;

