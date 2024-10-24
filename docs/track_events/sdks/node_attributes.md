Here we'll cover how to add attributes to a previous event. For instance, you may want to add feedback to a previous assistant message.

### Identifying your events

First you will want to tag your events with an ID. This can be done with either a `prompt_id` or a `generation_id`:

``` ts
--8<-- "utils/code_snippets/js/withProperties_prompt_id.js"
```

This ensures you are able to link back to the prompt and its corresponding generation.

### Adding attributes

Those same ID's can then be used to add attributes. Attributes can only be added to one message at a time so be sure to only include a `prompt_id` OR a `generation_id`.

For example, to add positive feedback to the previous generation:

``` ts
--8<-- "utils/code_snippets/js/addMessageAttributes.js"
```

The `attribute_id` can be found in your Trubrics account under Text Attributes. It is generated when you create an attribute.