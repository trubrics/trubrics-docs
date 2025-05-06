The Langsmith integration allows you to import your Langsmith LLM tracing data directly into Trubrics for unified analytics and insights.

## Setup

1. Navigate to the Integrations section in your Trubrics project
2. Provide your Langsmith credentials:
   - Langsmith API Key
   - Langsmith Project ID
   - Langsmith Host URL (defaults to https://api.smith.langchain.com)

## How It Works

- The integration automatically fetches trace data from your Langsmith account
- Traces are mapped to Trubrics events using configurable mapping rules
- Standard events like "User Prompt" and "LLM Generation" are automatically detected
- All events include a direct link back to the original trace in Langsmith


## Advanced Configuration

Advanced users can customize the mapping rules to fine-tune how Langsmith data is imported into Trubrics, allowing for tailored analytics and insights.

See our tutorial video for more details about automated integration with mapping rules:

![type:video](https://www.loom.com/embed/cd2d31d2edd1454d9a2169c578b59467?sid=75a7559a-3efa-411c-b520-c9b3a57bce6b)