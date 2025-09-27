---
tags:
  - microservices
  - workflow
---
## Orchestration

**Orchestration** is a workflow pattern where a **central service (orchestrator)** controls and coordinates the actions of multiple microservices.

### Characteristics

- Central orchestrator controls the flow of events
- Orchestrator tells each service **what to do and when**
- Can manage transactions, retries, and error handling
    
### Advantages

- Clear, centralized control of complex workflows
- Easier to monitor and debug
- Good for long-running or multi-step transactions
    
### Disadvantages

- Central orchestrator can become a **bottleneck**
- Adds a single point of failure
- Less flexible; services depend on orchestrator

## Choreography

**Choreography** is a workflow pattern where services **react to events independently** without a central orchestrator.

### Characteristics

- No central controller; services communicate via **events**
- Each service decides what to do when it receives an event
- Works well with **Event-Driven Architecture**
    
### Advantages

- Services remain loosely coupled → more scalable
- No single point of failure
- Easier to extend or add new services
    
### Disadvantages

- Harder to monitor and debug
- Complex to reason about workflow and failures
- Event ordering and consistency can be challenging

### See also

- [[Microservices]]
- [[Transactions Across Microservices]]