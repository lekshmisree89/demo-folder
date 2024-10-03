import dotenv from 'dotenv';
dotenv.config();
// TODO: Define a class for the Weather object
class Weather {
    constructor(temperature, description, humidity, windSpeed, forecast) {
        this.temperature = temperature;
        this.description = description;
        this.humidity = humidity;
        this.windSpeed = windSpeed;
        this.forecast = forecast;
    }
}
// TODO: Complete the WeatherService class
class WeatherService {
    constructor() {
        this.baseURL = 'https://api.openweathermap.org';
        this.apiKey = process.env.OPENWEATHER_API_KEY || ''; // Ensure to set 
        //this in your .env file
    }
    // TODO: Create fetchLocationData method
    // private async fetchLocationData(query: string) {}
    async fetchLocationData(query) {
        const response = await fetch(`${this.baseURL}geo/1.0/direct?q=${query}&limit=1&appid=${this.apiKey}`);
        if (!response.ok) {
            throw new Error('Failed to fetch location data');
        }
        const locationData = await response.json();
        return this.destructureLocationData(locationData[0]);
    }
    // TODO: Create destructureLocationData method
    destructureLocationData(locationData) {
        return {
            latitude: locationData.lat,
            longitude: locationData.lon,
        };
    }
    
    // private destructureLocationData(locationData: Coordinates): Coordinates {}
    buildGeocodeQuery(city) {
        return `${this.baseURL}geo/1.0/direct?q=${city}&limit=1&appid=${this.apiKey}`;
    }
    // TODO: Create buildGeocodeQuery method
    // private buildGeocodeQuery(): string {}
    buildWeatherQuery(coordinates) {
        return `${this.baseURL}weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${this.apiKey}`;
    }
    // TODO: Create buildWeatherQuery method
    // private buildWeatherQuery(coordinates: Coordinates): string {}
    // TODO: Create fetchAndDestructureLocationData method
    async fetchAndDestructureLocationData(city) {
        const locationData = await this.fetchLocationData(city);
        return locationData;
    }
    // private async fetchAndDestructureLocationData() {}
    // TODO: Create fetchWeatherData method
    async fetchWeatherData(coordinates) {
        const response = await fetch(this.buildWeatherQuery(coordinates));
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        return await response.json();
    }
    // private async fetchWeatherData(coordinates: Coordinates) {}
    // TODO: Build parseCurrentWeather method
    parseCurrentWeather(response) {
        const temperature = response.main.temp - 273.15; // Convert from Kelvin to Celsius
        const description = response.weather[0].description;
        const humidity = response.main.humidity;
        const windSpeed = response.wind.speed;
        const forecast = response.forecast.map((data) => ({
            date: data.dt_txt,
            temperature: data.main.temp - 273.15, // Convert from Kelvin to Celsius
            description: data.weather[0].description,
        }));
        return new Weather(temperature, description, humidity, windSpeed, forecast);
    }
    // private parseCurrentWeather(response: any) {}
    // TODO: Complete buildForecastArray method
    buildForecastArray(currentWeather, weatherData) {
        const forecast = weatherData.map(data => ({
            date: new Date(data.dt * 1000).toISOString().split('T')[0],
            temperature: data.main.temp - 273.15, // Convert from Kelvin to Celsius
            description: data.weather[0].description,
        }));
        return new Weather(currentWeather.temperature, currentWeather.description, currentWeather.humidity, currentWeather.windSpeed, forecast);
    }
    // private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
    // TODO: Complete getWeatherForCity method
    async getWeatherData(city) {
        const coordinates = await this.fetchAndDestructureLocationData(city);
        const weatherData = await this.fetchWeatherData(coordinates);
        return this.parseCurrentWeather(weatherData);
    }
}
// async getWeatherForCity(city: string) {}
export default new WeatherService();
