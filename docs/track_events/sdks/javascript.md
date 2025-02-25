# Javascript

Here we'll cover how to collect events from your Javascript application. Our [Javascript](https://www.npmjs.com/package/@trubrics/trubrics) library is designed to be non-blocking and fast, meaning it won't get in the way of your app's performance. It is compatible with client side Javascript as well as server side Node.js. Here's how to get started:

## Install

Firstly, install Trubrics in your project with:

```bash
--8<-- "utils/code_snippets/js/install_npm.md"
```

## Initialise Trubrics

Then, initialize the Trubrics SDK in your app:

``` ts
--8<-- "utils/code_snippets/js/init_optionals.js"
```

--8<-- "utils/api_key.md"

<div class="no-wrap-table" markdown>

| **Parameter** | **Type** | **Description** | **Required** |
|---|:---:|---|:---:|
| `apiKey` | `string` | Your project API key. | _yes_ |
| `flushInterval` | `number` | Time in seconds between automatic flushes (default: 10) | _no_ |
| `flushBatchSize` | `number` | Number of events that trigger a flush (default: 20) | _no_ |
| `isVerbose` | `boolean` | Flag to enable verbose logging (default: false) | _no_ |

</div>

## Track user events

Finally, track any user action events with:

``` ts
--8<-- "utils/code_snippets/js/track_signup.js"
```

<div class="no-wrap-table" markdown>

| **Parameter** | **Type** | **Description** | **Required** |
|---|:---:|---|:---:|
| `event` | `string` | The name of the event you want to track. | _yes_ |
| `user_id` | `string` | The distinct ID of the user that is signed in to your app. | _yes_ |
| `properties` | `object` | A list of properties of the event. These can be your user properties (e.g. company name) or additional properties of the event (e.g. request latency). Setting properties will allow you to filter and slice analysis in different ways. | _no_ |
| `timestamp` | `Date` | The timestamp of the event (default: current) | _no_ |

</div>

## Track LLM events

In addition to regular events, you may track LLM events (prompts and generations) with:

``` ts
--8<-- "utils/code_snippets/js/track_llm.js"
```

<div class="no-wrap-table" markdown>

| **Parameter** | **Type** | **Description** | **Required** |
|---|:---:|---|:---:|
| `user_id` | `string` | The distinct ID of the user that is signed in to your app. | _yes_ |
| `prompt` | `string` | The user's message. | _yes_ |
| `assistant_id` | `string` | The AI assistant's ID, typically the model name. | _yes_ |
| `generation` | `string` | The assistant's response. | _yes_ |
| `properties` | `Record<string, any>` |  A list of properties for both prompts and generations. A single reserved property is `$thread_id` which groups events by conversation thread. Otherwise these can be your custom properties (e.g. cost, number of tokens). Setting properties will allow you to filter and slice analysis in different ways. | _no_ |
| `timestamp` | `Date` | The timestamp of the generation (default: current) | _no_ |
| `latency` | `number` | The time in seconds between the prompt and generation | _no_ |

</div>

--8<-- "utils/session_id.md"