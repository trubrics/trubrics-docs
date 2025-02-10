# Python

Here we'll cover how to collect events in python. Our SDK calls are non-blocking and fast, meaning they won't get in the way of your python app's performance.

## Install (requires python>3.10)

Firstly, install Trubrics in your `venv` with:

``` bash
--8<-- "utils/code_snippets/python/install_pip.md"
```

## Initialise Trubrics

Then, initialise the SDK

``` py
--8<-- "utils/code_snippets/python/init_optionals.py"
```

--8<-- "utils/api_key.md"

<div class="no-wrap-table" markdown>

| **Parameter** | **Type** | **Description** | **Required** |
|---|:---:|---|:---:|
| `api_key` | `str` | Your project API key. | _yes_ |
| `flush_interval` | `int` | Time in seconds between automatic flushes (default: 10) | _no_ |
| `flush_at` | `int` | Number of events that trigger a flush (default: 20) | _no_ |
| `logger` | `logging.Logger` | A custom logger | _no_ |

</div>

The client uses python's logging library to log messages, by default at the ERROR level.

To adjust the verbosity of the default logs, specify the log level:

``` py
--8<-- "utils/code_snippets/python/logger_setLevel.py"
```

Or specify your own logger completely:

``` py
--8<-- "utils/code_snippets/python/logger_custom.py"
```

## Track events

Finally, track your events with:

``` py
--8<-- "utils/code_snippets/python/track_signup.py"
```

<div class="no-wrap-table" markdown>

| **Parameter** | **Type** | **Description** | **Required** |
|---|:---:|---|:---:|
| `user_id` | `str` | The distinct ID of the user that is signed in to your app. | _yes_ |
| `event` | `str` | The name of the event you are tracking. This can range from "User prompt", "Sign in", "Generation", etc. | _yes_ |
| `properties` | `dict[str,any]` | A list of properties of the event. For example, a "Generation" event could have properties "Cost of generation" or "Prompt template". [Trubrics properties](#trubrics-properties) are prefixed with a `$`. | _no_ |
| `timestamp` | `datetime` | The timestamp of the event. This defaults to the current timestamp | _no_ |

</div>

--8<-- "utils/trubrics_properties.md"

To ensure all events are flushed before terminating your app, you may call the close function:

``` py
--8<-- "utils/code_snippets/python/close.py"
```

## Track LLM events

In addition to regular events, you may track LLM events (prompts and generations) with:

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
| `latency` | `float` | The time in seconds between the prompt and generation. This defaults to 1 | _no_ |

</div>
