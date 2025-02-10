Here we'll cover how to collect events in python. Our SDK calls are non-blocking and fast, meaning they won't get in the way of your python app's performance.

## Install (requires python>3.8)

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

| **Parameter** | **Type** | **Description** | **Required** |
|---|:---:|---|:---:|
| `api_key` | `str` | Your project API key. | _yes_ |
| `flush_interval` | `int` | Time in seconds between automatic flushes (default: 10) | _no_ |
| `flush_at` | `int` | Number of events that trigger a flush (default: 20) | _no_ |
| `logger` | `logging.Logger` | A custom logger | _no_ |

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

| **Parameter** | **Type** | **Description** | **Required** |
|---|:---:|---|:---:|
| `user_id` | `str` | The distinct ID of the user that is signed in to your app. | _yes_ |
| `event` | `str` | The name of the event you are tracking. This can range from "User prompt", "Sign in", "Generation", etc. | _yes_ |
| `properties` | `dict[str,any]` | A list of properties of the event. For example, a "Generation" event could have properties "Cost of generation" or "Prompt template". [Trubrics properties](#trubrics-properties) are prefixed with a `$`. | _no_ |
| `timestamp` | `datetime` | The timestamp of the event. This defaults to the current timestamp | _no_ |

If you have not implemented auth, use a [UUID](https://docs.python.org/3/library/uuid.html#uuid.uuid4) to assign events to an anonymous user.

--8<-- "utils/trubrics_properties.md"

To ensure all events are flushed before 
