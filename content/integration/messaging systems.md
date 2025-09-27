---
tags:
  - service-communication
---
**Messaging Systems** let different parts of a system or different services **talk to each other by sending messages** instead of direct calls. Often used in [[Microservices]].

### Characteristics

- Services send and receive messages asynchronously
- Uses **message queues** or **publish/subscribe** models
- Can handle lots of messages and scale easily
- Helps decouple services (services don’t need to know each other)
    
### Advantages

- Services are loosely coupled → easier to maintain
- Can handle spikes in traffic (queue buffers messages)
- Good for async tasks and background jobs
- Helps with scaling large systems
    
### Disadvantages

- More complex to set up and monitor
- Debugging can be harder (messages may be delayed or lost)
- Need extra components (broker, queue, etc.)
- Some latency compared to direct calls
    
### Examples / Tools

- RabbitMQ
- [[Apache Kafka]]
- Amazon SQS
- NATS
    
### See also

- [[Microservices]]
- [[Apache Kafka]]
- [[Event-Driven]]