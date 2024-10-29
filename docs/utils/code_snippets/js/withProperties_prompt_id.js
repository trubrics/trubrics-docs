const properties = { $prompt_id: "6720tb-726du-9461", $generation_id: "1532ds-243kj-3538" };

const llmFunction = (messages) => openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages
});

const completion = await trubrics.withProperties(properties, () => llmFunction(messages));
