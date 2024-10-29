## Trubrics properties

Any property that begins with a `$` is a property recognised by Trubrics. This allows us to perform certain actions in the ingestion pipeline and backend. Here are a list of Trubrics properties:

- `$text`: events that contain a textual element should use this property, as it allows Trubrics to tag the event with text attributes during ingestion. Text attributes can be managed directly in Trubrics.

- `$thread_id`: to identify when a user is interacting with an AI assistant within their session. This allows you to distinguish between non-AI assistant interactions such as "Sign In" and events within a thread such as "Prompt" and "Generation". With an LLM powered assistant, this ID should be unique for each different conversation.

- `$assistant_id`: events that are made by an assistant, such as "Generation" or "Query database", should use this property. Typically for LLM assistants this can be set to the model name, such as "GPT-4" or "GPT-3.5-turbo".

- `$prompt_id`: Identifies as specific prompt, or user message. This is useful when that prompt needs to be tagged with an attribute later on.

- `$generation_id`: Identifies as specific generation, or assistant message. This is useful when that generation needs to be tagged with an attribute later on.
