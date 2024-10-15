import { Trubrics } from "@trubrics/trubrics";
import { OpenAI, AzureOpenAI } from 'openai';

export const trubrics = new Trubrics({ 
    apiKey: TRUBRICS_API_KEY,
    openAI: OpenAI
});