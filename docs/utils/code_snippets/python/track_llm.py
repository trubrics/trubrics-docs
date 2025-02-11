trubrics.track_llm(
    user_id="user_id",
    prompt="What is Trubrics?",
    assistant_id="gpt4o",
    generation="Trubrics is the leading product analytics platform for AI applications.",
    properties={
        "$thread_id": "your-thread-id",  # special trubrics property to group conversation
        "model": "gpt-4",
    },
    latency=2,
)
