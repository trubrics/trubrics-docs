const properties = { $user_id: "my-user", $thread_id: "1532ds-243kj-3538", custom_property: "custom_value" };

const llmFunction = (messages) => langchain.stream(messages);

const stream = await trubrics.withProperties(properties, () => llmFunction(messages));

// Properties can be null
const completionWithoutProperties = await trubrics.withProperties(null, () => llmFunction(messages));