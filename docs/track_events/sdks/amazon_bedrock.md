To get started collecting events in your application using Amazon Bedrock, our SDKs have methods to automate AI event collection with a single line of code.

??? info "Install SDK"
    === "Javascript/Node.js"

        ```bash
        --8<-- "utils/code_snippets/js/install_npm.md"
        ```

    === "Python"

        ```bash
        --8<-- "utils/code_snippets/python/install_pip.md"
        ```

Firstly, ensure that Trubrics is imported & initialised in your app:

=== "Javascript/Node.js"

    ``` ts
    --8<-- "utils/code_snippets/js/init.js"
    ```

=== "Python"

    ``` py
    --8<-- "utils/code_snippets/python/init.py"
    ```

--8<-- "utils/api_key.md"

Now start tacking prompts, generations and tool calls from Amazon Bedrock by using the withProperties wrapper:

=== "Javascript/Node.js"
    The withProperties function wraps around your LLM function and returns the same response object as your LLM function.
    It takes an additional properties dictionary, which allows you to add context to your LLM events such as user ID's and thread ID's.

    ``` ts
    --8<-- "utils/code_snippets/js/amazon_bedrock_withProperties.js"
    ```

=== "Python"

    ``` py
    # Coming soon
    ```

--8<-- "utils/trubrics_properties_memo.md"