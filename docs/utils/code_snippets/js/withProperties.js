const properties = { user_id: "my-user", thread_id: "1532ds-243kj-3538" };

const llmFunction = (messages) => openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages
});

const completion = await trubrics.withProperties(properties, llmFunction);