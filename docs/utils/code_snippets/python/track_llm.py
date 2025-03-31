trubrics.track_llm(
    user_id="user_id",
    assistant_id="gpt4o",
    prompt="What is Trubrics?",
    generation="Trubrics is the leading product analytics platform for AI applications.",
    prompt_event_name="User Prompt",
    generation_event_name="Assistant Generation",
    properties={
        "support_tier": "entreprise",
    },
    latency=2,
    thread_id="your-thread-id",
    timestamp=datetime.now()
)
