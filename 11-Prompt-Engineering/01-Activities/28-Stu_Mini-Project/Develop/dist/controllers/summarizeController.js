import { OpenAI } from '@langchain/openai';
import { PromptTemplate } from '@langchain/core/prompts';
import dotenv from 'dotenv';
import { StructuredOutputParser } from 'langchain/output_parsers';
dotenv.config();
// Get the OpenAI API key from the environment variables
const apiKey = process.env.OPENAI_API_KEY;
let model;
if (apiKey) {
    // Initialize the OpenAI model if the API key is provided
    model = new OpenAI({ temperature: 0, openAIApiKey: apiKey, modelName: 'gpt-3.5-turbo' });
}
else {
    console.error('OPENAI_API_KEY is not configured.');
}
// Create a new prompt template for formatting prompts
const parser = StructuredOutputParser.fromNamesAndDescriptions({
    //output in bullet points
    summary: 'A summary of the user-provided text in bullet points',
    explanation: 'A detailed explanation of the summary'
});
const formatInstructions = parser.getFormatInstructions();
// Format the prompt using the prompt template with the user's text
const formatPrompt = async (text) => {
    //   TODO Use the prompt template to format the prompt
    try {
        // Use the prompt template to format the prompt by passing the user-provided text
        const formattedPrompt = await promptTemplate.format({ text });
        console.log('Formatted Prompt:', formattedPrompt);
        // Return the formatted prompt
        return formattedPrompt;
    }
    catch (error) {
        console.error('Error formatting the prompt:', error);
        throw new Error('Could not format the prompt');
    }
};
// Create a new prompt template for formatting prompts
const promptTemplate = new PromptTemplate({
    template: " convert the text into a summary\n{format_instructions}\n{text}",
    inputVariables: ["text"],
    partialVariables: { format_instructions: formatInstructions }
});
// Call the OpenAI API to get a response to the formatted prompt
const promptFunc = async (input) => {
    try {
        if (model) {
            //  TODO  Call the OpenAI API to get a response to the formatted prompt
            const response = await model.invoke(input);
            console.log('Response:', response);
            return response;
        }
        return 'No OpenAI API key provided. Unable to provide a response.';
    }
    catch (err) {
        console.error(err);
        throw err;
    }
};
// Handle the POST request to provide a summary for the user's text
export const getSummary = async (req, res) => {
    const userText = req.body.text;
    try {
        if (!userText) {
            res.status(400).json({ error: 'Please provide text to summarize in the request body.' });
            return;
        }
        const formattedPrompt = await formatPrompt(userText);
        const result = await promptFunc(formattedPrompt);
        res.json({ prompt: userText, formattedPrompt, result });
    }
    catch (error) {
        if (error instanceof Error) {
            console.error('Error:', error.message);
        }
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
