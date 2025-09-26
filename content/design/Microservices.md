---
tags:
  - software-architecture
---
**Microservices** is a way to build software by splitting an app into small, independent services. Each service does one specific job and talks to other services using [[RESTful]], [[gRPC]], or [[messaging systems]].

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
- If one service fails, it doesn’t crash the whole system
- Teams can work independently on different services
- Can release updates faster

### Disadvantages
- System is more complex to manage (orchestration, network, monitoring)
- Debugging and testing is harder because the system is distributed
- Requires more DevOps and automation
- Harder to keep data consistent across services
- Higher initial setup cost than [[Monolithic]]