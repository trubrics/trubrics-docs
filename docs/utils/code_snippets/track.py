trubrics.track(  # use track_sync for synchronous requests
    user_id="user_id",
    event="prompt",
    properties={
        "$text": "tell me a story",
        "$thread_id": "1234",
        "a_custom_property": "a custom value",
    },
)
