import { Trubrics } from "@trubrics/trubrics";

export const trubrics = new Trubrics({ 
    apiKey: TRUBRICS_API_KEY,
    flushInterval: 10,
    flushBatchSize: 20,
    isVerbose: false
});
