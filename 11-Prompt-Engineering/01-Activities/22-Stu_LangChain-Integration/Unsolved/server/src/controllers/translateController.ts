import { type Request, type Response } from 'express';
import { OpenAI } from '@langchain/openai';
import dotenv from 'dotenv';

dotenv.config();

// TODO: Explain the purpose of the following code
const apiKey = process.env.OPENAI_API_KEY;// Get the OpenAI API key from 
//the environment variables
let model: OpenAI;// Initialize the model variable to store the OpenAI model


if (apiKey) {
  // TODO: Explain the purpose of the following code
  // Initialize the OpenAI model with the API key and the model name
  model = new OpenAI({ temperature: 0, openAIApiKey: apiKey, modelName: 'gpt-3.5-turbo' });
} else {
  console.error('OPENAI_API_KEY is not configured.');// Log an error message if the API key is not provided
}

// Call the OpenAI API to get a response to the formatted prompt
const promptFunc = async (input: string): Promise<string> => {
  try {
    if (model) {
      // TODO: Explain the purpose of the following code
      // Invoke the OpenAI model with the input prompt
      return await model.invoke(input);// Return the response from the 
      //OpenAI model
    }// Return a message if the API key is not provided
    return 'No OpenAI API key provided. Unable to provide a response.';
  } catch (err) {// Log an error if the OpenAI model fails to provide a response
    console.error(err);
    throw err;
  }
};

// Handle the POST request to provide translations for the user's text
export const getTranslations = async (req: Request, res: Response): Promise<void> => {
  const userText: string = req.body.text;

  try {
    if (!userText) {
      res.status(400).json({ text: null, response: 'Please provide text in the request body.' });
      return;
    }

    const translation: string = await promptFunc(userText);
    res.json({ text: userText, response: translation });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error:', error.message);
    }
    res.status(500).json({ text: userText, response: 'Internal Server Error' });
  }
};
