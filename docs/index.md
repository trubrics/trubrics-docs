Once you have reviewed [which events to track](what_to_track.md), you can use one of our [SDK's](../track_events/sdks/python.md) in your application to start tracking events. 


## Install SDK

Firstly you need to install one of our SDK's (Python, Node.js, Javascript Web) in your application:

=== "Javascript/Node.js"

    ```bash
    --8<-- "utils/code_snippets/js/install_npm.md"
    ```

=== "Python"

    ```bash
    --8<-- "utils/code_snippets/python/install_pip.md"
    ```


## Initialise SDK and authenticate with Trubrics

Now ensure that Trubrics is imported & initialised in your app:

=== "Javascript/Node.js"
  
    ``` ts
    --8<-- "utils/code_snippets/js/init.js"
    ```

=== "Python"

    ``` py
    --8<-- "utils/code_snippets/python/init.py"
    ```

--8<-- "utils/api_key.md"

## Track user events (Sign Up, Conversion, etc.)

=== "Javascript/Node.js"

    ``` ts
    --8<-- "utils/code_snippets/js/track_signup.js"
    ```

=== "Python"
    
    ``` py
    --8<-- "utils/code_snippets/python/track_signup.py"
    ```

For more information on SDK's and how to track events, please refer to the [SDK documentation](../track_events/sdks/index.md).

## Track AI events (Prompts, Generations, etc.)

If you are using Open AI, you can easily [start tracking](../track_events/sdks/open_ai.md) prompts, generations and tool calls:

=== "Javascript/Node.js"
    In order to automatically detect LLM calls, your LLM SDK must be fed into the Trubrics constructor:

    ``` ts
    --8<-- "utils/code_snippets/js/openai_init.js"
    ```

=== "Python"

    ``` py
    --8<-- "utils/code_snippets/python/init.py"
    ```

--8<-- "utils/api_key.md"

Now start tacking prompts, generations and tool calls from OpenAI by using the withProperties wrapper:

=== "Javascript/Node.js"
    The withProperties function wraps around your LLM function and returns the same response object as your LLM function.
    It takes an additional properties dictionary, which allows you to add context to your LLM events such as user ID's and thread ID's.

    ``` ts
    --8<-- "utils/code_snippets/js/withProperties.js"
    ```

=== "Python"

    ``` py
    # Coming soon
    ```