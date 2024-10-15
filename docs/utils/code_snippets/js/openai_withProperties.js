const properties = { $user_id: "my-user", $thread_id: "1532ds-243kj-3538", custom_property: "custom_value" };

const llmFunction = (messages) => openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages
});

const completion = await trubrics.withProperties(properties, () => llmFunction(messages));

// Properties can be null
const completionWithoutProperties = await trubrics.withProperties(null, () => llmFunction(messages));
