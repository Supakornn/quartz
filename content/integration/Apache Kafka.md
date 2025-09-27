---
tags:
  - service-communication
  - microservices
  - kafka
---
**Apache Kafka** is a messaging system that lets applications **send, receive, and store streams of messages** in real time. It’s used a lot in [[Microservices]] and [[Event-Driven]] systems.

### Characteristics

- Works as a **distributed message broker**
- Messages are stored in **topics**
- Producers send messages, consumers read messages
- Supports **publish/subscribe** and **stream processing**
- High throughput and scalable
    
### Advantages

- Can handle very large amounts of data fast
- Messages are durable (stored on disk)
- Services are decoupled → easier to maintain
- Supports real-time processing
    
### Disadvantages

- Setup and monitoring can be complex
- Learning curve for new users
- Debugging can be harder than direct calls
- Needs proper partitioning and scaling strategy
    
### See also

- [[Messaging Systems]]
- [[Kafka Components]]