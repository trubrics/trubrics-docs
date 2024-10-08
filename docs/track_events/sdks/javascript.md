Here we'll cover how to collect events from your client side web application. Our [Javascript SDK](https://www.npmjs.com/package/@trubrics/trubrics) is designed to be non-blocking and fast, meaning it won't get in the way of your app's performance. Here's how to get started:

## Install

Firstly, install Trubrics in your project with:

```bash
--8<-- "utils/code_snippets/js/install_npm.md"
```


## Getting started in Javascript

Initialize the Trubrics SDK in your app:


``` ts
--8<-- "utils/code_snippets/js/init.js"
```

--8<-- "utils/api_key.md"


Now track your events with:

``` ts
--8<-- "utils/code_snippets/js/track.js"
```

| **Parameter** | **Type** | **Description** | **Required** |
|---|:---:|---|:---:|
| `event` | `string` | The name of the event you want to track. | _yes_ |
| `user_id` | `string` | The distinct ID of the user that is signed in to your app. | _yes_ |
| `properties` | `object` | A list of properties of the event. For example, a "Generation" event could have properties "Cost of generation" or "Prompt template". [Trubrics properties](#trubrics-properties) are prefixed with a `$`. | _no_ |

If you have not implemented auth, use a [UUID](https://www.npmjs.com/package/uuid) to assign events to an anonymous user.

--8<-- "utils/trubrics_properties.md"
