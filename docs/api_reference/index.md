# API reference

To get started collecting events in your application using Trubrics, consult first our [Javascript SDK](../track_events/sdks/javascript.md) or [Python SDK](../track_events/sdks/python.md). If your language is not supported, you can send events directly to our API:

```bash
curl -X 'POST' \
  'https://app.trubrics.com/api/ingestion/publish_event' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: TRUBRICS_API_KEY' \
  -d '{
  "user_id": "user_id",
  "event": "LLM generation",
  "timestamp": "2024-10-09T13:21:46.182Z",
  "properties": {
    "$text": "Tell me a joke",
    "$thread_id": "thread_id",
    "$assistant_id": "assistant_id",
    "a_custom_property": "any custom value"
  }
}'
```

The request body should contain the following parameters:

<div class="no-wrap-table" markdown>

| **Parameter** | **Type** | **Description** | **Required** |
|---|:---:|---|:---:|
| `user_id` | `str` | The distinct ID of the signed in user. | _yes_ |
| `event` | `str` | The name of the event you are tracking. This can range from "User prompt", "Sign in", "Generation", etc. | _yes_ |
| `timestamp` | `str` | The timestamp of the event. | _yes_ |
| `properties` | `dict[str,any]` | A list of properties of the event. For example, a "Generation" event could have properties "Cost of generation" or "Prompt template". Trubrics properties are prefixed with a `$`. | _no_ |

</div>

## Authentication
This API contains public endpoints only, that will allow your to write to your Trubrics project. The `x_api_key` is a required header for your request.

--8<-- "utils/api_key.md"
