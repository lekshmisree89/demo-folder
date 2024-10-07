import { OpenAI } from '@langchain/openai';
import { PromptTemplate } from '@langchain/core/prompts';
import { StructuredOutputParser } from 'langchain/output_parsers';
import dotenv from 'dotenv';
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
//I want to parse OpenAI responses into a cleanly formatted, parsed format.
const parser = StructuredOutputParser.fromNamesAndDescriptions({
    korean: "translate the user's text into Korean",
    french: "translate the user's text into Korean, French and German.",
    spanish: "translate the user's text into and German.",
    german: "translate the user's text into German.",
    explanation: "The response from the OpenAI model."
});
//I want to format the prompt with the user's text.
const formatInstructions = parser.getFormatInstructions();
//I want to create a prompt template for formatting prompts.
// TODO: Create a parser to format the output response.
// Create a new prompt template for formatting prompts
const promptTemplate = new PromptTemplate({
    template: "You are a helpful translator that understands all of the current languages in the world. You will translate anything that is asked of you while also understanding that phrases and addages may get lost in translation. In those cases, you will return a translated version of the user's phrase into Korean, French, Spanish and German.\n{format_instructions}\n{text}",
    inputVariables: ["text"],
    partialVariables: { format_instructions: formatInstructions }
});
// Format the prompt using the prompt template with the user's text
const formatPrompt = async (text) => {
    return await promptTemplate.format({ text });
};
// Call the OpenAI API to get a response to the formatted prompt
const promptFunc = async (input) => {
    try {
        if (model) {
            return await model.invoke(input);
        }
        return "```json\n{\n    \"code\": \"No OpenAI API key provided.\",\n    \"explanation\": \"Unable to provide a response.\"\n}\n```";
    }
    catch (err) {
        console.error(err);
        throw err;
    }
};
// Parse the response from the model
const parseResponse = async (response) => {
    try {
        return await parser.parse(response);
    }
    catch (err) {
        console.error('Error in parseResponse:', err);
        return { error: 'Failed to parse the response from the model.' };
    }
};
// Handle the POST request to provide translations for the user's text
export const getTranslations = async (req, res) => {
    const userText = req.body.text;
    try {
        if (!userText) {
            res.status(400).json({ text: null, response: 'Please provide text in the request body.' });
            return;
        }
        const formattedPrompt = await formatPrompt(userText);
        const rawResponse = await promptFunc(formattedPrompt);
        const result = await parseResponse(rawResponse);
        res.json({ text: userText, prompt: formattedPrompt, response: rawResponse, formattedResponse: result });
    }
    catch (error) {
        if (error instanceof Error) {
            console.error('Error:', error.message);
        }
        res.status(500).json({ text: userText, prompt: null, response: 'Internal Server Error' });
    }
};
