---
tags:
  - software-architecture
---
**Event-Driven Architecture (EDA)** is a way for services to communicate by **sending and reacting to events**, instead of calling each other directly. It is common in [[Microservices]].

### Characteristics

- Services communicate via **events** (messages)
- Services **do not wait** for a response (asynchronous)
- Can use **message brokers** like Kafka, RabbitMQ, or NATS
- Enables **loose coupling** between services
- Supports **real-time processing**

### How it Works

1. **Event is Created (Produced)**
    
    - A service performs an action and **emits an event**
    - Example: `OrderCreated` event after a new order is placed
        
2. **Event is Sent to Broker**
    
    - Events are sent to a **message broker** (Kafka, RabbitMQ, NATS)
    - Broker ensures delivery to interested services
        
3. **Other Services Subscribe (Consumed)**
    
    - Services **subscribe** to specific event types
    - Example: `InventoryService` listens to `OrderCreated` to update stock
        
4. **Services React to Event**
    
    - Subscribed services process the event **independently**
    - Can trigger new events, update DB, send notifications, etc.
        
5. **Optional: Event Storage / Replay**

    - Events can be **stored** for auditing or replaying
    - Useful for rebuilding system state or debugging

### Advantages

- Services are independent → easier to maintain
- Scales well for high traffic or spikes
- Good for background jobs, notifications, and async workflows
- Decouples sender and receiver → faster deployment
    
### Disadvantages

- More complex to implement and monitor
- Debugging and tracing is harder than synchronous calls
- Requires message broker infrastructure
- Event ordering and data consistency can be challenging
    
### See also

- [[Messaging Systems]]
- [[Microservices]]
- [[Microservices Communication]]
- [[Apache Kafka]]
- [[RPC]]
- [[gRPC]]