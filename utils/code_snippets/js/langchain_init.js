import { Trubrics } from "@trubrics/trubrics";
import { ChatOpenAI, OpenAIClient } from "@langchain/openai";

export const trubrics = new Trubrics({ 
    apiKey: TRUBRICS_API_KEY,
    openAI: OpenAIClient
});