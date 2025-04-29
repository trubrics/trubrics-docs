# Python

Here we'll cover how to collect events in python. Our SDK calls are non-blocking and fast, meaning they won't get in the way of your python app's performance.

![type:video](https://www.loom.com/embed/37f3bb26a5684e4eb883ea2d1ffa215d?sid=57577168-93c4-4993-acd2-db34793ca8d4)

## Install (requires python>3.10)

Firstly, install Trubrics in your `venv` with:

``` bash
--8<-- "utils/code_snippets/python/install_pip.md"
```

## Initialise Trubrics

Then, initialise the SDK

``` py
--8<-- "utils/code_snippets/python/init.py"
```

--8<-- "utils/api_key.md"

<div class="no-wrap-table" markdown>

| **Parameter** | **Type** | **Description** | **Required** |
|---|:---:|---|:---:|
| `api_key` | `str` | Your project API key. | _yes_ |
| `flush_interval` | `int` | Time in seconds between automatic flushes (default: 10) | _no_ |
| `flush_batch_size` | `int` | Number of events that trigger a flush (default: 20) | _no_ |
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

## Track user events

Finally, track any user action events with:

``` py
--8<-- "utils/code_snippets/python/track_signup.py"
```

<div class="no-wrap-table" markdown>

| **Parameter** | **Type** | **Description** | **Required** |
|---|:---:|---|:---:|
| `user_id` | `str` | The distinct ID of the user that is signed in to your app. | _yes_ |
| `event` | `str` | The name of the event you are tracking. This can range from "User prompt", "Sign in", "Generation", etc. | _yes_ |
| `properties` | `dict[str,any]` | A list of properties of the event. These can be your user properties (e.g. company name) or additional properties of the event (e.g. request latency). Setting properties will allow you to filter and slice analysis in different ways. | _no_ |
| `timestamp` | `datetime` | The timestamp of the event. This defaults to the current timestamp | _no_ |

</div>

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
| `generation` | `string` | The assistant's response. | _yes_ |
| `prompt_event_name` | `string` | The name of the prompt event displayed in the UI. | _no_ |
| `generation_event_name` | `string` | The name of the generation event displayed in the UI. | _no_ |
| `assistant_id` | `string` | The AI assistant's ID, typically the model name. | _no_ |
| `properties` | `dict[str,any]` | A list of properties for both prompts and generations. Tthese can be your custom properties (e.g. cost, number of tokens). Setting properties will allow you to filter and slice analysis in different ways. | _no_ |
| `timestamp` | `datetime` | The timestamp of the generation. This defaults to the current timestamp | _no_ |
| `latency` | `float` | The time in seconds between the prompt and generation | _no_ |
| `thread_id` | `string` | Groups messages in a thread | _no_ |

</div>

## Closing the client

To ensure all events are flushed before terminating your app, you may call the close function:

``` py
--8<-- "utils/code_snippets/python/close.py"
```

--8<-- "utils/session_id.md"
