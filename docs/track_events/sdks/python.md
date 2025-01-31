Here we'll cover how to collect events in python. Our SDK calls are non-blocking and fast, meaning they won't get in the way of your python app's performance.

## Install (requires python>3.8)

Firstly, install Trubrics in your `venv` with:

``` bash
--8<-- "utils/code_snippets/python/install_pip.md"
```

## Getting started in python
Track your events with:

``` py
--8<-- "utils/code_snippets/python/init.py"

--8<-- "utils/code_snippets/python/track_signup.py"
```

--8<-- "utils/api_key.md"

| **Parameter** | **Type** | **Description** | **Required** |
|---|:---:|---|:---:|
| `user_id` | `str` | The distinct ID of the user that is signed in to your app. | _yes_ |
| `event` | `str` | The name of the event you are tracking. This can range from "User prompt", "Sign in", "Generation", etc. | _yes_ |
| `properties` | `dict[str,any]` | A list of properties of the event. For example, a "Generation" event could have properties "Cost of generation" or "Prompt template". [Trubrics properties](#trubrics-properties) are prefixed with a `$`. | _no_ |
| `timestamp` | `datetime` | The timestamp of the event. This defaults to the current timestamp | _no_ |


If you have not implemented auth, use a [UUID](https://docs.python.org/3/library/uuid.html#uuid.uuid4) to assign events to an anonymous user.

--8<-- "utils/trubrics_properties.md"
