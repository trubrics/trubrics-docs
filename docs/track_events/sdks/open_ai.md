To get started collecting events in your application using OpenAI, our SDKs have methods to automate AI event collection with a single line of code.

??? info "Install SDK"
    === "Javascript/Node.js"
    
        ```bash
        --8<-- "utils/code_snippets/install_npm.md"
        ```

    === "Python"
        ```bash
        --8<-- "utils/code_snippets/install_pip.md"
        ```

Firstly, ensure that Trubrics is imported & initialised in your app:

=== "Javascript/Node.js"
    
    ``` ts
    --8<-- "utils/code_snippets/init.js"
    ```

=== "Python"
    ``` py
    --8<-- "utils/code_snippets/init.py"
    ```

--8<-- "utils/api_key.md"

Now start tacking prompts and generations from OpenAI by adding a single line to your OpenAI initializer:

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

## Advanced tracking

While this is all you need to start tracking Open AI messages with Trubrics, enhanced Trubrics features such as Threads will require a [tool](https://platform.openai.com/docs/api-reference/chat/create) to be set in the openai.chat.completions.create() request. This tool will only serve the purpose of transmitting metadata to Trubrics, and will be removed from the request to Open AI.

This tool must be named "Trubrics parameters" and be structured as below. It can be added to an existing list of tools, or as a single tool.

We recommend including a thread ID and a user ID if a user has not already been identified.

``` js
const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages=[
        {"role": "user", "content": "Who won the world series in 2020?"},
    ],
    tools: [
        {
            "type": "function",
            "function": {
                "name": "Trubrics parameters",
                "parameters": {
                    "thread_id": "your-thread-id",
                    "user_id": "your-user-id"
                }
            }
        }
    ]
});
```