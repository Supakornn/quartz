---
tags:
  - software-architecture
---

![[Pasted image 20250927051052.png]]

**Microservices architecture** is a modern approach where an application is broken down into a collection of small, independent services. Each service is responsible for a specific business capability, runs in its own process, and communicates with others through lightweight protocols such as HTTP/REST, gRPC, or messaging systems.

### Characteristics

- Application split into multiple independent services
- Each service runs in its own process (independent runtime)
- Services communicate via APIs or messaging queues
- Decentralized data management (each service may have its own database)
- Polyglot: different services can use different technology stacks
- Independently deployable and scalable
    
### Advantages

- Independent scaling of services based on demand
- Easier to adopt new technologies in individual services
- Fault isolation: failure in one service doesn’t crash the whole system
    
- Teams can work autonomously on different services
    
- Continuous delivery and faster iterations
    

### Disadvantages

- Increased operational complexity (orchestration, networking, monitoring)
    
- More difficult debugging and testing (distributed environment)
    
- Requires strong DevOps and automation practices
    
- Data consistency challenges (distributed databases)
    
- Higher initial setup cost compared to monolith