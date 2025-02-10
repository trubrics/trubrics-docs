import { Trubrics } from "@trubrics/trubrics";

export const trubrics = new Trubrics({ 
    apiKey: TRUBRICS_API_KEY,
    flushInterval: 10000,
    flushAt: 20,
    isVerbose: false
});
