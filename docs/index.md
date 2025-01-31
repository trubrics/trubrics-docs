Once you have reviewed [which events to track](what_to_track.md), you can use one of our [SDK's](../track_events/sdks/python.md) in your application to start tracking events. 


## Install SDK

Firstly you need to install one of our SDK's in your application:

=== "Javascript"

    ```bash
    --8<-- "utils/code_snippets/js/install_npm.md"
    ```

=== "Python"

    ```bash
    --8<-- "utils/code_snippets/python/install_pip.md"
    ```


## Initialise SDK and authenticate with Trubrics

Now ensure that Trubrics is imported & initialised in your app:

=== "Javascript"
  
    ``` ts
    --8<-- "utils/code_snippets/js/init_trubrics.js"
    ```

=== "Python"

    ``` py
    --8<-- "utils/code_snippets/python/init.py"
    ```

--8<-- "utils/api_key.md"

## Track user events (Sign Up, Conversion, etc.)

=== "Javascript"

    ``` ts
    --8<-- "utils/code_snippets/js/track_signup.js"
    ```

=== "Python"
    
    ``` py
    --8<-- "utils/code_snippets/python/track_signup.py"
    ```

For more information on SDK's and how to track events, please refer to the [SDK documentation](../track_events/sdks/index.md).

## Track LLM events (Prompts and Generations)

=== "Javascript"

    ``` ts
    --8<-- "utils/code_snippets/js/track_llm.js"
    ```

=== "Python"

    ``` py
    --8<-- "utils/code_snippets/python/track_llm.py"
    ```