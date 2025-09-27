---
tags:
  - kafka
---

### 1. KRaft (Kafka Raft)

- New Kafka mode **without Zookeeper**
- Uses **internal Raft quorum** to manage metadata
- Simplifies deployment and cluster management
- Improves reliability and scalability

### 2. Offset

- Position of a **consumer in a partition**
- Tells Kafka **which messages have been read** 
- Can be **committed automatically or manually**
- Allows **replay of messages** by resetting offset
    
### 3. Pull-based vs Push-based

- **Pull-based:** consumer requests messages from broker (standard Kafka behavior)
    
    - Consumer controls processing rate → backpressure possible
        
- **Push-based:** broker pushes messages to consumer (rare in Kafka)

    - Can overwhelm consumer if rate is high
### Key Points

- KRaft replaces Zookeeper → simpler cluster management
- Offset allows **resuming, replaying, or skipping messages**
- Pull-based model → better scalability and flow control
- Push-based → more common in traditional messaging, not Kafka

### See also

- [[Apache Kafka]]
- [[Kafka Components]]
- [[Microservices]]
- [[Event-Driven]]]