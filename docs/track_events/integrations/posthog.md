The Posthog integration allows you to import your Posthog events directly into Trubrics for unified analytics and insights.

## Setup

1. Navigate to the Integrations section in your Trubrics project
2. Provide your Posthog credentials:
   - Posthog Personal API Key
   - Posthog Project ID
   - Posthog Host URL (defaults to https://eu.posthog.com)

## How It Works

- The integration automatically fetches events from your Posthog project
- Events are mapped to Trubrics events using configurable mapping rules
- Standard events like "User Prompt" and "LLM Generation" are automatically detected
- All events include a direct link back to the original event in Posthog


## Advanced Configuration

Advanced users can customize the mapping rules to fine-tune how Posthog data is imported into Trubrics, allowing for tailored analytics and insights.

See our tutorial video for more details about automated integration with mapping rules:

![type:video](https://www.loom.com/embed/cd2d31d2edd1454d9a2169c578b59467?sid=75a7559a-3efa-411c-b520-c9b3a57bce6b)