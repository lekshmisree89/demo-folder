import { Router, type Request, type Response } from 'express';
const router = Router();

import HistoryService from '../../service/historyService.js';
import WeatherService from '../../service/weatherService.js';

// TODO: POST Request with city name to retrieve weather data
router.post('/', async(req: Request, res: Response) => {
  const { city } = req.body;
  if (!city) {
    return res.status(400).json({ error: 'City name is required' });
  }
  try {
    // Fetch weather data using WeatherService
    const weatherData = await WeatherService.getWeatherData(city);

    // Save the city to the search history using HistoryService
    await HistoryService.saveCity(city);

    // Send weather data back to the client
    return res.status(200).json(weatherData);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});
  // TODO: GET weather data from city name
// GET weather data from city name and save city to search history
router.get('/weather/:city', async (req: Request, res: Response) => {
  const { city } = req.params;  // Extract the city name from the URL path

  // If city is not provided, return a 400 error
  if (!city) {
    return res.status(400).json({ error: 'City name is required' });
  }

  try {
    // Fetch the weather data using WeatherService
    const weatherData = await WeatherService.getWeatherData(city);

    // Save the city to the search history using HistoryService
    await HistoryService.saveCity(city);

    // Send the weather data back to the client
    return res.status(200).json(weatherData);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});


  // TODO: save city to search history


// TODO: GET search history

// * BONUS TODO: DELETE city from search history
    // Return search history to the client
 // GET search history
router.get('/history', async(req: Request, res: Response) => {
  try {
    const history = await HistoryService.getCities();

    // Return search history to the client
    return res.status(200).json(history);
  } catch (error) {
    console.error('Error fetching search history:', error);
    return res.status(500).json({ error: 'Failed to retrieve search history' });
  }
});

// DELETE city from search history
router.delete('/history/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    // Delete city from history using the id
    await HistoryService.deleteCityFromHistory(id);

    // Return a success message after deletion
    return res.status(200).json({ message: `City with id ${id} deleted successfully.` });
  } catch (error) {
    console.error('Error deleting city from history:', error);
    return res.status(500).json({ error: 'Failed to delete city from history' });
  }
});

export default router;








  


