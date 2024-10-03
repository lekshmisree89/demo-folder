// TODO: Define a City class with name and id properties
import fs from 'fs/promises'; // Using promises API for file system
import path from 'path';
// TODO: Complete the HistoryService class
  // TODO: Define a read method that reads from the searchHistory.json file
  // private async read() {}
  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
  // private async write(cities: City[]) {}
  // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
  // async getCities() {}
  // TODO Define an addCity method that adds a city to the searchHistory.json file
  // async addCity(city: string) {}
  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  // async removeCity(id: string) {}




// Define a City class with name and id properties
class City {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

// Complete the HistoryService class
class HistoryService {
  private filePath: string;

  constructor() {
    this.filePath = path.join(__dirname, 'searchHistory.json'); // Adjust path as necessary
  }

  // Define a read method that reads from the searchHistory.json file
  private async read(): Promise<City[]> {
    try {
      const data = await fs.readFile(this.filePath, 'utf-8');
      return JSON.parse(data) as City[]; // Parse the JSON data into an array of City objects
    } catch (error) {
      console.error('Error reading search history:', error);
      return []; // Return an empty array if there is an error
    }
  }

  // Define a write method that writes the updated cities array to the searchHistory.json file
  private async write(cities: City[]): Promise<void> {
    try {
      await fs.writeFile(this.filePath, JSON.stringify(cities, null, 2)); // Write cities array as JSON
    } catch (error) {
      console.error('Error writing to search history:', error);
    }
  }

  // Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
  async getCities(): Promise<City[]> {
    return await this.read(); // Simply call read to get cities
  }

  // Define an addCity method that adds a city to the searchHistory.json file
  async saveCity(cityName: string): Promise<void> {
    const cities = await this.getCities();
    const newCity = new City(Date.now().toString(), cityName); // Use timestamp as a unique ID
    cities.push(newCity); // Add new city to the array
    await this.write(cities); // Write updated array back to file
  }

  // BONUS: Define a removeCity method that removes a city from the searchHistory.json file
  async deleteCityFromHistory(id: string): Promise<void> {
    const cities = await this.getCities();
    const updatedCities = cities.filter(city => city.id !== id); // Filter out the city with the matching ID
    await this.write(updatedCities); // Write the updated array back to the file
  }
}

export default new HistoryService();

