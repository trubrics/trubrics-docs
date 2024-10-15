const properties = { $user_id: "my-user", $thread_id: "1532ds-243kj-3538", custom_property: "custom_value" };

const llmFunction = (prompt) => cohere.generate("large", {prompt});

const result = await trubrics.withProperties(properties, () => llmFunction(prompt));

// Properties can be null
const resultWithoutProperties = await trubrics.withProperties(null, () => llmFunction(prompt));