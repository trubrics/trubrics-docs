trubrics.track_llm(
    user_id="user_id",
    prompt="What is Trubrics?",
    assistant_id="gpt4o",
    generation="Trubrics is the leading product analytics platform for AI applications.",
    properties={
        "support_tier": "entreprise",
    },
    latency=2,
    thread_id="your-thread-id",
    timestamp=datetime.now()
)
