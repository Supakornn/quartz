---
tags:
  - service-communication
  - microservices
---
Microservices need to communicate with each other. Communication can be **synchronous or asynchronous**, and **blocking or non-blocking** depending on the use case.

### Characteristics

- **Synchronous:** client waits for a response before continuing
- **Asynchronous:** client does not wait, continues immediately
- **Blocking:** client stops until response comes back
- **Non-blocking:** client can continue without waiting
- Supports APIs ([[RESTful]], [[gRPC]]) and messaging systems (RabbitMQ, [[Apache Kafka]])

### Advantages

- Synchronous: simple, easy to debug, good for request-response operations
- Asynchronous: scalable, decoupled services, handles spikes well
- Non-blocking: better performance and responsiveness
- Flexible: can mix sync and async for best results

### Disadvantages

- Synchronous/Blocking: slower if service is busy, failures can block clients
- Asynchronous/Non-blocking: more complex to implement and debug
- Tracing and monitoring are harder in async systems

### See also

- [[RESTful]]
- [[RPC]]
- [[gRPC]]
- [[Messaging Systems]]
- [[Microservices]]