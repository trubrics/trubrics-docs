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
    const openai = new OpenAI({
        apiKey: OPENAI_API_KEY,
        fetch: trubrics.openaiFetch, // (1)!
    });
    ```

    1.  Just add this single line!