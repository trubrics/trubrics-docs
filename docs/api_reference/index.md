# API reference

To get started collecting events in your application using Trubrics, consult first our [Javascript SDK](../track_events/sdks/javascript.md) or [Python SDK](../track_events/sdks/python.md). If your language is not supported, you can send events directly to our API:

## Publish Events

Track user events (sign up, conversion, etc...) with this endpoint. It allows the batching of up to 100 events per request.

```bash
curl -X 'POST' \
  'https://app.trubrics.com/api/ingestion/publish_events' \
  -H 'accept: application/json' \
  -H 'x-api-key: TRUBRICS_API_KEY' \
  -H 'Content-Type: application/json' \
  -d '[
  {
    "user_id": "user_id",
    "event": "LLM generation",
    "timestamp": "2024-10-09T13:21:46.182Z",
    "properties": {
      "$text": "Tell me a joke",
      "$thread_id": "thread_id",
      "$assistant_id": "assistant_id",
      "a_custom_property": "any custom value"
    }
  }
]'
```

The request body should contain a list of events with the following parameters:

<div class="no-wrap-table" markdown>

| **Parameter** | **Type** | **Description** | **Required** |
|---|:---:|---|:---:|
| `user_id` | `str` | The distinct ID of the signed in user. | _yes_ |
| `event` | `str` | The name of the event you are tracking. This can range from "User prompt", "Sign in", "Generation", etc. | _yes_ |
| `timestamp` | `str` | The timestamp of the event. | _yes_ |
| `properties` | `dict[str,any]` | A list of properties for both prompts and generations. A single reserved property is `$thread_id` which groups events by conversation thread. Otherwise these can be your custom properties (e.g. cost, number of tokens). Setting properties will allow you to filter and slice analysis in different ways. | _no_ |

</div>

## Publish LLM Events

Track LLM events (prompts and generations) with this endpoint. It allows the batching of up to 100 events per request.

```bash
curl -X 'POST' \
  'https://app.trubrics.com/api/ingestion/publish_llm_events' \
  -H 'accept: application/json' \
  -H 'x-api-key: TRUBRICS_API_KEY' \
  -H 'Content-Type: application/json' \
  -d '[
  {
    "user_id": "user_id",
    "assistant_id": "gpt-4o",
    "prompt": "Hello",
    "generation": "Hello sir",
    "timestamp": "2024-10-09T13:21:46.182Z",
    "latency": 2.5
    "properties": {
      "$thread_id": "thread_id",
      "a_custom_property": "any custom value"
    }
  }
]'
```

The request body should contain a list of events with the following parameters:

<div class="no-wrap-table" markdown>

| **Parameter** | **Type** | **Description** | **Required** |
|---|:---:|---|:---:|
| `user_id` | `str` | The distinct ID of the signed in user. | _yes_ |
| `assistant_id` | `str` | The AI assistant's ID, typically the model name. | _yes_ |
| `prompt` | `string` | The user's message. | _yes_ |
| `generation` | `string` | The assistant's response. | _yes_ |
| `timestamp` | `Date` | The timestamp of the generation (default: current) | _no_ |
| `latency` | `float` | The time in seconds between the prompt and generation | _no_ |
| `properties` | `dict[str,any]` | A list of properties for both prompts and generations. A single reserved property is `$thread_id` which groups events by conversation thread. Otherwise these can be your custom properties (e.g. cost, number of tokens). Setting properties will allow you to filter and slice analysis in different ways. | _no_ |

</div>

## Authentication
This API contains public endpoints only, that will allow your to write to your Trubrics project. The `x_api_key` is a required header for your request.

--8<-- "utils/api_key.md"
