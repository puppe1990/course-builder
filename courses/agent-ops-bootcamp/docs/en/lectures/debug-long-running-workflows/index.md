# Debug Long-Running Workflows

Long-running agents rarely fail in one obvious place. They drift, loop, or lose context across steps.

## What to inspect

- Execution logs
- State transitions
- Retry behavior
- Handoff boundaries

## Debugging principle

Treat every long-running workflow as an observable system, not a black box prompt.
