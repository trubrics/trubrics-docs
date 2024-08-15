Once you have reviewed [which events to track](what_to_track.md), you can use one of our [SDK's](../track_events/sdks/python.md) in your application to start tracking events. 


## Install SDK

Firstly you need to install one of our SDK's (Python, Node.js, Javascript (web)) in your application:

=== "Javascript/Node.js"

    ```bash
    --8<-- "utils/code_snippets/install_npm.md"
    ```

=== "Python"
    ```bash
    --8<-- "utils/code_snippets/install_pip.md"
    ```


## Initialise SDK and authenticate with Trubrics

Now ensure that Trubrics is imported & initialised in your app:

=== "Javascript/Node.js"
    
    ``` ts
    --8<-- "utils/code_snippets/init.js"
    ```

=== "Python"
    ``` py
    --8<-- "utils/code_snippets/init.py"
    ```

--8<-- "utils/api_key.md"

## Track user events (Sign Up, Conversion, etc.)

=== "Javascript/Node.js"

    ``` ts
    --8<-- "utils/code_snippets/track_signup.js"
    ```

=== "Python"
    
    ``` py
    --8<-- "utils/code_snippets/track_signup.py"
    ```

For more information on these 

## Track AI events (Prompts, Generations, etc.)

If you are using Open AI, you can start tracking prompts and generations by adding a single line to your OpenAI initializer:

=== "Javascript/Node.js"

    ``` ts
    import OpenAI from "openai";

    const openai = new OpenAI({
        apiKey: OPENAI_API_KEY,
        fetch: trubrics.openaiFetch, // (1)!
    });
    ```

    1.  Just add this single line!

=== "Python"
    ``` py
    # Coming soon
    ```