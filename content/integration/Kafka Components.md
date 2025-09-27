---
tags:
  - kafka
---
**Apache Kafka** is a distributed messaging system. Its **components** work together to let services send, receive, and process messages efficiently.

### 1. Producer

- Sends messages (events) to Kafka topics
- Can choose **which partition** to send messages to
- Supports synchronous or asynchronous sending
    
### 2. Consumer

- Reads messages from Kafka topics
- Can subscribe to one or more topics
- Supports consumer groups for load balancing
    

### 3. Broker

- Kafka server that **stores messages**
- Multiple brokers form a **cluster** for high availability and scalability
    

### 4. Topic

- Category or feed name for messages
- Messages are published to topics by producers
- Consumers read messages from topics
    

### 5. Partition

- Topics are split into partitions for **parallelism and scalability**
- Message order is guaranteed **within a partition** but not across partitions
    

### 6. Zookeeper (optional / older versions)

- Manages Kafka cluster metadata
- Tracks brokers, topics, partitions, and leader elections
    

### 7. Message Ordering

- FIFO (First-In-First-Out) is **guaranteed per partition**
- Ordering across partitions is **not guaranteed**
- Use **partition key** to maintain order for related messages
    
### See also

- [[Apache Kafka]]
- [[Messaging Systems]]
- [[Microservices]]
- [[Event-Driven]]
    
