Here we'll cover how to automatically track events from LLM models in Node.js. Events such as prompts, generations and tool calls can be captured with just a few lines of code.

## Initialization

Trubrics must be initialized with your LLM client. This helps make the automatic tracking more accurate.

### Foundation models

=== "Azure OpenAI"

    OpenAI must be imported alongside AzureOpenAI:

    ``` ts
    --8<-- "utils/code_snippets/js/azure_openai_init.js"
    ```

=== "Anthropic"

    ``` ts
    // Coming soon
    ```

=== "Amazon Bedrock"

    ``` ts
    // Coming soon
    ```

=== "Amazon Sagemaker"

    ``` ts
    // Coming soon
    ```

=== "Cohere"

    ``` ts
    // Coming soon
    ```

=== "IBM Watson"

    ``` ts
    // Coming soon
    ```

=== "Google Gemini"

    ``` ts
    // Coming soon
    ```

=== "Google VertexAI"

    ``` ts
    // Coming soon
    ```

=== "Mistral AI"

    ``` ts
    // Coming soon
    ```

=== "Ollama"

    ``` ts
    // Coming soon
    ```

=== "OpenAI"

    ``` ts
    --8<-- "utils/code_snippets/js/openai_init.js"
    ```

=== "Replicate"

    ``` ts
    // Coming soon
    ```

=== "together.ai"

    ``` ts
    // Coming soon
    ```

=== "HuggingFace Transformers"

    ``` ts
    // Coming soon
    ```

### Frameworks

=== "Langchain"

    Your LLM client must be imported alongside other LangChain imports:

    ``` ts
    --8<-- "utils/code_snippets/js/langchain_init.js"
    ```

=== "LlamaIndex"

    ``` ts
    // Coming soon
    ```

## Tracking

You can now start tracking prompts, generations and tool calls by using the `withProperties` wrapper.

The `withProperties` function wraps around your LLM function and returns the same response object as your LLM function.
It takes an optional `properties` dictionary, which allows you to add context to your LLM events such as user ID's and thread ID's.

``` ts
--8<-- "utils/code_snippets/js/withProperties.js"
```

--8<-- "utils/trubrics_properties_memo.md"