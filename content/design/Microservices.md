---
tags:
  - software-architecture
  - microservices
---
**Microservices** is a way to build software by splitting an app into small, independent services. Each service does one job and talks to others using [[RESTful]], [[gRPC]], or messaging systems.

### Characteristics

- App is split into many small services
- Each service runs in its own process
- Services communicate through APIs or message queues
- Each service can have its own database
- Different services can use different technologies
- Each service can be deployed and scaled separately

### Advantages

- Services can scale independently
- Easy to try new technologies in each service
- If one service fails, the whole system doesn’t crash
- Teams can work independently on different services
- Can release updates faster

### Disadvantages

- More complex to manage (orchestration, network, monitoring)
- Debugging and testing harder because system is distributed
- Requires more DevOps and automation
- Harder to keep data consistent across services
- Higher initial setup cost than [[Monolithic]]
- Tight coupling between services increases risk of cascading failures ([[Types of Coupling]])

### See also

- [[Monolithic]]
- [[gRPC]]
- [[RESTful]]
- [[Event-Driven]]
- [[Transactions Across Microservices]]