Here we'll cover how to automatically track prompts and generations from an LLM in Python.

Track your LLM events with:

``` ts
--8<-- "utils/code_snippets/python/track_llm.py"
```

<div class="no-wrap-table" markdown>

| **Parameter** | **Type** | **Description** | **Required** |
|---|:---:|---|:---:|
| `user_id` | `string` | The distinct ID of the user that is signed in to your app. | _yes_ |
| `prompt` | `string` | The user's message. | _yes_ |
| `assistant_id` | `string` | The AI assistant's ID, typically the model name. | _yes_ |
| `generation` | `string` | The assistant's response. | _yes_ |
| `properties` | `dict[str,any]` | A list of properties of the event. [Trubrics properties](#trubrics-properties) are prefixed with a `$`. | _no_ |
| `timestamp` | `datetime` | The timestamp of the generation. This defaults to the current timestamp | _no_ |
| `latency` | `int` | The time in milliseconds between the prompt and generation. This defaults to 1 | _no_ |

</div>

If you have not implemented auth, use a [UUID](https://www.npmjs.com/package/uuid) to assign events to an anonymous user.

--8<-- "utils/trubrics_properties.md"