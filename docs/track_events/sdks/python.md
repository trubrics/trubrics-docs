Once you have created a [Trubrics](https://app.trubrics.com) account, you can login and navigate to the settings page to find your project API key. This is a write only API key that allows you to push events to Trubrics.

Here we'll cover how to collect events in python. For all other integrations, refer to the [Rest API](../../api_reference/api_reference.md) reference. Our SDK calls are non-blocking and fast, meaning it won't get in the way of your python app's performance.


### Install python>3.8

Firstly, install Trubrics in your `venv` with:
```bash
pip install trubrics-beta
```

### Getting started in python

Now you can start tracking your events with:
```python
from trubrics_beta import Trubrics

trubrics = Trubrics(api_key="TRUBRICS_API_KEY")  # use environment variables to pass in the API key

trubrics.track(  # use track_sync for synchronous requests
    user_id="user_id",
    event="prompt",
    properties={
        "$text": "tell me a story",
        "$thread_id": "1234",
        "a_custom_property": "a custom value",
    },
)
```

| **Parameter** | **Type** | **Description** | **Required** |
|---|:---:|---|:---:|
| `user_id` | `str` | The distinct ID of the user that is signed in to your app. | _yes_ |
| `event` | `str` | The name of the event you are tracking. This can range from "User prompt", "Sign in", "Generation", etc. | _yes_ |
| `properties` | `dict[str,any]` | A list of properties of the event. For example, a "Generation" event could have properties "Cost of generation" or "Prompt template". [Trubrics properties](#trubrics-properties) are prefixed with a `$`. | _no_ |


If you have not implemented auth, use a [UUID](https://docs.python.org/3/library/uuid.html#uuid.uuid4) to assign events to an anonymous user.


### Trubrics properties

Any property that begins with a `$` is a property recognised by Trubrics. This allows us to perform certain actions in the ingestion pipeline and backend. Here are a list of Trubrics properties:

- `$text`: events that contain a textual element should use this property, as it allows Trubrics to tag the event with text attributes during ingestion. Text attributes can be managed directly in Trubrics.

- `$thread_id`: to identify when a user is interacting with an AI assistant within their session. This allows you to distinguish between non-AI assistant interactions such as "Sign In" and events within a thread such as "Prompt" and "Generation". With an LLM powered assistant, this ID should be unique for each different conversation.

- `$assistant_id`: events that are made by an assistant, such as "Generation" or "Query database". Typically for LLM assistants this can be set to the model name, such as "GPT-4" or "GPT-3.5-turbo".