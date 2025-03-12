## User events grouped by session

Based on every user event, Trubrics generates a `session_id`. This is a unique identifier for the session that the user is interacting with.

This is different to the `thread_id`, which groups events by conversation thread. A user may have multiple conversations with your AI within a single session, and each conversation will have a unique thread ID.

The session ID is generated based on the events that are tracked for a user. If a user has not interacted with your app for more than 30 minutes, the session will be timed out and a new session ID will be generated.
