# SDKs

The Trubrics SDKs are libraries that allow you to track events in your application. Each library contains methods that also facilitate tracking of AI events from popular AI SDKs such as OpenAI, Langchain, etc. Libraries are non-blocking and super fast, so you can be sure that they won't slow down your application.

???+ question "Server-side Vs client-side event tracking"
    We recommend using server-side SDKs for tracking events in your application. The main reason for this is because that is where the majority of your business logic / AI properties are stored. Modern web browsers are also making it increasingly difficult to track events, meaning that your event tracking will be less accurate on the client side.

## Server side SDKs

### Python
- [Getting started](python.md)
- [LLM tracking](python_llm_tracking.md)
- [Adding attributes](python_attributes.md)

### Node.js
- [Getting started](node.md)
- [LLM tracking](node_llm_tracking.md)

## Client side SDKs
- [Javascript (Web)](javascript.md)

Or use directly our [Rest API](../../api_reference/index.md).
