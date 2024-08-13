To get started with Trubrics, we recommend tracking at least four events that will provide you with great value:

- **Sign up** - enables generated insights on your product growth, and how many users you are acquiring over time.
- **User prompt** - enables generated insights on AI feature adoption / retention by your users, and deeper insights on what topic users are discussing / user sentiment over time.
- **AI generation** - enables generated insights on AI generation quality, finer categorisation of interaction topics, cost & latency, and comparisons between different models.
- **Converted** - enables generated insights on the ROI of your AI initiatives, and what user prompt topics are failing to provide users value. You are likely to have many events that show your product is providing value to users, so for this tutorial you can select the most obvious event, for example a user moving from a free plan to a paid plan.

You should then look to add `properties` to each event to give context to the event:

- **Sign up:**
    - **Country** - where the user signed up from.

- **User prompt:**
    - **Text** - the content of the user prompt. This will get tagged in real-time in our ingestion pipeline.
    - **Thread ID** - an ID grouping interactions between the user & AI. For example, in a user / AI conversation.

- **AI generation:**
    - **Text** - the text content of the AI generation. This will get tagged in real-time in our ingestion pipeline.
    - **Thread ID** - an ID grouping interactions between the user & AI. For example, in a user / AI conversation.
    - **AI Assistant ID** - a reference to the model name or configuration. For example, `gpt-4o`.

- **Converted:**
    - **Plan** - if the event signals a user moving to a paid plan, you could add a property of the plan selected.


## Whats next?

See how you can collect these four events [here](quickstart.md), with a few lines of code added to your app!
