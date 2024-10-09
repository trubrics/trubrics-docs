const properties = { $user_id: "my-user", $thread_id: "1532ds-243kj-3538", custom_property: "custom_value" };

const llmFunction = (messages) => azureOpenai.chat.completions.create({
    model: "gpt-4o-mini",
    messages
});

const completion = await trubrics.withProperties(properties, () => llmFunction(messages));