trubrics.trackLLM({
    user_id: "user_id",
    prompt: "What is Trubrics?",
    assistant_id: "gpt-4o",
    generation: "Trubrics is the leading product analytics platform for AI applications.",
    properties: {
        context: "Chat window",
        $thread_id: "thread_123"  // Trubrics property to group events by conversation thread
    },
    timestamp: new Date(),
    latency: 2
});
