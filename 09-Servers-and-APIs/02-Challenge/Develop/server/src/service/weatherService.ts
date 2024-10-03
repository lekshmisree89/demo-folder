import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object
interface Coordinates {
  latitude: number;
  longitude: number;
}

// TODO: Define a class for the Weather object
class Weather {
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
  forecast: Array<{ date: string; temperature: number; description: string }>;

  constructor(temperature: number, description: string, humidity: number, windSpeed: number, forecast: Array<{ date: string; temperature: number; description: string }>) {
    this.temperature = temperature;
    this.description = description;
    this.humidity = humidity;
    this.windSpeed = windSpeed;
    this.forecast = forecast;
  }
}
// TODO: Complete the WeatherService class
class WeatherService {
  // TODO: Define the baseURL, API key, and city name properties
  private baseURL: string;
  private apiKey: string;
   constructor() {
    this.baseURL = 'https://api.openweathermap.org';
    this.apiKey = process.env.OPENWEATHER_API_KEY || ''; // Ensure to set 
    //this in your .env file
  }
  // TODO: Create fetchLocationData method

  private async fetchLocationData(query: string): Promise<Coordinates> {
    const response = await fetch(`${this.baseURL}geo/1.0/direct?q=${query}&limit=1&appid=${this.apiKey}`);
    if (!response.ok) {
      throw new Error('Failed to fetch location data');
    }
    const locationData = await response.json();
    return this.destructureLocationData(locationData[0]);
  }
  // private async fetchLocationData(query: string) {}
  private destructureLocationData(locationData: any): Coordinates {
    return {
      latitude: locationData.lat,
      longitude: locationData.lon,
    };
  }
  // TODO: Create destructureLocationData method
   // private destructureLocationData(locationData: Coordinates): Coordinates {}
  private buildGeocodeQuery(city: string): string {
    return `${this.baseURL}geo/1.0/direct?q=${city}&limit=1&appid=${this.apiKey}`;
  }
 
  // TODO: Create buildGeocodeQuery method
   // private buildGeocodeQuery(): string {}
  private buildWeatherQuery(coordinates: Coordinates): string {
    return `${this.baseURL}weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${this.apiKey}`;
  }
 
  // TODO: Create buildWeatherQuery method

  // private buildWeatherQuery(coordinates: Coordinates): string {}
  // TODO: Create fetchAndDestructureLocationData method
  private async fetchAndDestructureLocationData(city: string): Promise<Coordinates> {
    const locationData = await this.fetchLocationData(city);
    return locationData;
  }

  // private async fetchAndDestructureLocationData() {}


  // TODO: Create fetchWeatherData method
  private async fetchWeatherData(coordinates: Coordinates): Promise<any> {
    const response = await fetch(this.buildWeatherQuery(coordinates));
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    return await response.json();
  }

  // private async fetchWeatherData(coordinates: Coordinates) {}
  // TODO: Build parseCurrentWeather method
  private parseCurrentWeather(response: any): Weather {
    const temperature = response.main.temp - 273.15; // Convert from Kelvin to Celsius
    const description = response.weather[0].description;
    const humidity = response.main.humidity;
    const windSpeed = response.wind.speed;
    const forecast = response.forecast.map((data: any) => ({
      date: data.dt_txt,
      temperature: data.main.temp - 273.15, // Convert from Kelvin to Celsius
      description: data.weather[0].description,
    }));

    return new Weather(temperature, description, humidity, windSpeed, forecast);
  }

  // private parseCurrentWeather(response: any) {}
  // TODO: Complete buildForecastArray method
  private buildForecastArray(currentWeather: Weather, weatherData: any[]): Weather {
    const forecast = weatherData.map(data => ({
      date: new Date(data.dt * 1000).toISOString().split('T')[0],
      temperature: data.main.temp - 273.15, // Convert from Kelvin to Celsius
      description: data.weather[0].description,
    }));
    
    return new Weather(currentWeather.temperature, currentWeather.description, currentWeather.humidity, currentWeather.windSpeed, forecast);
  }

  // private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
  // TODO: Complete getWeatherForCity method
  async getWeatherData(city: string): Promise<Weather> {
    const coordinates = await this.fetchAndDestructureLocationData(city);
    const weatherData = await this.fetchWeatherData(coordinates);
    return this.parseCurrentWeather(weatherData);
  }
}


  // async getWeatherForCity(city: string) {}


export default new WeatherService();
